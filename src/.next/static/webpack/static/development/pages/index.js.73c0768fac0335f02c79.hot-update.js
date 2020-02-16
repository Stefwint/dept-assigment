webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/FlexibleContent/Contact/Contact.jsx":
/*!********************************************************!*\
  !*** ./components/FlexibleContent/Contact/Contact.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Form */ "./components/Form/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

 // Components

 // Styling



var Contact = function Contact(_ref) {
  var title = _ref.title,
      form = _ref.form;

  var onSubmit = function onSubmit(values) {
    console.log(values);
  };

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    px: [0, 20, 0],
    pr: [40, 0]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    py: [40, 80],
    flexWrap: "wrap"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Box"], {
    width: [1, 3 / 12],
    pl: [30, 0],
    mb: [20, 0]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Text"], {
    as: "h2",
    fontSize: [30, 60],
    fontWeight: 400
  }, title)), form && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Column"], {
    width: [1, 7 / 12],
    offset: 1 / 12
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_3__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, form, {
    onSubmit: onSubmit
  })))));
};

Contact.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  form: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
Contact.defaultProps = {
  form: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=index.js.73c0768fac0335f02c79.hot-update.js.map