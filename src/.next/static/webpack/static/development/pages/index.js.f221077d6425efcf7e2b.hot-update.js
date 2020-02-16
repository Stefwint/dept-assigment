webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/styles/Button.js":
/*!*************************************!*\
  !*** ./components/styles/Button.js ***!
  \*************************************/
/*! exports provided: ArrowButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowButton", function() { return ArrowButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "./node_modules/styled-system/dist/index.esm.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "../node_modules/polished/dist/polished.es.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./theme.js");


function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      width: 100%;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button",
  componentId: "sc-1qg0mzm-0"
})(["", ";position:relative;display:inline-block;padding:", ";overflow:hidden;font-size:", ";font-weight:700;line-height:2;text-transform:uppercase;background:", ";color:", ";border:0;transition:all 0.2s;cursor:pointer;&:after{content:'';position:absolute;top:-50px;left:-75px;height:", ";width:", ";opacity:0.2;transform:rotate(35deg);transition:all 550ms cubic-bezier(0.19,1,0.22,1);filter:blur(5px);z-index:10;background:", ";}&:hover{transform:scale(1.05);&:after{left:120%;transition:all 550ms cubic-bezier(0.19,1,0.22,1);}}", " ", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], "".concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(8), " ").concat(Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(40)), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(15), function (props) {
  return props.bg ? props.bg : props.theme.colors.black;
}, function (props) {
  return props.color ? props.color : props.theme.colors.white;
}, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(155), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(50), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.white, function (props) {
  return props.smallFullWidth && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ""], _utils__WEBPACK_IMPORTED_MODULE_4__["media"].smallOnly(_templateObject()));
}, function (props) {
  return props.noStyle && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["box-shadow:none;border:0;background:none;padding:0;", ";"], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"]);
});
var ArrowButton = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "Button__ArrowButton",
  componentId: "sc-1qg0mzm-1"
})(["color:", ";"], _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.blue);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/styles/index.js":
/*!************************************!*\
  !*** ./components/styles/index.js ***!
  \************************************/
/*! exports provided: GlobalStyles, Button, Container, Column, Flex, Box, Text, Row, FormLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/styles/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/styles/Container.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return _Container__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Column */ "./components/styles/Column.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Column", function() { return _Column__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Row */ "./components/styles/Row.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return _Row__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Flex */ "./components/styles/Flex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return _Flex__WEBPACK_IMPORTED_MODULE_5__["Flex"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Flex__WEBPACK_IMPORTED_MODULE_5__["Box"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return _Flex__WEBPACK_IMPORTED_MODULE_5__["Text"]; });

/* harmony import */ var _FormLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormLabel */ "./components/styles/FormLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return _FormLabel__WEBPACK_IMPORTED_MODULE_6__["default"]; });










/***/ })

})
//# sourceMappingURL=index.js.f221077d6425efcf7e2b.hot-update.js.map