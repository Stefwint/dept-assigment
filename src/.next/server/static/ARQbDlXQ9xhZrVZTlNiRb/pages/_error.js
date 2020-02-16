module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1GRr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Flex; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_1__);


var Box = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "Flex__Box",
  componentId: "ro60kk-0"
})({
  boxSizing: 'border-box',
  margin: 0,
  minWidth: 0
}, function (props) {
  return props.css;
}, Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["layout"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"], styled_system__WEBPACK_IMPORTED_MODULE_1__["flexbox"]));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default()('div').withConfig({
  displayName: "Flex__Text",
  componentId: "ro60kk-1"
})(Object(styled_system__WEBPACK_IMPORTED_MODULE_1__["compose"])(styled_system__WEBPACK_IMPORTED_MODULE_1__["typography"], styled_system__WEBPACK_IMPORTED_MODULE_1__["space"], styled_system__WEBPACK_IMPORTED_MODULE_1__["color"]));
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(Box).withConfig({
  displayName: "Flex",
  componentId: "ro60kk-2"
})({
  display: 'flex'
});

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ZA9o");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "7W2i":
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__("SksO");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "BhmS":
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "Nsbk":
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "PJYZ":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "Qi1R":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./utils/mediaQueries.js
var mediaQueries = __webpack_require__("Yc8F");

// CONCATENATED MODULE: ./utils/isEmail.js
var isEmail = function isEmail(email, message) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return false;
  }

  return true;
};

/* harmony default export */ var utils_isEmail = (isEmail);
// CONCATENATED MODULE: ./utils/index.js
/* concated harmony reexport media */__webpack_require__.d(__webpack_exports__, "a", function() { return mediaQueries["a" /* default */]; });
/* unused concated harmony import isEmail */




/***/ }),

/***/ "SksO":
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "UTDY":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js
var taggedTemplateLiteral = __webpack_require__("VkAN");
var taggedTemplateLiteral_default = /*#__PURE__*/__webpack_require__.n(taggedTemplateLiteral);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "styled-normalize"
var external_styled_normalize_ = __webpack_require__("BhmS");
var external_styled_normalize_default = /*#__PURE__*/__webpack_require__.n(external_styled_normalize_);

// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__("aXPs");

// EXTERNAL MODULE: ./utils/mediaQueries.js
var mediaQueries = __webpack_require__("Yc8F");

// CONCATENATED MODULE: ./components/styles/GlobalStyles.js


function _templateObject() {
  var data = taggedTemplateLiteral_default()(["\n  ", ";\n\n  ", "\n\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    font-family: ", ";\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  blockquote {\n    margin: 0;\n    font-family: ", ";\n    line-height: 1.28;\n  }\n\n  select::-ms-expand {\n    display: none;\n  }\n\n  .accessibly-hidden {\n    position: absolute;\n    left: -999em;\n  }\n\n  .border {\n    border-top: 1px solid ", ";\n  }\n\n  .block {\n    display: block;\n  }\n\n  .upper {\n    text-transform: uppercase;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GlobalStyle = Object(external_styled_components_["createGlobalStyle"])(_templateObject(), external_styled_normalize_default.a, Object(external_styled_components_["css"])(["", ";", ";"], mediaQueries["c" /* showClasses */], mediaQueries["b" /* hideClasses */]), theme["b" /* default */].fonts.body, theme["b" /* default */].fonts.heading, theme["b" /* default */].fonts.heading, theme["b" /* default */].colors.border);
/* harmony default export */ var GlobalStyles = (GlobalStyle);
// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__("hKtz");

// EXTERNAL MODULE: ./utils/index.js + 1 modules
var utils = __webpack_require__("Qi1R");

// CONCATENATED MODULE: ./components/styles/Button.js


function Button_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n      width: 100%;\n    "]);

  Button_templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Button = external_styled_components_default.a.button.withConfig({
  displayName: "Button",
  componentId: "sc-1qg0mzm-0"
})(["", ";position:relative;display:inline-block;padding:", ";overflow:hidden;font-size:", ";font-weight:700;line-height:2;text-transform:uppercase;background:", ";color:", ";border:0;transition:all 0.2s;cursor:pointer;&:after{content:'';position:absolute;top:-50px;left:-75px;height:", ";width:", ";opacity:0.2;transform:rotate(35deg);transition:all 550ms cubic-bezier(0.19,1,0.22,1);filter:blur(5px);z-index:10;background:", ";}&:hover{transform:scale(1.05);&:after{left:120%;transition:all 550ms cubic-bezier(0.19,1,0.22,1);}}", " ", ";"], external_styled_system_["space"], "".concat(Object(external_polished_["rem"])(8), " ").concat(Object(external_polished_["rem"])(40)), Object(external_polished_["rem"])(15), function (props) {
  return props.bg ? props.bg : props.theme.colors.black;
}, function (props) {
  return props.color ? props.color : props.theme.colors.white;
}, Object(external_polished_["rem"])(155), Object(external_polished_["rem"])(50), theme["b" /* default */].colors.white, function (props) {
  return props.smallFullWidth && Object(external_styled_components_["css"])(["", ""], utils["a" /* media */].smallOnly(Button_templateObject()));
}, function (props) {
  return props.noStyle && Object(external_styled_components_["css"])(["box-shadow:none;border:0;background:none;padding:0;", ";"], external_styled_system_["space"]);
});
var ArrowButton = external_styled_components_default.a.span.withConfig({
  displayName: "Button__ArrowButton",
  componentId: "sc-1qg0mzm-1"
})(["color:", ";text-transform:uppercase;font-size:", ";font-weight:700;&:before{content:'';display:inline-block;margin-right:", ";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid ", ";transition:transform 0.3s ease;}"], theme["b" /* default */].colors.blue, Object(external_polished_["rem"])(14), Object(external_polished_["rem"])(10), theme["b" /* default */].colors.blue);
/* harmony default export */ var styles_Button = (Button);
// EXTERNAL MODULE: ./components/styles/Flex.js
var Flex = __webpack_require__("1GRr");

// CONCATENATED MODULE: ./components/styles/Container.js


function Container_templateObject() {
  var data = taggedTemplateLiteral_default()(["\n    ", "\n  "]);

  Container_templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = external_styled_components_default()(Flex["a" /* Box */]).withConfig({
  displayName: "Container",
  componentId: "sc-17dqwau-0"
})(["width:100%;max-width:", ";", ""], function (props) {
  return props.theme.containerSize;
}, utils["a" /* media */].smallOnly(Container_templateObject(), function (props) {
  return !props.noPadding && Object(external_styled_components_["css"])(["padding-left:", ";padding-right:", ";"], Object(external_polished_["rem"])(30), Object(external_polished_["rem"])(30));
}));
Container.defaultProps = {
  mx: 'auto',
  px: '0'
};
/* harmony default export */ var styles_Container = (Container);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/typeof.js
var helpers_typeof = __webpack_require__("cDf5");
var typeof_default = /*#__PURE__*/__webpack_require__.n(helpers_typeof);

// CONCATENATED MODULE: ./components/styles/Column.js






function offset(margin) {
  var styles = '';

  if (typeof margin === 'number' || typeof_default()(margin) === 'object' && margin.length === 1) {
    styles = Object(external_styled_components_["css"])(["margin-left:", "%;"], margin * 100);
  } else if (typeof_default()(margin) === 'object') {
    styles = margin.filter(function (num) {
      return typeof num === 'number';
    }).map(function (item, index) {
      return Object(external_styled_components_["css"])(["@media screen and (min-width:", "){margin-left:", "%;}"], "".concat(theme["a" /* breakpoints */][index], "px"), item * 100);
    });
  }

  return styles;
}

var Column = external_styled_components_default()(Flex["a" /* Box */]).withConfig({
  displayName: "Column",
  componentId: "sc-1pla7c5-0"
})(["", ";", ""], external_styled_system_["space"], function (props) {
  return props.offset ? offset(props.offset) : Object(external_styled_components_["css"])([""]);
});
/* harmony default export */ var styles_Column = (Column);
// CONCATENATED MODULE: ./components/styles/Row.js


var Row = external_styled_components_default()(Flex["a" /* Box */]).withConfig({
  displayName: "Row",
  componentId: "sc-1bf1evj-0"
})(["width:100%;max-width:", ";"], function (props) {
  return props.theme.gridSize;
});
Row.defaultProps = {
  mx: 'auto',
  px: [20, 30]
};
/* harmony default export */ var styles_Row = (Row);
// CONCATENATED MODULE: ./components/styles/FormLabel.js



var FormLabel = external_styled_components_default.a.label.withConfig({
  displayName: "FormLabel",
  componentId: "sc-12nf5k4-0"
})(["text-transform:uppercase;font-size:", ";font-weight:700;line-height:2;color:", ";"], Object(external_polished_["rem"])(15), theme["b" /* default */].colors.black);
/* harmony default export */ var styles_FormLabel = (FormLabel);
// CONCATENATED MODULE: ./components/styles/index.js
/* concated harmony reexport GlobalStyles */__webpack_require__.d(__webpack_exports__, "h", function() { return GlobalStyles; });
/* concated harmony reexport Button */__webpack_require__.d(__webpack_exports__, "c", function() { return styles_Button; });
/* concated harmony reexport ArrowButton */__webpack_require__.d(__webpack_exports__, "a", function() { return ArrowButton; });
/* concated harmony reexport Container */__webpack_require__.d(__webpack_exports__, "e", function() { return styles_Container; });
/* concated harmony reexport Column */__webpack_require__.d(__webpack_exports__, "d", function() { return styles_Column; });
/* concated harmony reexport Flex */__webpack_require__.d(__webpack_exports__, "f", function() { return Flex["b" /* Flex */]; });
/* concated harmony reexport Box */__webpack_require__.d(__webpack_exports__, "b", function() { return Flex["a" /* Box */]; });
/* concated harmony reexport Text */__webpack_require__.d(__webpack_exports__, "j", function() { return Flex["c" /* Text */]; });
/* concated harmony reexport Row */__webpack_require__.d(__webpack_exports__, "i", function() { return styles_Row; });
/* concated harmony reexport FormLabel */__webpack_require__.d(__webpack_exports__, "g", function() { return styles_FormLabel; });









/***/ }),

/***/ "VkAN":
/***/ (function(module, exports) {

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

module.exports = _taggedTemplateLiteral;

/***/ }),

/***/ "W8MJ":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Yc8F":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return showClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return hideClasses; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lSNA");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aXPs");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var labels = ['small', 'medium', 'large'];
var mediaMin = _theme__WEBPACK_IMPORTED_MODULE_2__[/* breakpoints */ "a"].reduce(function (acc, cur, i) {
  acc[labels[i]] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ";}"], cur, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});
var mediaMax = _theme__WEBPACK_IMPORTED_MODULE_2__[/* breakpoints */ "a"].reduce(function (acc, cur, i, sizes) {
  acc["".concat(labels[i], "Down")] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "px){", ";}"], cur - 1, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  acc["".concat(labels[i], "Only")] = function () {
    return i > 0 ? Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media screen and (min-width:", "px) and (max-width:", "px){", ";}"], sizes[i - 1], cur - 1, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments)) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media screen and (max-width:", "px){", ";}"], cur - 1, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

var media = _objectSpread({}, mediaMin, {}, mediaMax);
/* Write you media queries like this:

   ${media.mediumDown`
      background: red;
   `}

*/


var showClasses = _theme__WEBPACK_IMPORTED_MODULE_2__[/* breakpoints */ "a"].reduce(function (acc, cur, i) {
  acc.push("\n    .show-for-".concat(labels[i], " {\n      @media (max-width: ").concat(cur - 1, "px) {\n        display: none!important;\n      }\n    }\n  "));
  return acc;
}, []);
var hideClasses = _theme__WEBPACK_IMPORTED_MODULE_2__[/* breakpoints */ "a"].reduce(function (acc, cur, i) {
  acc.push("\n    .hide-for-".concat(labels[i], " {\n      @media (min-width: ").concat(cur, "px) {\n        display: none!important;\n      }\n    }\n  "));
  return acc;
}, []);

/* harmony default export */ __webpack_exports__["a"] = (media);

/***/ }),

/***/ "ZA9o":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("lwsE");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("W8MJ");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("a1gu");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Nsbk");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("7W2i");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("UTDY");





var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Error =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Error, _React$Component);

  function Error() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Error);

    return _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Error).apply(this, arguments));
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Error, [{
    key: "render",
    value: function render() {
      return __jsx(_components_styles__WEBPACK_IMPORTED_MODULE_6__[/* Box */ "b"], {
        py: [30, 60]
      }, "Error");
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          err = _ref.err;
      var statusCode = res ? res.statusCode : err ? err.statusCode : null;
      return {
        statusCode: statusCode
      };
    }
  }]);

  return Error;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Error);

/***/ }),

/***/ "a1gu":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("cDf5");

var assertThisInitialized = __webpack_require__("PJYZ");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "aXPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breakpoints; });
var breakpoints = [640, 1024, 1440];
/* harmony default export */ __webpack_exports__["b"] = ({
  gridSize: '1200px',
  containerSize: '1440px',
  breakpoints: breakpoints.map(function (i) {
    return i + 'px';
  }),
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64],
  colors: {
    white: '#fff',
    black: '#0E0E0E',
    blackTwo: '#272727',
    gray: '#939393',
    lightGray: '#f3f6f6',
    mediumGray: '#3e3e3e',
    warmGray: '#808080',
    menuGray: '#a3a3a3',
    blue: '#1A18F7',
    red: '#ff2929',
    border: '#dddddd'
  },
  space: [0, 4, 8, 16, 32, 64, 128, 256],
  fonts: {
    heading: 'Teko, sans-serif',
    body: 'Arial, sans-serif'
  }
});

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cDf5":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "lSNA":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "lwsE":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ })

/******/ });