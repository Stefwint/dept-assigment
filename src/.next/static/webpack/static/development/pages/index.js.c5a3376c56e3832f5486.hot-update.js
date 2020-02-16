webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/Fields/TextInput.jsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/TextInput.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Form/Fields/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Styling




var TextInput = function TextInput(_ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mb: [15, 30],
    mt: [15, 0],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    htmlFor: name
  }, isRequired ? label + '*' : label), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    name: name
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SError"], null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
};

TextInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
};
TextInput.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextInput);

/***/ })

})
//# sourceMappingURL=index.js.c5a3376c56e3832f5486.hot-update.js.map