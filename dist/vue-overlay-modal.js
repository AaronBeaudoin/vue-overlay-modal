(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["VueOverlayModal"] = factory(require("lodash"));
	else
		root["VueOverlayModal"] = factory(root["_"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/vue-loader/lib/index.js?!./src/OverlayModal.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib??vue-loader-options!./src/OverlayModal.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n  name: \"overlay-modal\",\r\n  props: {\r\n    name: { type: String, required: true },\r\n    transition: { type: String }\r\n  },\r\n  created() {\r\n    this.$plugin = this.$options.pluginData;\r\n  },\r\n  mounted() {\r\n    this.$el.addEventListener(\"click\", this.$modal[this.name].keepActive);\r\n    document.addEventListener(\"click\", this.handleGlobalClick);\r\n    this.$plugin.instances += 1;\r\n  },\r\n  destroyed() {\r\n    document.removeEventListener(\"click\", this.handleGlobalClick);\r\n    this.$plugin.instances -= 1;\r\n  },\r\n  methods: {\r\n    handleGlobalClick(event) {\r\n      let modals = this.$plugin.modals;\r\n      let pluginModal = modals[this.name];\r\n\r\n      if (pluginModal.cancelClose) pluginModal.cancelClose = false;\r\n      else if (pluginModal.isActive) this.$plugin.closing.push(this.name);\r\n\r\n      this.$plugin.completed += 1;\r\n      if (this.$plugin.completed === this.$plugin.instances) {\r\n\r\n        Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(this.$plugin.timeouts, _ => clearTimeout(_.id));\r\n        this.$plugin.timeouts = [];\r\n\r\n        if (this.$plugin.closing.length > 0) this.handleClosingClick(event);\r\n        this.$plugin.completed = 0;\r\n      }\r\n\r\n    },\r\n    handleClosingClick(event) {\r\n      let modals = this.$plugin.modals;\r\n      let calculateTimeout = this.$plugin.calculateTimeout;\r\n      let timeouts = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(this.$plugin.closing, calculateTimeout);\r\n      let adjustTimeout = (_, __) => timeouts[__] -= modals[_].closeSpeed;\r\n\r\n      Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(this.$plugin.closing, adjustTimeout);\r\n      Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(this.$plugin.closing, this.handleClosingTimeout(timeouts));\r\n      this.$plugin.closing = [];\r\n    },\r\n    handleClosingTimeout(timeouts) {\r\n      return (name, index) => {\r\n        let close = _ => this.$plugin.modals[name].isActive = false;\r\n        let timeoutId = setTimeout(close, timeouts[index]);\r\n        this.$plugin.timeouts.push({ id: timeoutId, modalName: name });\r\n      };\r\n    }\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack://VueOverlayModal/./src/OverlayModal.vue?./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/OverlayModal.vue?vue&type=template&id=7f218636&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/OverlayModal.vue?vue&type=template&id=7f218636& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return staticRenderFns; });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"transition\", { attrs: { name: _vm.transition } }, [\n    _c(\n      \"div\",\n      {\n        directives: [\n          {\n            name: \"show\",\n            rawName: \"v-show\",\n            value: _vm.$modal[_vm.name].isActive,\n            expression: \"$modal[name].isActive\"\n          }\n        ],\n        staticClass: \"overlay-modal\"\n      },\n      [_vm._t(\"default\")],\n      2\n    )\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack://VueOverlayModal/./src/OverlayModal.vue?./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options");

/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return normalizeComponent; });\n/* globals __VUE_SSR_CONTEXT__ */\n\n// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).\n// This module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle.\n\nfunction normalizeComponent (\n  scriptExports,\n  render,\n  staticRenderFns,\n  functionalTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier, /* server only */\n  shadowMode /* vue-cli only */\n) {\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (render) {\n    options.render = render\n    options.staticRenderFns = staticRenderFns\n    options._compiled = true\n  }\n\n  // functional template\n  if (functionalTemplate) {\n    options.functional = true\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = 'data-v-' + scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = shadowMode\n      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }\n      : injectStyles\n  }\n\n  if (hook) {\n    if (options.functional) {\n      // for template-only hot-reload because in that case the render fn doesn't\n      // go through the normalizer\n      options._injectStyles = hook\n      // register for functioal component in vue file\n      var originalRender = options.render\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return originalRender(h, context)\n      }\n    } else {\n      // inject component registration as beforeCreate hook\n      var existing = options.beforeCreate\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    }\n  }\n\n  return {\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//# sourceURL=webpack://VueOverlayModal/./node_modules/vue-loader/lib/runtime/componentNormalizer.js?");

/***/ }),

/***/ "./src/OverlayModal.vue":
/*!******************************!*\
  !*** ./src/OverlayModal.vue ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OverlayModal.vue?vue&type=template&id=7f218636& */ \"./src/OverlayModal.vue?vue&type=template&id=7f218636&\");\n/* harmony import */ var _OverlayModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverlayModal.vue?vue&type=script&lang=js& */ \"./src/OverlayModal.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"./node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n\nvar component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _OverlayModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"src/OverlayModal.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack://VueOverlayModal/./src/OverlayModal.vue?");

/***/ }),

/***/ "./src/OverlayModal.vue?vue&type=script&lang=js&":
/*!*******************************************************!*\
  !*** ./src/OverlayModal.vue?vue&type=script&lang=js& ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib??vue-loader-options!./OverlayModal.vue?vue&type=script&lang=js& */ \"./node_modules/vue-loader/lib/index.js?!./src/OverlayModal.vue?vue&type=script&lang=js&\");\n/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"]); \n\n//# sourceURL=webpack://VueOverlayModal/./src/OverlayModal.vue?");

/***/ }),

/***/ "./src/OverlayModal.vue?vue&type=template&id=7f218636&":
/*!*************************************************************!*\
  !*** ./src/OverlayModal.vue?vue&type=template&id=7f218636& ***!
  \*************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./OverlayModal.vue?vue&type=template&id=7f218636& */ \"./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/OverlayModal.vue?vue&type=template&id=7f218636&\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__[\"render\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"staticRenderFns\", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OverlayModal_vue_vue_type_template_id_7f218636___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"]; });\n\n\n\n//# sourceURL=webpack://VueOverlayModal/./src/OverlayModal.vue?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: config, install, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"config\", function() { return config; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _OverlayModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OverlayModal */ \"./src/OverlayModal.vue\");\n\r\n\r\n\r\nlet data = undefined;\r\nfunction initPluginData(Vue, config) {\r\n  if (config === undefined) config = {};\r\n  \r\n  let modals = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"mapValues\"])(config, modal => {\r\n    let initState = { isActive: false, cancelClose: false };\r\n    if (modal.initActive) initState.isActive = true;\r\n    return { ...modal, ...initState };\r\n  });\r\n\r\n  Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(data.modals, (_, name) => Vue.delete(data.modals, name));\r\n  Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(modals, (modal, name) => Vue.set(data.modals, name, modal));\r\n  _OverlayModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].pluginData = data;\r\n};\r\n\r\nfunction initPublicData(Vue) {\r\n  Vue.prototype.$modal = Vue.observable({\r\n    get $closeDelay() { return data.calculateTimeout(); }\r\n  });\r\n\r\n  Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"forEach\"])(data.modals, (modal, name) => {\r\n    Vue.set(Vue.prototype.$modal, name, {\r\n      get isActive() { return modal.isActive; },\r\n      get closeSpeed() { return modal.closeSpeed; },\r\n      keepActive() { modal.cancelClose = true; },\r\n      clickOpen() { modal.isActive = modal.cancelClose = true; },\r\n      open() { modal.isActive = true; },\r\n      close() { modal.isActive = false; }\r\n    });\r\n  });\r\n};\r\n\r\nfunction config(config, Vue) {\r\n  if (Vue === undefined) Vue = window.Vue;\r\n  initPluginData(Vue, config);\r\n  initPublicData(Vue);\r\n};\r\n\r\nfunction install(Vue, config) {\r\n  data = {\r\n    modals: Vue.observable({}),\r\n    instances: 0,\r\n    completed: 0,\r\n    closing: [],\r\n    timeouts: [],\r\n    calculateTimeout(name) {\r\n      let modals = data.modals;\r\n      let childNames = Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"filter\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"keys\"])(modals), _ => {\r\n        return modals[_].parent === name && modals[_].isActive;\r\n      });\r\n\r\n      let value = name === undefined ? 0 : modals[name].closeSpeed;\r\n      if (childNames.length === 0) return value;\r\n      else {\r\n        let recurse = _ => data.calculateTimeout(_);\r\n        return Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"max\"])(Object(lodash__WEBPACK_IMPORTED_MODULE_0__[\"map\"])(childNames, recurse)) + value;\r\n      }\r\n    }\r\n  };\r\n  \r\n  Vue.directive(\"open\", {\r\n    bind(el, binding) {\r\n      el.addEventListener(\"click\", binding.value.clickOpen);\r\n    }\r\n  });\r\n\r\n  plugin.config(config, Vue);\r\n  Vue.component(_OverlayModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"].name, _OverlayModal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\r\n  Vue.prototype.$debug = data;\r\n};\r\n\r\nlet plugin = { config: config, install: install };\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (plugin);\r\n\r\nif (typeof window !== \"undefined\" && window.Vue) {\r\n  window.Vue.use(plugin);\r\n}\r\n\n\n//# sourceURL=webpack://VueOverlayModal/./src/main.js?");

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"commonjs":"lodash","commonjs2":"lodash","amd":"lodash","root":"_"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;\n\n//# sourceURL=webpack://VueOverlayModal/external_%7B%22commonjs%22:%22lodash%22,%22commonjs2%22:%22lodash%22,%22amd%22:%22lodash%22,%22root%22:%22_%22%7D?");

/***/ })

/******/ });
});