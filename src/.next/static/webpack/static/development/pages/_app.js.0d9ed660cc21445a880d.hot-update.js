webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/styles.js":
/*!*************************************!*\
  !*** ./components/Header/styles.js ***!
  \*************************************/
/*! exports provided: SMenuButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMenuButton", function() { return SMenuButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../node_modules/polished/dist/polished.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./theme.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 99;\n    border-bottom: 0;\n    background: ", ";\n\n    .logo-wrapper {\n      img {\n        max-height: ", ";\n      }\n    }\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var SHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "styles__SHeader",
  componentId: "xc2r1z-0"
})(["position:absolute;top:0;left:0;right:0;z-index:2;margin:0 auto;padding:", ";width:100%;max-width:", ";&:after{content:'';position:absolute;bottom:0;height:1px;width:100%;border-bottom:1px solid ", ";}.logo-wrapper{position:relative;z-index:99;img{display:block;}}", ""], "0 ".concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(20)), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(1240), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, _utils__WEBPACK_IMPORTED_MODULE_4__["media"].smallOnly(_templateObject(), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.white, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(14)));
var SMenuButton = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"]).withConfig({
  displayName: "styles__SMenuButton",
  componentId: "xc2r1z-1"
})(["position:relative;padding-right:", ";background:0;border:0;box-shadow:none;font-family:", ";cursor:pointer;&:before,&:after{content:'';position:absolute;right:0;width:", ";height:", ";background:", ";transition:transform 0.3s ease;}&:before{top:", ";", "}&:after{top:", ";", "}"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(40), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].fonts.heading, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(20), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(2), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.black, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(5), function (props) {
  return props.openMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["top:", ";transform:rotate(-45deg);transition:transform 0.3s ease;"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(8));
}, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(12), function (props) {
  return props.openMenu && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["top:", ";transform:rotate(45deg);transition:transform 0.3s ease;"], Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(8));
});
/* harmony default export */ __webpack_exports__["default"] = (SHeader);

/***/ })

})
//# sourceMappingURL=_app.js.0d9ed660cc21445a880d.hot-update.js.map