webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/Form.jsx":
/*!**********************************!*\
  !*** ./components/Form/Form.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fields */ "./components/Form/Fields/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../theme */ "./theme.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // Inputs

 // Styling




var Form = function Form(_ref) {
  var fields = _ref.fields,
      button = _ref.button,
      onSubmit = _ref.onSubmit;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, fields && __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Flex"], {
    flexWrap: "wrap"
  }, fields.map(function (field) {
    var _field$errorMessage, _field$errorMessage2, _field$errorMessage3, _field$errorMessage4;

    switch (field.type) {
      case 'text':
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["TextInput"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage = field.errorMessage) === null || _field$errorMessage === void 0 ? void 0 : _field$errorMessage.required)
          }),
          errors: errors
        }, field));

      case 'textarea':
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["TextArea"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage2 = field.errorMessage) === null || _field$errorMessage2 === void 0 ? void 0 : _field$errorMessage2.required)
          }),
          errors: errors
        }, field));

      case 'email':
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["Email"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage3 = field.errorMessage) === null || _field$errorMessage3 === void 0 ? void 0 : _field$errorMessage3.required),
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: (_field$errorMessage4 = field.errorMessage) === null || _field$errorMessage4 === void 0 ? void 0 : _field$errorMessage4.email
            }
          }),
          errors: errors
        }, field));

      default:
        console.warn('missing layout for', field.type);
        return null;
    }
  })), button && __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Box"], {
    ml: [0, 25],
    mt: [15, 30]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    type: button.type,
    bg: _theme__WEBPACK_IMPORTED_MODULE_7__["default"].colors.blue
  }, button.text)));
};

Form.propTypes = {
  fields: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired,
  button: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.782ef9b17b9af579d4f7.hot-update.js.map