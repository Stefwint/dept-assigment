webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Tile/Tile.jsx":
/*!**********************************!*\
  !*** ./components/Tile/Tile.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles */ "./components/Tile/styles.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./theme.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Styling





var Tile = function Tile(_ref) {
  var title = _ref.title,
      client = _ref.client,
      image = _ref.image,
      link = _ref.link,
      isSmall = _ref.isSmall;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    mb: isSmall ? [25, 0] : 0,
    pt: isSmall ? 20 : 0
  }, __jsx("a", {
    href: link,
    target: "_blank"
  }, image && !isSmall && __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    mb: 20
  }, __jsx("img", {
    src: "../../../static/images/".concat(image)
  })), client && __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "span",
    fontSize: [14, 15],
    fontWeight: 700,
    color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.gray
  }, client), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    as: "h3",
    mt: 10,
    mb: 20,
    fontSize: !isSmall ? 30 : 24,
    fontWeight: 400,
    color: _theme__WEBPACK_IMPORTED_MODULE_4__["default"].colors.black
  }, title), __jsx(_styles__WEBPACK_IMPORTED_MODULE_2__["ArrowButton"], null, "View case")));
};

Tile.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  client: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  isSmall: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
Tile.defaultProps = {
  client: '',
  image: '',
  link: '',
  isSmall: false
};
/* harmony default export */ __webpack_exports__["default"] = (Tile);

/***/ })

})
//# sourceMappingURL=index.js.a8eb508132eaa76fde2e.hot-update.js.map