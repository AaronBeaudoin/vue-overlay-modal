(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["VueOverlayModal"] = factory(require("lodash"));
	else
		root["VueOverlayModal"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"}
var external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_ = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/OverlayModal.vue?vue&type=template&id=7f218636&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: _vm.transition } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.$modal[_vm.name].isActive,
            expression: "$modal[name].isActive"
          }
        ],
        staticClass: "overlay-modal"
      },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/OverlayModal.vue?vue&type=template&id=7f218636&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib??vue-loader-options!./src/OverlayModal.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//



/* harmony default export */ var OverlayModalvue_type_script_lang_js_ = ({
  name: "overlay-modal",
  props: {
    name: { type: String, required: true },
    transition: { type: String }
  },
  created() {
    this.$plugin = this.$options.pluginData;
  },
  mounted() {
    this.$el.addEventListener("click", this.$modal[this.name].keepActive);
    document.addEventListener("click", this.handleGlobalClick);
    this.$plugin.instances += 1;
  },
  destroyed() {
    document.removeEventListener("click", this.handleGlobalClick);
    this.$plugin.instances -= 1;
  },
  methods: {
    handleGlobalClick(event) {
      let modals = this.$plugin.modals;
      let pluginModal = modals[this.name];

      if (pluginModal.cancelClose) pluginModal.cancelClose = false;
      else if (pluginModal.isActive) this.$plugin.closing.push(this.name);

      this.$plugin.completed += 1;
      if (this.$plugin.completed === this.$plugin.instances) {

        Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(this.$plugin.timeouts, _ => clearTimeout(_.id));
        this.$plugin.timeouts = [];

        if (this.$plugin.closing.length > 0) this.handleClosingClick(event);
        this.$plugin.completed = 0;
      }

    },
    handleClosingClick(event) {
      let modals = this.$plugin.modals;
      let calculateTimeout = this.$plugin.calculateTimeout;
      let timeouts = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["map"])(this.$plugin.closing, calculateTimeout);
      let adjustTimeout = (_, __) => timeouts[__] -= modals[_].closeSpeed;

      Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(this.$plugin.closing, adjustTimeout);
      Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(this.$plugin.closing, this.handleClosingTimeout(timeouts));
      this.$plugin.closing = [];
    },
    handleClosingTimeout(timeouts) {
      return (name, index) => {
        let close = _ => this.$plugin.modals[name].isActive = false;
        let timeoutId = setTimeout(close, timeouts[index]);
        this.$plugin.timeouts.push({ id: timeoutId, modalName: name });
      };
    }
  }
});

// CONCATENATED MODULE: ./src/OverlayModal.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_OverlayModalvue_type_script_lang_js_ = (OverlayModalvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./src/OverlayModal.vue





/* normalize component */

var component = normalizeComponent(
  src_OverlayModalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/OverlayModal.vue"
/* harmony default export */ var OverlayModal = (component.exports);
// CONCATENATED MODULE: ./src/main.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return main_config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });



let data = undefined;
function initPluginData(Vue, config) {
  if (config === undefined) config = {};
  
  let modals = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["mapValues"])(config, modal => {
    let initState = { isActive: false, cancelClose: false };
    if (modal.initActive) initState.isActive = true;
    return { ...modal, ...initState };
  });

  Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(data.modals, (_, name) => Vue.delete(data.modals, name));
  Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(modals, (modal, name) => Vue.set(data.modals, name, modal));
  OverlayModal.pluginData = data;
};

function initPublicData(Vue) {
  Vue.prototype.$modal = Vue.observable({
    get $closeDelay() { return data.calculateTimeout(); }
  });

  Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["forEach"])(data.modals, (modal, name) => {
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

function main_config(config, Vue) {
  if (Vue === undefined) Vue = window.Vue;
  initPluginData(Vue, config);
  initPublicData(Vue);
};

function install(Vue, config) {
  data = {
    modals: Vue.observable({}),
    instances: 0,
    completed: 0,
    closing: [],
    timeouts: [],
    calculateTimeout(name) {
      let modals = data.modals;
      let childNames = Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["filter"])(Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["keys"])(modals), _ => {
        return modals[_].parent === name && modals[_].isActive;
      });

      let value = name === undefined ? 0 : modals[name].closeSpeed;
      if (childNames.length === 0) return value;
      else {
        let recurse = _ => data.calculateTimeout(_);
        return Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["max"])(Object(external_commonjs_lodash_commonjs2_lodash_amd_lodash_root_["map"])(childNames, recurse)) + value;
      }
    }
  };
  
  Vue.directive("open", {
    bind(el, binding) {
      el.addEventListener("click", binding.value.clickOpen);
    }
  });

  main_plugin.config(config, Vue);
  Vue.component(OverlayModal.name, OverlayModal);
  Vue.prototype.$debug = data;
};

let main_plugin = { config: main_config, install: install };
/* harmony default export */ var main = __webpack_exports__["default"] = (main_plugin);

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(main_plugin);
}


/***/ })
/******/ ]);
});