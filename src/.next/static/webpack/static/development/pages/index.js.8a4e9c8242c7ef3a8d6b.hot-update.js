webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Form/Form.jsx":
/*!**********************************!*\
  !*** ./components/Form/Form.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "./node_modules/uuid/index.js");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/react-hook-form.es.js");
/* harmony import */ var _Fields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fields */ "./components/Form/Fields/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../theme */ "./theme.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 // Inputs

 // Styling




var Form = function Form(_ref) {
  var fields = _ref.fields,
      button = _ref.button,
      onSubmit = _ref.onSubmit;

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_3__["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  console.log(errors);
  return __jsx("form", {
    onSubmit: handleSubmit(onSubmit)
  }, __jsx("div", null, __jsx("label", {
    htmlFor: "firstName"
  }, "First Name"), __jsx("input", {
    name: "firstName",
    placeholder: "Bill",
    ref: register({
      required: 'this is a required',
      maxLength: {
        value: 2,
        message: 'Max length is 2'
      }
    })
  })), __jsx("br", null), errors.firstName && errors.firstName.message, __jsx("br", null), __jsx("label", {
    htmlFor: "lastName"
  }, "Last Name"), __jsx("input", {
    name: "lastName",
    placeholder: "Luo",
    ref: register({
      required: 'this is required',
      minLength: {
        value: 2,
        message: 'Min length is 2'
      }
    })
  }), __jsx("br", null), errors.lastName && errors.lastName.message, __jsx("br", null), __jsx("label", {
    htmlFor: "email"
  }, "Email"), __jsx("input", {
    name: "email",
    placeholder: "bluebill1049@hotmail.com",
    type: "text",
    ref: register({
      required: 'this is required',
      pattern: {
        value: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
        message: 'Invalid email address'
      }
    })
  }), __jsx("br", null), errors.email && errors.email.message, __jsx("br", null), __jsx("button", {
    type: "submit"
  }, "Submit"));
};

Form.propTypes = {
  fields: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired,
  button: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired,
  onSubmit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ })

})
//# sourceMappingURL=index.js.8a4e9c8242c7ef3a8d6b.hot-update.js.map