(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["subpkg/search/search"],{

/***/ 56:
/*!**********************************************************************!*\
  !*** D:/web项目/uni-shoop/main.js?{"page":"subpkg%2Fsearch%2Fsearch"} ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 5);


var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 4));
var _search = _interopRequireDefault(__webpack_require__(/*! ./subpkg/search/search.vue */ 57));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;createPage(_search.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 57:
/*!***************************************************!*\
  !*** D:/web项目/uni-shoop/subpkg/search/search.vue ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.vue?vue&type=template&id=1480e53a& */ 58);
/* harmony import */ var _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.vue?vue&type=script&lang=js& */ 60);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.vue?vue&type=style&index=0&lang=stylus& */ 62);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs





/* normalize component */

var component = Object(_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "subpkg/search/search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 58:
/*!**********************************************************************************!*\
  !*** D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=template&id=1480e53a& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=template&id=1480e53a& */ 59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_template_id_1480e53a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 59:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=template&id=1480e53a& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    uniSearchBar: function() {
      return Promise.all(/*! import() | uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue */ 71))
    },
    uniIcons: function() {
      return Promise.all(/*! import() | uni_modules/uni-icons/components/uni-icons/uni-icons */[__webpack_require__.e("common/vendor"), __webpack_require__.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(__webpack_require__.bind(null, /*! @/uni_modules/uni-icons/components/uni-icons/uni-icons.vue */ 82))
    },
    uniTag: function() {
      return __webpack_require__.e(/*! import() | uni_modules/uni-tag/components/uni-tag/uni-tag */ "uni_modules/uni-tag/components/uni-tag/uni-tag").then(__webpack_require__.bind(null, /*! @/uni_modules/uni-tag/components/uni-tag/uni-tag.vue */ 103))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 60:
/*!****************************************************************************!*\
  !*** D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=script&lang=js& */ 61);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 61:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 19));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      // 计时器,用来进行防抖
      timer: null,
      // 用来存储用户输入的值
      kw: '',
      // 用来存放搜索建议列表的数据
      searchList: [],
      // 存放用户的搜索历史
      historyList: ['菜菜', '宝宝', '菜菜爱宝宝'] };

  },

  onLoad: function onLoad() {
    //获取本地存储的历史记录。
    this.historyList = JSON.parse(uni.getStorageSync('kw') || '[]');
  },
  methods: {
    // 防抖
    input: function input(e) {var _this = this;
      // 清除计时器
      clearTimeout(this.timer);

      this.timer = setTimeout(function () {
        _this.kw = e;
        // console.log(this.kw)
        // 触发延时器时调用方法
        _this.getSearchList();
      }, 500);
    },
    // 获取搜索建议
    getSearchList: function getSearchList() {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var _yield$uni$$http$get, res;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:if (!(

                _this2.kw === '')) {_context.next = 3;break;}
                // searchList则为空
                _this2.searchList = [];return _context.abrupt("return");case 3:_context.next = 5;return (



                  uni.$http.get('/api/public/v1/goods/qsearch', { query: _this2.kw }));case 5:_yield$uni$$http$get = _context.sent;res = _yield$uni$$http$get.data;if (!(


                res.meta.status !== 200)) {_context.next = 9;break;}return _context.abrupt("return", uni.$showMsg());case 9:
                // 获取成功
                _this2.searchList = res.message;
                // 调用方法
                _this2.saveSearchHistory();case 11:case "end":return _context.stop();}}}, _callee);}))();
    },

    // 跳转到详情页面方法
    gotoDetail: function gotoDetail(goods_id) {
      uni.navigateTo({
        // 指定详情页面，并传递参数
        url: '../../subpkg/goods_detail/goods_detail?goods_id=' + goods_id });

    },

    // 添加数组的方法
    saveSearchHistory: function saveSearchHistory() {
      this.historyList.push(this.kw);
      // 将historyList数组转换为set对象
      var set = new Set(this.historyList);
      // 先移除，因为如果搜索历史里面和正在输入的内容一致，那么如果不先删除搜索历史中的内容，新添加的历史记录，就会添加到最后，不会添加到最前面
      set.delete(this.kw);
      // 往对象里面追加内容
      set.add(this.kw);
      // 将set对象转换为数组
      this.historyList = Array.from(set);
      // 使用uni.setStorageSync(key, value)提供的方法，将搜索记录存储到本地
      uni.setStorageSync('kw', JSON.stringify(this.historyList));
    },

    // 清空历史记录和本地存储
    cleanHistory: function cleanHistory() {
      this.historyList = [];
      uni.removeStorageSync('kw', '[]');
    },

    // 点击推荐列表跳转到对应页面
    gotogoodsList: function gotogoodsList(kw) {
      uni.navigateTo({
        url: '../../subpkg/goods_list/goods_list?query=' + kw });

    } },

  computed: {
    // 通过reverse翻转数组，是得push添加元素从前面开始添加，有因为数组是引用数据类型，不建议直接使用reverse
    history: function history() {
      return _toConsumableArray(this.historyList).reverse();
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 62:
/*!***************************************************************************************!*\
  !*** D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=style&index=0&lang=stylus& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--11-oneOf-1-3!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/stylus-loader??ref--11-oneOf-1-4!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../web资料/HBuilderX.3.6.4.20220922/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./search.vue?vue&type=style&index=0&lang=stylus& */ 63);
/* harmony import */ var _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_11_oneOf_1_0_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_11_oneOf_1_1_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_2_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_11_oneOf_1_3_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_stylus_loader_index_js_ref_11_oneOf_1_4_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_11_oneOf_1_5_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_web_HBuilderX_3_6_4_20220922_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_search_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 63:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--11-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--11-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-2!./node_modules/postcss-loader/src??ref--11-oneOf-1-3!./node_modules/stylus-loader??ref--11-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--11-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/web项目/uni-shoop/subpkg/search/search.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[56,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/subpkg/search/search.js.map