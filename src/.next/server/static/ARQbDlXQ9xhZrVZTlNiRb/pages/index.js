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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cMU6");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "7ki6":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"contact\",\"title\":\"Question? We are here to help!\",\"form\":{\"fields\":[{\"type\":\"text\",\"name\":\"name\",\"label\":\"Name\",\"isRequired\":true,\"errorMessage\":{\"required\":\"This field is required\"}},{\"type\":\"text\",\"name\":\"email\",\"label\":\"Email\",\"isRequired\":true,\"errorMessage\":{\"required\":\"This field is required\",\"email\":\"Email address is incorrect\"}},{\"name\":\"message\",\"type\":\"textarea\",\"label\":\"Message\",\"isRequired\":false}],\"button\":{\"type\":\"submit\",\"text\":\"Send\"}}}");

/***/ }),

/***/ "8OQS":
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "BTiB":
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "BhmS":
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "Bnag":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "C1bA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "axios-mock-adapter"
var external_axios_mock_adapter_ = __webpack_require__("OPxH");
var external_axios_mock_adapter_default = /*#__PURE__*/__webpack_require__.n(external_axios_mock_adapter_);

// EXTERNAL MODULE: ./api/mockdata/cases.json
var cases = __webpack_require__("cGzw");

// EXTERNAL MODULE: ./api/mockdata/clients.json
var clients = __webpack_require__("GgNs");

// EXTERNAL MODULE: ./api/mockdata/contact.json
var contact = __webpack_require__("7ki6");

// EXTERNAL MODULE: ./api/mockdata/menus.json
var menus = __webpack_require__("ErYJ");

// CONCATENATED MODULE: ./api/mockdata/index.js





// CONCATENATED MODULE: ./api/mock.js



function mock(useMock) {
  if (useMock) {
    // This sets the mock adapter on the default instance
    var _mock = new external_axios_mock_adapter_default.a(external_axios_default.a);

    _mock // Mock GET requests
    .onGet('cases/').reply(200, cases).onGet('clients/').reply(200, clients).onGet('contact/').reply(200, contact).onGet('menus/').reply(200, menus) // Let unmatched requests through
    .onAny().passThrough();
  }
}
// CONCATENATED MODULE: ./api/api.js


mock(true);
/**
 * Api constructor
 * @type {Axios.create}
 */

var api_Api = function Api() {
  var instance = external_axios_default.a.create({
    baseURL: 'https://api.dept.com'
  });
  instance.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response.status === 401) {
      return Promise.reject();
    }

    return Promise.reject(error);
  });
  return instance;
};

/* harmony default export */ var api = (api_Api);
// CONCATENATED MODULE: ./api/callers/get.js

/* === === === === === === === === *\
|| Get caller
\* === === === === === === === === */

/**
 * @param {*} url
 * @param {*} conf
 * @param {boolean} [getHeaders=false]
 * @returns
 */

function get(url, args, conf) {
  var getHeaders = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return api().get(url, args, conf).then(function (_ref) {
    var status = _ref.status,
        data = _ref.data,
        headers = _ref.headers;
    if (status < 200 || status >= 300) throw Error(data);

    if (getHeaders) {
      return {
        data: data,
        headers: headers
      };
    }

    return data;
  })["catch"](function (error) {
    return error.data;
  });
}
// CONCATENATED MODULE: ./api/callers/index.js
/* concated harmony reexport get */__webpack_require__.d(__webpack_exports__, "a", function() { return get; });



/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "EbDI":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "ErYJ":
/***/ (function(module) {

module.exports = JSON.parse("{\"menus\":{\"mainMenu\":[{\"title\":\"Home\",\"slug\":\"home\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Work\",\"slug\":\"work\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\",\"isActive\":true},{\"title\":\"About\",\"slug\":\"about\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Services\",\"slug\":\"services\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Partners\",\"slug\":\"partners\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Stories\",\"slug\":\"stories\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Careers\",\"slug\":\"careers\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Events\",\"slug\":\"events\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Contact\",\"slug\":\"contact\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"}],\"footerMenu\":[{\"title\":\"Work\",\"slug\":\"work\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Service\",\"slug\":\"service\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Stories\",\"slug\":\"stories\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"About\",\"slug\":\"about\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Careers\",\"slug\":\"careers\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Contact\",\"slug\":\"contact\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"}]}}");

/***/ }),

/***/ "GgNs":
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"clients\",\"title\":\"CLIENTS\",\"description\":\"We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.\",\"logos\":[{\"logo\":\"nivea.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"mona.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"transavia.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"zalando.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"tomtom.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"unilever.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"adidas.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"pathe.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"abn.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"triumph.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"microsoft.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"oxxio.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"nn.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"ziggo.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"walibi.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"klm.svg\",\"link\":\"https://www.deptagency.com\"}]}");

/***/ }),

/***/ "Ijbi":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "OPxH":
/***/ (function(module, exports) {

module.exports = require("axios-mock-adapter");

/***/ }),

/***/ "QILm":
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__("8OQS");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

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

/***/ "RIqP":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("Ijbi");

var iterableToArray = __webpack_require__("EbDI");

var nonIterableSpread = __webpack_require__("Bnag");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

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

/***/ "cGzw":
/***/ (function(module) {

module.exports = JSON.parse("{\"layouts\":[{\"name\":\"tiles\",\"items\":[{\"client\":\"bol.com\",\"title\":\"A summer island in the Netherlands\",\"link\":\"https://www.deptagency.com\",\"image\":\"bolcom.png\"},{\"client\":\"Kempen\",\"title\":\"Not some average banking website\",\"link\":\"https://www.deptagency.com\",\"image\":\"kempen.png\"},{\"client\":\"Philips\",\"title\":\"Beautiful design meets innovative technology\",\"link\":\"https://www.deptagency.com\",\"image\":\"philips.png\"},{\"client\":\"Gemeentemuseum\",\"title\":\"A 100 years of Mondriaan & De Stijl\",\"link\":\"https://www.deptagency.com\",\"image\":\"gemeentemuseum.png\"}]},{\"name\":\"tilesFeatured\",\"items\":[{\"client\":\"Florensis\",\"title\":\"Rethinking the entire online ecosystem\",\"link\":\"https://www.deptagency.com\",\"image\":\"florensis.png\"},{\"client\":\"Microsoft\",\"title\":\"Topping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox social media channels\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"O'neill\",\"title\":\"Integrating existing content into O'neill's new e-commerce platform\",\"link\":\"https://www.deptagency.com\"}]},{\"name\":\"tiles\",\"items\":[{\"client\":\"Be Lighting\",\"title\":\"Delivering clarity on a global scale\",\"link\":\"https://www.deptagency.com\",\"image\":\"lightning.png\"},{\"client\":\"Tui\",\"title\":\"Swipe to find your next holiday destination\",\"link\":\"https://www.deptagency.com\",\"image\":\"tui.png\"}]},{\"name\":\"tilesFeatured\",\"items\":[{\"client\":\"Butlins\",\"title\":\"Enhancing customer experience for personalised holiday planning using real time data\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"Vacanseselect\",\"title\":\"Predicting booking behavior for holidays with smart data, voice search and machine learning\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"Florensis\",\"title\":\"Rethinking the entire online ecosystem\",\"link\":\"https://www.deptagency.com\",\"image\":\"florensis.png\"}]},{\"name\":\"tiles\",\"items\":[{\"client\":\"Chocomel\",\"title\":\"A campaign for the limited edition letter packs\",\"link\":\"https://www.deptagency.com\",\"image\":\"chocomel.png\"},{\"client\":\"JBL\",\"title\":\"Live like a champion with Jerome Booteng\",\"link\":\"https://www.deptagency.com\",\"image\":\"jbl.png\"},{\"client\":\"Zalando\",\"title\":\"Innovative SEO and content strategy for Zalando\",\"link\":\"https://www.deptagency.com\",\"image\":\"zalando.png\"},{\"client\":\"Koninklijke Bibliotheek\",\"title\":\"The search for the most influential book ever\",\"link\":\"https://www.deptagency.com\",\"image\":\"koninklijke-bibliotheek.png\"}]},{\"name\":\"quote\",\"item\":{\"quote\":\"“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”\",\"name\":\"Mattijs ten Brink – CEO, Transavia\"}},{\"name\":\"tiles\",\"items\":[{\"client\":\"Liberty Global\",\"title\":\"Delivering complex commerce solutions\",\"link\":\"https://www.deptagency.com\",\"image\":\"liberty-global.png\"},{\"client\":\"Arla\",\"title\":\"Swipe to find your next holiday destination\",\"link\":\"https://www.deptagency.com\",\"image\":\"arla.png\"}]}]}");

/***/ }),

/***/ "cMU6":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__("RIqP");
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./api/callers/index.js + 4 modules
var callers = __webpack_require__("C1bA");

// EXTERNAL MODULE: ./components/styles/index.js + 6 modules
var styles = __webpack_require__("UTDY");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__("pVnL");
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: external "uuid"
var external_uuid_ = __webpack_require__("kNaX");
var external_uuid_default = /*#__PURE__*/__webpack_require__.n(external_uuid_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__("hKtz");

// CONCATENATED MODULE: ./components/Tile/styles.js



var STile = external_styled_components_default()(styles["b" /* Box */]).withConfig({
  displayName: "styles__STile",
  componentId: "sc-1rx2yf9-0"
})(["a{display:block;text-decoration:none;> div{overflow:hidden;transition:transform 0.3s ease;img{display:block;width:100%;max-height:", ";object-fit:cover;transition:transform 0.3s ease;}}span{display:block;text-transform:uppercase;}&:hover,&:focus{> div{transform:scale(0.95);img{transform:scale(1.08);}}", "{&:before{transform:translateX(5px);}}}}"], Object(external_polished_["rem"])(500), styles["a" /* ArrowButton */]);
/* harmony default export */ var Tile_styles = (STile);
// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__("aXPs");

// CONCATENATED MODULE: ./components/Tile/Tile.jsx
var __jsx = external_react_default.a.createElement;

// Styling




var Tile_Tile = function Tile(_ref) {
  var title = _ref.title,
      client = _ref.client,
      image = _ref.image,
      link = _ref.link,
      isSmall = _ref.isSmall;
  return __jsx(Tile_styles, {
    mb: isSmall ? [25, 0] : 0,
    pt: isSmall ? 20 : 0
  }, __jsx("a", {
    href: link,
    target: "_blank"
  }, image && !isSmall && __jsx(styles["b" /* Box */], {
    mb: 20
  }, __jsx("img", {
    src: "../../../static/images/".concat(image)
  })), client && __jsx(styles["j" /* Text */], {
    as: "span",
    fontSize: [14, 15],
    fontWeight: 700,
    color: theme["b" /* default */].colors.gray
  }, client), __jsx(styles["j" /* Text */], {
    as: "h3",
    mt: 15,
    mb: 20,
    fontSize: !isSmall ? 30 : 24,
    fontWeight: 400,
    color: theme["b" /* default */].colors.black
  }, title), __jsx(styles["a" /* ArrowButton */], null, "View case")));
};

Tile_Tile.defaultProps = {
  client: '',
  image: '',
  link: '',
  isSmall: false
};
/* harmony default export */ var components_Tile_Tile = (Tile_Tile);
// CONCATENATED MODULE: ./components/Tile/index.js

/* harmony default export */ var components_Tile = (components_Tile_Tile);
// CONCATENATED MODULE: ./components/FlexibleContent/Tiles/Tiles.jsx
var Tiles_jsx = external_react_default.a.createElement;

 // Components

 // Styling



var Tiles_Tiles = function Tiles(_ref) {
  var items = _ref.items;
  return Tiles_jsx(styles["i" /* Row */], {
    px: [20, 20, 0]
  }, Tiles_jsx(styles["f" /* Flex */], {
    mx: -15,
    flexWrap: "wrap"
  }, items === null || items === void 0 ? void 0 : items.map(function (item) {
    return Tiles_jsx(styles["b" /* Box */], {
      key: external_uuid_default()(),
      my: [25, 40],
      px: 15,
      width: [1, 1 / 2]
    }, Tiles_jsx(components_Tile, item));
  })));
};

/* harmony default export */ var FlexibleContent_Tiles_Tiles = (Tiles_Tiles);
// CONCATENATED MODULE: ./components/FlexibleContent/Tiles/index.js

/* harmony default export */ var FlexibleContent_Tiles = (FlexibleContent_Tiles_Tiles);
// CONCATENATED MODULE: ./components/FlexibleContent/TilesFeatured/styles.js




var STilesFeatured = external_styled_components_default()(styles["i" /* Row */]).withConfig({
  displayName: "styles__STilesFeatured",
  componentId: "sc-1c8h0s0-0"
})([".small-tiles{max-height:", ";> div{height:100%;border-top:1px solid ", ";&:last-of-type{border-bottom:1px solid ", ";}}}"], Object(external_polished_["rem"])(500), theme["b" /* default */].colors.border, theme["b" /* default */].colors.border);
/* harmony default export */ var TilesFeatured_styles = (STilesFeatured);
// CONCATENATED MODULE: ./components/FlexibleContent/TilesFeatured/TilesFeatured.jsx

var TilesFeatured_jsx = external_react_default.a.createElement;

 // Components

 // Styling




var TilesFeatured_TilesFeatured = function TilesFeatured(_ref) {
  var items = _ref.items;
  var featuredItem = items === null || items === void 0 ? void 0 : items.findIndex(function (item) {
    return item.image;
  });
  var smallTiles = items.filter(function (item) {
    return !item.image;
  });
  return TilesFeatured_jsx(TilesFeatured_styles, {
    px: [20, 20, 0]
  }, TilesFeatured_jsx(styles["f" /* Flex */], {
    mx: -15,
    my: [25, 40],
    flexWrap: "wrap"
  }, TilesFeatured_jsx(styles["b" /* Box */], {
    px: 15,
    width: [1, 8 / 12],
    order: featuredItem === 0 ? 0 : 1
  }, TilesFeatured_jsx(components_Tile, items[featuredItem])), TilesFeatured_jsx(styles["f" /* Flex */], {
    flexDirection: "column",
    justifyContent: "space-between",
    px: 15,
    mb: featuredItem === 2 ? [50, 0] : 0,
    mt: featuredItem === 0 ? [50, 0] : 0,
    width: [1, 4 / 12],
    order: featuredItem === 0 ? 1 : 0,
    className: "small-tiles"
  }, smallTiles === null || smallTiles === void 0 ? void 0 : smallTiles.map(function (item, index) {
    return TilesFeatured_jsx(styles["b" /* Box */], {
      key: external_uuid_default()(),
      pt: "5px"
    }, TilesFeatured_jsx(components_Tile, extends_default()({
      isSmall: true,
      isLast: index === 1
    }, item)));
  }))));
};

/* harmony default export */ var FlexibleContent_TilesFeatured_TilesFeatured = (TilesFeatured_TilesFeatured);
// CONCATENATED MODULE: ./components/FlexibleContent/TilesFeatured/index.js

/* harmony default export */ var FlexibleContent_TilesFeatured = (FlexibleContent_TilesFeatured_TilesFeatured);
// CONCATENATED MODULE: ./components/FlexibleContent/Quote/Quote.jsx
var Quote_jsx = external_react_default.a.createElement;

 // Styling



var Quote_Quote = function Quote(_ref) {
  var item = _ref.item;
  var quote = item.quote,
      name = item.name;
  return Quote_jsx(styles["i" /* Row */], {
    px: [20, 20, 0],
    mt: [20, 40]
  }, Quote_jsx(styles["f" /* Flex */], {
    pt: [40, 80],
    pb: [40, 60],
    justifyContent: "center",
    className: "border"
  }, Quote_jsx(styles["b" /* Box */], {
    width: [1, 8 / 12]
  }, quote && Quote_jsx(styles["j" /* Text */], {
    as: "blockquote",
    fontSize: [24, 36]
  }, quote), name && Quote_jsx(styles["j" /* Text */], {
    as: "span",
    mt: 30,
    fontSize: 13,
    fontWeight: "700",
    color: theme["b" /* default */].colors.blackTwo,
    className: "block upper"
  }, name))));
};

/* harmony default export */ var FlexibleContent_Quote_Quote = (Quote_Quote);
// CONCATENATED MODULE: ./components/FlexibleContent/Quote/index.js

/* harmony default export */ var FlexibleContent_Quote = (FlexibleContent_Quote_Quote);
// CONCATENATED MODULE: ./components/FlexibleContent/Clients/styles.js



var SLogo = external_styled_components_default()(styles["b" /* Box */]).withConfig({
  displayName: "styles__SLogo",
  componentId: "sc-9spc85-0"
})(["display:flex;align-items:center;justify-content:center;height:", ";text-align:center;list-style:none;"], Object(external_polished_["rem"])(125));
/* harmony default export */ var Clients_styles = (SLogo);
// CONCATENATED MODULE: ./components/FlexibleContent/Clients/Clients.jsx
var Clients_jsx = external_react_default.a.createElement;

 // Styling





var Clients_Clients = function Clients(_ref) {
  var title = _ref.title,
      description = _ref.description,
      logos = _ref.logos;
  return Clients_jsx(styles["e" /* Container */], {
    bg: theme["b" /* default */].colors.lightGray
  }, Clients_jsx(styles["i" /* Row */], {
    mt: 40,
    pt: [40, 80],
    pb: [40, 100],
    px: 0
  }, Clients_jsx(styles["f" /* Flex */], {
    justifyContent: "center"
  }, Clients_jsx(styles["b" /* Box */], {
    width: [1, 6 / 12]
  }, Clients_jsx(styles["j" /* Text */], {
    as: "h2",
    fontSize: [30, 60],
    fontWeight: 400,
    textAlign: "center"
  }, title), description && Clients_jsx(styles["j" /* Text */], {
    as: "p",
    fontSize: 17,
    lineHeight: "27px",
    textAlign: "center"
  }, description))), logos && Clients_jsx(styles["f" /* Flex */], {
    as: "ul",
    p: 0,
    mt: [30, 50],
    flexWrap: "wrap"
  }, logos.map(function (item) {
    return Clients_jsx(Clients_styles, {
      key: external_uuid_default()(),
      as: "li",
      width: [1 / 2, 1 / 4],
      px: [20, 0]
    }, Clients_jsx("a", {
      href: item.link,
      target: "_blank"
    }, Clients_jsx("img", {
      src: "../../../static/logos/".concat(item.logo),
      alt: "image"
    })));
  }))));
};

Clients_Clients.defaultProps = {
  description: '',
  logos: []
};
/* harmony default export */ var FlexibleContent_Clients_Clients = (Clients_Clients);
// CONCATENATED MODULE: ./components/FlexibleContent/Clients/index.js

/* harmony default export */ var FlexibleContent_Clients = (FlexibleContent_Clients_Clients);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__("BTiB");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__("QILm");
var objectWithoutProperties_default = /*#__PURE__*/__webpack_require__.n(objectWithoutProperties);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__("rf6O");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);

// CONCATENATED MODULE: ./components/Form/Fields/styles.js



var STextInput = external_styled_components_default.a.input.withConfig({
  displayName: "styles__STextInput",
  componentId: "iq3eap-0"
})(["height:", ";font-weight:700;font-size:", ";border:0;border-bottom:1px solid ", ";outline:none;"], Object(external_polished_["rem"])(40), Object(external_polished_["rem"])(18), theme["b" /* default */].colors.border);
var STextArea = external_styled_components_default.a.textarea.withConfig({
  displayName: "styles__STextArea",
  componentId: "iq3eap-1"
})(["height:", ";font-weight:700;font-size:", ";border:0;border-bottom:1px solid ", ";outline:none;"], Object(external_polished_["rem"])(100), Object(external_polished_["rem"])(18), theme["b" /* default */].colors.border);
var SError = external_styled_components_default.a.span.withConfig({
  displayName: "styles__SError",
  componentId: "iq3eap-2"
})(["margin-top:", ";font-size:", ";color:", ";"], Object(external_polished_["rem"])(10), Object(external_polished_["rem"])(13), theme["b" /* default */].colors.red);
/* harmony default export */ var Fields_styles = (STextInput);
// CONCATENATED MODULE: ./components/Form/Fields/TextInput.jsx


var TextInput_jsx = external_react_default.a.createElement;

 // Styling



var TextInput = external_react_default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = objectWithoutProperties_default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return TextInput_jsx(styles["f" /* Flex */], {
    mb: [15, 30],
    mt: [15, 0],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && TextInput_jsx(styles["g" /* FormLabel */], {
    htmlFor: name
  }, isRequired ? label + '*' : label), TextInput_jsx(Fields_styles, extends_default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && TextInput_jsx(SError, null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
TextInput.propTypes = {
  label: external_prop_types_default.a.string,
  name: external_prop_types_default.a.string.isRequired,
  isRequired: external_prop_types_default.a.bool,
  width: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.array]),
  errors: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.bool])
};
TextInput.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ var Fields_TextInput = (TextInput);
// CONCATENATED MODULE: ./components/Form/Fields/Email.jsx


var Email_jsx = external_react_default.a.createElement;

 // Styling



var Email = external_react_default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = objectWithoutProperties_default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return Email_jsx(styles["f" /* Flex */], {
    mb: [15, 30],
    mt: [15, 0],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && Email_jsx(styles["g" /* FormLabel */], {
    htmlFor: name
  }, isRequired ? label + '*' : label), Email_jsx(Fields_styles, extends_default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && Email_jsx(SError, null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
Email.propTypes = {
  label: external_prop_types_default.a.string,
  isRequired: external_prop_types_default.a.bool,
  width: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.array]),
  errors: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.bool])
};
Email.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ var Fields_Email = (Email);
// CONCATENATED MODULE: ./components/Form/Fields/TextArea.jsx


var TextArea_jsx = external_react_default.a.createElement;

 // Styling



var TextArea = external_react_default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = objectWithoutProperties_default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return TextArea_jsx(styles["f" /* Flex */], {
    my: [15, 30],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && TextArea_jsx(styles["g" /* FormLabel */], {
    htmlFor: name
  }, isRequired ? label + '*' : label), TextArea_jsx(STextArea, extends_default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && TextArea_jsx(SError, null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
TextArea.propTypes = {
  label: external_prop_types_default.a.string,
  name: external_prop_types_default.a.string.isRequired,
  isRequired: external_prop_types_default.a.bool,
  width: external_prop_types_default.a.oneOfType([external_prop_types_default.a.number, external_prop_types_default.a.array]),
  errors: external_prop_types_default.a.oneOfType([external_prop_types_default.a.object, external_prop_types_default.a.bool])
};
TextArea.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ var Fields_TextArea = (TextArea);
// CONCATENATED MODULE: ./components/Form/Fields/index.js




// CONCATENATED MODULE: ./components/Form/Form.jsx

var Form_jsx = external_react_default.a.createElement;


 // Inputs

 // Styling




var Form_Form = function Form(_ref) {
  var fields = _ref.fields,
      button = _ref.button,
      onSubmit = _ref.onSubmit;

  var _useForm = Object(external_react_hook_form_["useForm"])(),
      handleSubmit = _useForm.handleSubmit,
      register = _useForm.register,
      errors = _useForm.errors;

  return Form_jsx(styles["b" /* Box */], {
    as: "form",
    onSubmit: handleSubmit(onSubmit)
  }, fields && Form_jsx(styles["f" /* Flex */], {
    flexWrap: "wrap"
  }, fields.map(function (field) {
    var _field$errorMessage, _field$errorMessage2, _field$errorMessage3, _field$errorMessage4;

    switch (field.type) {
      case 'text':
        return Form_jsx(Fields_TextInput, extends_default()({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage = field.errorMessage) === null || _field$errorMessage === void 0 ? void 0 : _field$errorMessage.required)
          }),
          errors: errors
        }, field));

      case 'textarea':
        return Form_jsx(Fields_TextArea, extends_default()({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage2 = field.errorMessage) === null || _field$errorMessage2 === void 0 ? void 0 : _field$errorMessage2.required)
          }),
          errors: errors
        }, field));

      case 'email':
        return Form_jsx(Fields_Email, extends_default()({
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
  })), button && Form_jsx(styles["b" /* Box */], {
    ml: [0, 25],
    mt: [15, 30]
  }, Form_jsx(styles["c" /* Button */], {
    type: button.type,
    bg: theme["b" /* default */].colors.blue
  }, button.text)));
};

/* harmony default export */ var components_Form_Form = (Form_Form);
// CONCATENATED MODULE: ./components/Form/index.js

/* harmony default export */ var components_Form = (components_Form_Form);
// CONCATENATED MODULE: ./components/FlexibleContent/Contact/Contact.jsx

var Contact_jsx = external_react_default.a.createElement;

// Components
 // Styling



var Contact_Contact = function Contact(_ref) {
  var title = _ref.title,
      form = _ref.form;

  var onSubmit = function onSubmit(values) {};

  return Contact_jsx(styles["i" /* Row */], {
    px: [0, 20, 0],
    pr: [40, 0]
  }, Contact_jsx(styles["f" /* Flex */], {
    py: [40, 80],
    flexWrap: "wrap"
  }, Contact_jsx(styles["b" /* Box */], {
    width: [1, 3 / 12],
    pl: [30, 0],
    mb: [20, 0]
  }, Contact_jsx(styles["j" /* Text */], {
    as: "h2",
    fontSize: [30, 60],
    fontWeight: 400
  }, title)), form && Contact_jsx(styles["d" /* Column */], {
    width: [1, 7 / 12],
    offset: 1 / 12
  }, Contact_jsx(components_Form, extends_default()({}, form, {
    onSubmit: onSubmit
  })))));
};

Contact_Contact.defaultProps = {
  form: {}
};
/* harmony default export */ var FlexibleContent_Contact_Contact = (Contact_Contact);
// CONCATENATED MODULE: ./components/FlexibleContent/Contact/index.js

/* harmony default export */ var FlexibleContent_Contact = (FlexibleContent_Contact_Contact);
// CONCATENATED MODULE: ./components/FlexibleContent.jsx

var FlexibleContent_jsx = external_react_default.a.createElement;








var FlexibleContent_FlexibleContent = function FlexibleContent(_ref) {
  var layouts = _ref.layouts;
  return FlexibleContent_jsx(external_react_default.a.Fragment, null, layouts && layouts.map(function (layout) {
    switch (layout.name) {
      case 'tiles':
        return FlexibleContent_jsx(FlexibleContent_Tiles, extends_default()({
          key: external_uuid_default()()
        }, layout));

      case 'tilesFeatured':
        return FlexibleContent_jsx(FlexibleContent_TilesFeatured, extends_default()({
          key: external_uuid_default()()
        }, layout));

      case 'quote':
        return FlexibleContent_jsx(FlexibleContent_Quote, extends_default()({
          key: external_uuid_default()()
        }, layout));

      case 'clients':
        return FlexibleContent_jsx(FlexibleContent_Clients, extends_default()({
          key: external_uuid_default()()
        }, layout));

      case 'contact':
        return FlexibleContent_jsx(FlexibleContent_Contact, extends_default()({
          key: external_uuid_default()()
        }, layout));

      default:
        console.warn('missing layout for', layout.name);
        return null;
    }
  }));
};

/* harmony default export */ var components_FlexibleContent = (FlexibleContent_FlexibleContent);
// CONCATENATED MODULE: ./components/Templates/CasesOverview.jsx
var CasesOverview_jsx = external_react_default.a.createElement;



/* harmony default export */ var CasesOverview = (function (_ref) {
  var layouts = _ref.layouts;
  return CasesOverview_jsx(styles["e" /* Container */], {
    noPadding: true
  }, CasesOverview_jsx(components_FlexibleContent, {
    layouts: layouts
  }));
});
// CONCATENATED MODULE: ./pages/index.jsx


var pages_jsx = external_react_default.a.createElement;

// Utils
 // Components



var pages_Home = function Home(_ref) {
  var layouts = _ref.layouts;
  return pages_jsx(CasesOverview, {
    layouts: layouts
  });
};

pages_Home.getInitialProps = function _callee() {
  var cases, clients, contact, layouts;
  return regenerator_default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regenerator_default.a.awrap(Object(callers["a" /* get */])('cases/').then(function (resp) {
            return resp === null || resp === void 0 ? void 0 : resp.layouts;
          }));

        case 2:
          cases = _context.sent;
          _context.next = 5;
          return regenerator_default.a.awrap(Object(callers["a" /* get */])('clients/'));

        case 5:
          clients = _context.sent;
          _context.next = 8;
          return regenerator_default.a.awrap(Object(callers["a" /* get */])('contact/'));

        case 8:
          contact = _context.sent;
          layouts = [].concat(toConsumableArray_default()(cases), [clients, contact]);
          return _context.abrupt("return", {
            layouts: layouts
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
};

pages_Home.defaultProps = {
  layouts: []
};
/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "hKtz":
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "kNaX":
/***/ (function(module, exports) {

module.exports = require("uuid");

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

/***/ "o0o1":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "pVnL":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });