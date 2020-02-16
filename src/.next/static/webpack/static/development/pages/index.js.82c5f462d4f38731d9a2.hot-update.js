webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/Fields/TextArea.jsx":
/*!*********************************************!*\
  !*** ./components/Form/Fields/TextArea.jsx ***!
  \*********************************************/
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




var TextArea = function TextArea(_ref) {
  var label = _ref.label,
      id = _ref.id,
      name = _ref.name,
      isRequired = _ref.isRequired,
      errorMessage = _ref.errorMessage,
      width = _ref.width,
      errors = _ref.errors,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["label", "id", "name", "isRequired", "errorMessage", "width", "errors"]);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    my: [15, 30],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    alignItems: "center"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    htmlFor: id
  }, isRequired ? label + '*' : label)), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["STextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    id: id,
    name: name
  }, props)), (errors === null || errors === void 0 ? void 0 : errors.message) && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SError"], null, errorMessage.required));
};

TextArea.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  id: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  errorMessage: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool]),
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
};
TextArea.defaultProps = {
  label: '',
  isRequired: false,
  errorMessage: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ })

})
//# sourceMappingURL=index.js.82c5f462d4f38731d9a2.hot-update.js.map