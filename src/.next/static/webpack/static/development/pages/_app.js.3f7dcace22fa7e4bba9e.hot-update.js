webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/Header/Header.jsx":
/*!**************************************!*\
  !*** ./components/Header/Header.jsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Hero */ "./components/Header/Hero/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Menu */ "./components/Header/Menu/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/Header/styles.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Components


 // Styling




var Header = function Header(_ref) {
  var menu = _ref.menu,
      title = _ref.title;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      openMenu = _useState[0],
      setOpenMenu = _useState[1];

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Box"], null, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    pb: [15, 20],
    pt: [15, 50],
    px: [20, 0],
    mx: [0, 29]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    justifyContent: "space-between",
    alignItems: "center"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    className: "logo-wrapper"
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "../../static/".concat(openMenu ? 'logoWhite' : 'logo', ".svg"),
    alt: title
  })))), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Box"], null, __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["MenuButton"], {
    openMenu: openMenu,
    setOpenMenu: setOpenMenu
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    as: "span"
  }, "MENU")), __jsx(_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: openMenu,
    menu: menu
  })))), __jsx(_Hero__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "Work"
  }));
};

Header.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  menu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
Header.defaultProps = {
  menu: []
};
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=_app.js.3f7dcace22fa7e4bba9e.hot-update.js.map