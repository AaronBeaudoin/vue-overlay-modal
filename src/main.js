import { mapValues, forEach, map, filter, max, keys } from "lodash";
import OverlayModal from "./OverlayModal";

let data = undefined;
function initPluginData(Vue, config) {
  if (config === undefined) config = {};
  
  let modals = mapValues(config, modal => {
    let initState = { closeSpeed: 0, isActive: false, cancelClose: false };
    if (modal.initActive) initState.isActive = true;
    return { ...initState, ...modal };
  });

  forEach(data.modals, (_, name) => Vue.delete(data.modals, name));
  forEach(modals, (modal, name) => Vue.set(data.modals, name, modal));
  OverlayModal.pluginData = data;
};

function initPublicData(Vue) {
  Vue.prototype.$modal = Vue.observable({
    get $closeDelay() { return data.calculateTimeout(); }
  });

  forEach(data.modals, (modal, name) => {
    Vue.set(Vue.prototype.$modal, name, {
      get isActive() { return modal.isActive; },
      get closeSpeed() { return modal.closeSpeed; },
      keepActive() { modal.cancelClose = true; },
      clickOpen() { modal.isActive = modal.cancelClose = true; },
      open() { modal.isActive = true; },
      close() { modal.isActive = false; }
    });
  });
};

export function config(config, Vue) {
  if (Vue === undefined) Vue = window.Vue;
  initPluginData(Vue, config);
  initPublicData(Vue);
};

export function install(Vue, config) {
  data = {
    modals: Vue.observable({}),
    instances: 0,
    completed: 0,
    closing: [],
    timeouts: [],
    calculateTimeout(name) {
      let modals = data.modals;
      let childNames = filter(keys(modals), _ => {
        return modals[_].parent === name && modals[_].isActive;
      });

      let value = name === undefined ? 0 : modals[name].closeSpeed;
      if (childNames.length === 0) return value;
      else {
        let recurse = _ => data.calculateTimeout(_);
        return max(map(childNames, recurse)) + value;
      }
    }
  };
  
  Vue.directive("open", {
    bind(el, binding) {
      el.addEventListener("click", binding.value.clickOpen);
    }
  });

  plugin.config(config, Vue);
  Vue.component(OverlayModal.name, OverlayModal);
  Vue.prototype.$debug = data;
};

let plugin = { config: config, install: install };
export default plugin;

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(plugin);
}
