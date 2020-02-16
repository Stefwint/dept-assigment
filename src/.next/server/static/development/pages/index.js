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

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./api/mock.js");


Object(_mock__WEBPACK_IMPORTED_MODULE_1__["default"])(true);
/**
 * Api constructor
 * @type {Axios.create}
 */

var Api = function Api() {
  var instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
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

/* harmony default export */ __webpack_exports__["default"] = (Api);

/***/ }),

/***/ "./api/callers/get.js":
/*!****************************!*\
  !*** ./api/callers/get.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return get; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api */ "./api/api.js");

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
  return Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])().get(url, args, conf).then(function (_ref) {
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

/***/ }),

/***/ "./api/callers/index.js":
/*!******************************!*\
  !*** ./api/callers/index.js ***!
  \******************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "./api/callers/get.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./api/mock.js":
/*!*********************!*\
  !*** ./api/mock.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mock; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios-mock-adapter */ "axios-mock-adapter");
/* harmony import */ var axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mockdata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mockdata */ "./api/mockdata/index.js");



function mock(useMock) {
  if (useMock) {
    // This sets the mock adapter on the default instance
    var _mock = new axios_mock_adapter__WEBPACK_IMPORTED_MODULE_1___default.a(axios__WEBPACK_IMPORTED_MODULE_0___default.a);

    _mock // Mock GET requests
    .onGet('cases/').reply(200, _mockdata__WEBPACK_IMPORTED_MODULE_2__["cases"]).onGet('clients/').reply(200, _mockdata__WEBPACK_IMPORTED_MODULE_2__["clients"]).onGet('contact/').reply(200, _mockdata__WEBPACK_IMPORTED_MODULE_2__["contact"]).onGet('menus/').reply(200, _mockdata__WEBPACK_IMPORTED_MODULE_2__["menus"]) // Let unmatched requests through
    .onAny().passThrough();
  }
}

/***/ }),

/***/ "./api/mockdata/cases.json":
/*!*********************************!*\
  !*** ./api/mockdata/cases.json ***!
  \*********************************/
/*! exports provided: layouts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"layouts\":[{\"name\":\"tiles\",\"items\":[{\"client\":\"bol.com\",\"title\":\"A summer island in the Netherlands\",\"link\":\"https://www.deptagency.com\",\"image\":\"bolcom.png\"},{\"client\":\"Kempen\",\"title\":\"Not some average banking website\",\"link\":\"https://www.deptagency.com\",\"image\":\"kempen.png\"},{\"client\":\"Philips\",\"title\":\"Beautiful design meets innovative technology\",\"link\":\"https://www.deptagency.com\",\"image\":\"philips.png\"},{\"client\":\"Gemeentemuseum\",\"title\":\"A 100 years of Mondriaan & De Stijl\",\"link\":\"https://www.deptagency.com\",\"image\":\"gemeentemuseum.png\"}]},{\"name\":\"tilesFeatured\",\"items\":[{\"client\":\"Florensis\",\"title\":\"Rethinking the entire online ecosystem\",\"link\":\"https://www.deptagency.com\",\"image\":\"florensis.png\"},{\"client\":\"Microsoft\",\"title\":\"Topping into Ireland's unique gaming culture and bringing a fresh flavour to their Xbox social media channels\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"O'neill\",\"title\":\"Integrating existing content into O'neill's new e-commerce platform\",\"link\":\"https://www.deptagency.com\"}]},{\"name\":\"tiles\",\"items\":[{\"client\":\"Be Lighting\",\"title\":\"Delivering clarity on a global scale\",\"link\":\"https://www.deptagency.com\",\"image\":\"lightning.png\"},{\"client\":\"Tui\",\"title\":\"Swipe to find your next holiday destination\",\"link\":\"https://www.deptagency.com\",\"image\":\"tui.png\"}]},{\"name\":\"tilesFeatured\",\"items\":[{\"client\":\"Butlins\",\"title\":\"Enhancing customer experience for personalised holiday planning using real time data\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"Vacanseselect\",\"title\":\"Predicting booking behavior for holidays with smart data, voice search and machine learning\",\"link\":\"https://www.deptagency.com\"},{\"client\":\"Florensis\",\"title\":\"Rethinking the entire online ecosystem\",\"link\":\"https://www.deptagency.com\",\"image\":\"florensis.png\"}]},{\"name\":\"tiles\",\"items\":[{\"client\":\"Chocomel\",\"title\":\"A campaign for the limited edition letter packs\",\"link\":\"https://www.deptagency.com\",\"image\":\"chocomel.png\"},{\"client\":\"JBL\",\"title\":\"Live like a champion with Jerome Booteng\",\"link\":\"https://www.deptagency.com\",\"image\":\"jbl.png\"},{\"client\":\"Zalando\",\"title\":\"Innovative SEO and content strategy for Zalando\",\"link\":\"https://www.deptagency.com\",\"image\":\"zalando.png\"},{\"client\":\"Koninklijke Bibliotheek\",\"title\":\"The search for the most influential book ever\",\"link\":\"https://www.deptagency.com\",\"image\":\"koninklijke-bibliotheek.png\"}]},{\"name\":\"quote\",\"item\":{\"quote\":\"“Dept helped us tell our story through a bold new identity and a robust online experience. To the tune of 60% growth in online bookings in just one month.”\",\"name\":\"Mattijs ten Brink – CEO, Transavia\"}},{\"name\":\"tiles\",\"items\":[{\"client\":\"Liberty Global\",\"title\":\"Delivering complex commerce solutions\",\"link\":\"https://www.deptagency.com\",\"image\":\"liberty-global.png\"},{\"client\":\"Arla\",\"title\":\"Swipe to find your next holiday destination\",\"link\":\"https://www.deptagency.com\",\"image\":\"arla.png\"}]}]}");

/***/ }),

/***/ "./api/mockdata/clients.json":
/*!***********************************!*\
  !*** ./api/mockdata/clients.json ***!
  \***********************************/
/*! exports provided: name, title, description, logos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"clients\",\"title\":\"CLIENTS\",\"description\":\"We value a great working relationship with our clients above all else. It’s why they often come to our parties. It’s also why we’re able to challenge and inspire them to reach for the stars.\",\"logos\":[{\"logo\":\"nivea.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"mona.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"transavia.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"zalando.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"tomtom.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"unilever.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"adidas.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"pathe.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"abn.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"triumph.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"microsoft.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"oxxio.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"nn.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"ziggo.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"walibi.svg\",\"link\":\"https://www.deptagency.com\"},{\"logo\":\"klm.svg\",\"link\":\"https://www.deptagency.com\"}]}");

/***/ }),

/***/ "./api/mockdata/contact.json":
/*!***********************************!*\
  !*** ./api/mockdata/contact.json ***!
  \***********************************/
/*! exports provided: name, title, form, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"contact\",\"title\":\"Question? We are here to help!\",\"form\":{\"fields\":[{\"type\":\"text\",\"name\":\"name\",\"label\":\"Name\",\"isRequired\":true,\"errorMessage\":{\"required\":\"This field is required\"}},{\"type\":\"text\",\"name\":\"email\",\"label\":\"Email\",\"isRequired\":true,\"errorMessage\":{\"required\":\"This field is required\",\"email\":\"Email address is incorrect\"}},{\"name\":\"message\",\"type\":\"textarea\",\"label\":\"Message\",\"isRequired\":false}],\"button\":{\"type\":\"submit\",\"text\":\"Send\"}}}");

/***/ }),

/***/ "./api/mockdata/index.js":
/*!*******************************!*\
  !*** ./api/mockdata/index.js ***!
  \*******************************/
/*! exports provided: cases, clients, contact, menus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cases__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cases */ "./api/mockdata/cases.json");
var _cases__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./cases */ "./api/mockdata/cases.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "cases", function() { return _cases__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients */ "./api/mockdata/clients.json");
var _clients__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./clients */ "./api/mockdata/clients.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "clients", function() { return _clients__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./api/mockdata/contact.json");
var _contact__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./contact */ "./api/mockdata/contact.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "contact", function() { return _contact__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _menus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menus */ "./api/mockdata/menus.json");
var _menus__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./menus */ "./api/mockdata/menus.json", 1);
/* harmony reexport (default from named exports) */ __webpack_require__.d(__webpack_exports__, "menus", function() { return _menus__WEBPACK_IMPORTED_MODULE_3__; });






/***/ }),

/***/ "./api/mockdata/menus.json":
/*!*********************************!*\
  !*** ./api/mockdata/menus.json ***!
  \*********************************/
/*! exports provided: menus, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"menus\":{\"mainMenu\":[{\"title\":\"Home\",\"slug\":\"home\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Work\",\"slug\":\"work\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\",\"isActive\":true},{\"title\":\"About\",\"slug\":\"about\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Services\",\"slug\":\"services\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Partners\",\"slug\":\"partners\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Stories\",\"slug\":\"stories\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Careers\",\"slug\":\"careers\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Events\",\"slug\":\"events\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Contact\",\"slug\":\"contact\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"}],\"footerMenu\":[{\"title\":\"Work\",\"slug\":\"work\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Service\",\"slug\":\"service\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Stories\",\"slug\":\"stories\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"About\",\"slug\":\"about\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Careers\",\"slug\":\"careers\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"},{\"title\":\"Contact\",\"slug\":\"contact\",\"url\":\"https://www.deptagency.com\",\"target\":\"_blank\"}]}}");

/***/ }),

/***/ "./components/FlexibleContent.jsx":
/*!****************************************!*\
  !*** ./components/FlexibleContent.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FlexibleContent_Tiles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FlexibleContent/Tiles */ "./components/FlexibleContent/Tiles/index.js");
/* harmony import */ var _FlexibleContent_TilesFeatured__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FlexibleContent/TilesFeatured */ "./components/FlexibleContent/TilesFeatured/index.js");
/* harmony import */ var _FlexibleContent_Quote__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FlexibleContent/Quote */ "./components/FlexibleContent/Quote/index.js");
/* harmony import */ var _FlexibleContent_Clients__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FlexibleContent/Clients */ "./components/FlexibleContent/Clients/index.js");
/* harmony import */ var _FlexibleContent_Contact__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./FlexibleContent/Contact */ "./components/FlexibleContent/Contact/index.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;









var FlexibleContent = function FlexibleContent(_ref) {
  var layouts = _ref.layouts;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, layouts && layouts.map(function (layout) {
    switch (layout.name) {
      case 'tiles':
        return __jsx(_FlexibleContent_Tiles__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
        }, layout));

      case 'tilesFeatured':
        return __jsx(_FlexibleContent_TilesFeatured__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
        }, layout));

      case 'quote':
        return __jsx(_FlexibleContent_Quote__WEBPACK_IMPORTED_MODULE_6__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
        }, layout));

      case 'clients':
        return __jsx(_FlexibleContent_Clients__WEBPACK_IMPORTED_MODULE_7__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
        }, layout));

      case 'contact':
        return __jsx(_FlexibleContent_Contact__WEBPACK_IMPORTED_MODULE_8__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: uuid__WEBPACK_IMPORTED_MODULE_3___default()()
        }, layout));

      default:
        console.warn('missing layout for', layout.name);
        return null;
    }
  }));
};

FlexibleContent.propTypes = {
  layouts: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (FlexibleContent);

/***/ }),

/***/ "./components/FlexibleContent/Clients/Clients.jsx":
/*!********************************************************!*\
  !*** ./components/FlexibleContent/Clients/Clients.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles */ "./components/FlexibleContent/Clients/styles.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Styling





var Clients = function Clients(_ref) {
  var title = _ref.title,
      description = _ref.description,
      logos = _ref.logos;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    bg: _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.lightGray
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    mt: 40,
    pt: [40, 80],
    pb: [40, 100],
    px: 0
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    justifyContent: "center"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1, 6 / 12]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "h2",
    fontSize: [30, 60],
    fontWeight: 400,
    textAlign: "center"
  }, title), description && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "p",
    fontSize: 17,
    lineHeight: "27px",
    textAlign: "center"
  }, description))), logos && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    as: "ul",
    p: 0,
    mt: [30, 50],
    flexWrap: "wrap"
  }, logos.map(function (item) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: uuid__WEBPACK_IMPORTED_MODULE_2___default()(),
      as: "li",
      width: [1 / 2, 1 / 4],
      px: [20, 0]
    }, __jsx("a", {
      href: item.link,
      target: "_blank"
    }, __jsx("img", {
      src: "../../../static/logos/".concat(item.logo),
      alt: "image"
    })));
  }))));
};

Clients.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  logos: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object)
};
Clients.defaultProps = {
  description: '',
  logos: []
};
/* harmony default export */ __webpack_exports__["default"] = (Clients);

/***/ }),

/***/ "./components/FlexibleContent/Clients/index.js":
/*!*****************************************************!*\
  !*** ./components/FlexibleContent/Clients/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clients */ "./components/FlexibleContent/Clients/Clients.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Clients__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/FlexibleContent/Clients/styles.js":
/*!******************************************************!*\
  !*** ./components/FlexibleContent/Clients/styles.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");



var SLogo = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "styles__SLogo",
  componentId: "sc-9spc85-0"
})(["display:flex;align-items:center;justify-content:center;height:", ";text-align:center;list-style:none;"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(125));
/* harmony default export */ __webpack_exports__["default"] = (SLogo);

/***/ }),

/***/ "./components/FlexibleContent/Contact/Contact.jsx":
/*!********************************************************!*\
  !*** ./components/FlexibleContent/Contact/Contact.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
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
  }, __jsx(_Form__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, form, {
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

/***/ }),

/***/ "./components/FlexibleContent/Contact/index.js":
/*!*****************************************************!*\
  !*** ./components/FlexibleContent/Contact/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Contact */ "./components/FlexibleContent/Contact/Contact.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Contact__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/FlexibleContent/Quote/Quote.jsx":
/*!****************************************************!*\
  !*** ./components/FlexibleContent/Quote/Quote.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Styling



var Quote = function Quote(_ref) {
  var item = _ref.item;
  var quote = item.quote,
      name = item.name;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    px: [20, 20, 0],
    mt: [20, 40]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Flex"], {
    pt: [40, 80],
    pb: [40, 60],
    justifyContent: "center",
    className: "border"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    width: [1, 8 / 12]
  }, quote && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "blockquote",
    fontSize: [24, 36]
  }, quote), name && __jsx(_styles__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    as: "span",
    mt: 30,
    fontSize: 13,
    fontWeight: "700",
    color: _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.blackTwo,
    className: "block upper"
  }, name))));
};

Quote.propTypes = {
  item: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Quote);

/***/ }),

/***/ "./components/FlexibleContent/Quote/index.js":
/*!***************************************************!*\
  !*** ./components/FlexibleContent/Quote/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Quote__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quote */ "./components/FlexibleContent/Quote/Quote.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Quote__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/FlexibleContent/Tiles/Tiles.jsx":
/*!****************************************************!*\
  !*** ./components/FlexibleContent/Tiles/Tiles.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Tile */ "./components/Tile/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


 // Components

 // Styling



var Tiles = function Tiles(_ref) {
  var items = _ref.items;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    px: [20, 20, 0]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mx: -15,
    flexWrap: "wrap"
  }, items === null || items === void 0 ? void 0 : items.map(function (item) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Box"], {
      key: uuid__WEBPACK_IMPORTED_MODULE_2___default()(),
      my: [25, 40],
      px: 15,
      width: [1, 1 / 2]
    }, __jsx(_Tile__WEBPACK_IMPORTED_MODULE_3__["default"], item));
  })));
};

Tiles.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Tiles);

/***/ }),

/***/ "./components/FlexibleContent/Tiles/index.js":
/*!***************************************************!*\
  !*** ./components/FlexibleContent/Tiles/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tiles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tiles */ "./components/FlexibleContent/Tiles/Tiles.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Tiles__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/FlexibleContent/TilesFeatured/TilesFeatured.jsx":
/*!********************************************************************!*\
  !*** ./components/FlexibleContent/TilesFeatured/TilesFeatured.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Tile */ "./components/Tile/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles */ "./components/FlexibleContent/TilesFeatured/styles.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


 // Components

 // Styling




var TilesFeatured = function TilesFeatured(_ref) {
  var items = _ref.items;
  var featuredItem = items === null || items === void 0 ? void 0 : items.findIndex(function (item) {
    return item.image;
  });
  var smallTiles = items.filter(function (item) {
    return !item.image;
  });
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    px: [20, 20, 0]
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    mx: -15,
    my: [25, 40],
    flexWrap: "wrap"
  }, __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Box"], {
    px: 15,
    width: [1, 8 / 12],
    order: featuredItem === 0 ? 0 : 1
  }, __jsx(_Tile__WEBPACK_IMPORTED_MODULE_4__["default"], items[featuredItem])), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Flex"], {
    flexDirection: "column",
    justifyContent: "space-between",
    px: 15,
    mb: featuredItem === 2 ? [50, 0] : 0,
    mt: featuredItem === 0 ? [50, 0] : 0,
    width: [1, 4 / 12],
    order: featuredItem === 0 ? 1 : 0,
    className: "small-tiles"
  }, smallTiles === null || smallTiles === void 0 ? void 0 : smallTiles.map(function (item, index) {
    return __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["Box"], {
      key: uuid__WEBPACK_IMPORTED_MODULE_3___default()(),
      pt: "5px"
    }, __jsx(_Tile__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      isSmall: true,
      isLast: index === 1
    }, item)));
  }))));
};

TilesFeatured.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object).isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (TilesFeatured);

/***/ }),

/***/ "./components/FlexibleContent/TilesFeatured/index.js":
/*!***********************************************************!*\
  !*** ./components/FlexibleContent/TilesFeatured/index.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TilesFeatured__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TilesFeatured */ "./components/FlexibleContent/TilesFeatured/TilesFeatured.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_TilesFeatured__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/FlexibleContent/TilesFeatured/styles.js":
/*!************************************************************!*\
  !*** ./components/FlexibleContent/TilesFeatured/styles.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../theme */ "./theme.js");




var STilesFeatured = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles__WEBPACK_IMPORTED_MODULE_2__["Row"]).withConfig({
  displayName: "styles__STilesFeatured",
  componentId: "sc-1c8h0s0-0"
})([".small-tiles{max-height:", ";> div{height:100%;border-top:1px solid ", ";&:last-of-type{border-bottom:1px solid ", ";}}}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(500), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.border, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.border);
/* harmony default export */ __webpack_exports__["default"] = (STilesFeatured);

/***/ }),

/***/ "./components/Form/Fields/Email.jsx":
/*!******************************************!*\
  !*** ./components/Form/Fields/Email.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Form/Fields/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Styling



var Email = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mb: [15, 30],
    mt: [15, 0],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    htmlFor: name
  }, isRequired ? label + '*' : label), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SError"], null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
Email.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
};
Email.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ __webpack_exports__["default"] = (Email);

/***/ }),

/***/ "./components/Form/Fields/TextArea.jsx":
/*!*********************************************!*\
  !*** ./components/Form/Fields/TextArea.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Form/Fields/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Styling



var TextArea = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    my: [15, 30],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    htmlFor: name
  }, isRequired ? label + '*' : label), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["STextArea"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SError"], null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
TextArea.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  name: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array]),
  errors: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool])
};
TextArea.defaultProps = {
  label: '',
  isRequired: false,
  width: [1, 1 / 2],
  errors: false
};
/* harmony default export */ __webpack_exports__["default"] = (TextArea);

/***/ }),

/***/ "./components/Form/Fields/TextInput.jsx":
/*!**********************************************!*\
  !*** ./components/Form/Fields/TextInput.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles */ "./components/styles/index.js");
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./styles */ "./components/Form/Fields/styles.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Styling



var TextInput = react__WEBPACK_IMPORTED_MODULE_2___default.a.forwardRef(function (_ref, ref) {
  var _errors$name, _errors$name2;

  var label = _ref.label,
      name = _ref.name,
      isRequired = _ref.isRequired,
      width = _ref.width,
      errors = _ref.errors,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "name", "isRequired", "width", "errors"]);

  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["Flex"], {
    mb: [15, 30],
    mt: [15, 0],
    px: [0, 25],
    flexDirection: "column",
    width: width
  }, label && __jsx(_styles__WEBPACK_IMPORTED_MODULE_4__["FormLabel"], {
    htmlFor: name
  }, isRequired ? label + '*' : label), __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    name: name,
    ref: ref
  }, props)), (errors === null || errors === void 0 ? void 0 : (_errors$name = errors[name]) === null || _errors$name === void 0 ? void 0 : _errors$name.message) && __jsx(_styles__WEBPACK_IMPORTED_MODULE_5__["SError"], null, errors === null || errors === void 0 ? void 0 : (_errors$name2 = errors[name]) === null || _errors$name2 === void 0 ? void 0 : _errors$name2.message));
});
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

/***/ }),

/***/ "./components/Form/Fields/index.js":
/*!*****************************************!*\
  !*** ./components/Form/Fields/index.js ***!
  \*****************************************/
/*! exports provided: TextInput, Email, TextArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TextInput__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextInput */ "./components/Form/Fields/TextInput.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextInput", function() { return _TextInput__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Email */ "./components/Form/Fields/Email.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Email", function() { return _Email__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _TextArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextArea */ "./components/Form/Fields/TextArea.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextArea", function() { return _TextArea__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./components/Form/Fields/styles.js":
/*!******************************************!*\
  !*** ./components/Form/Fields/styles.js ***!
  \******************************************/
/*! exports provided: STextArea, SError, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STextArea", function() { return STextArea; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SError", function() { return SError; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../theme */ "./theme.js");



var STextInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.input.withConfig({
  displayName: "styles__STextInput",
  componentId: "iq3eap-0"
})(["height:", ";font-weight:700;font-size:", ";border:0;border-bottom:1px solid ", ";outline:none;"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(40), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(18), _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.border);
var STextArea = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.textarea.withConfig({
  displayName: "styles__STextArea",
  componentId: "iq3eap-1"
})(["height:", ";font-weight:700;font-size:", ";border:0;border-bottom:1px solid ", ";outline:none;"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(100), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(18), _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.border);
var SError = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.span.withConfig({
  displayName: "styles__SError",
  componentId: "iq3eap-2"
})(["margin-top:", ";font-size:", ";color:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(10), Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(13), _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.red);
/* harmony default export */ __webpack_exports__["default"] = (STextInput);

/***/ }),

/***/ "./components/Form/Form.jsx":
/*!**********************************!*\
  !*** ./components/Form/Form.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "react-hook-form");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_hook_form__WEBPACK_IMPORTED_MODULE_4__);
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
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["TextInput"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage = field.errorMessage) === null || _field$errorMessage === void 0 ? void 0 : _field$errorMessage.required)
          }),
          errors: errors
        }, field));

      case 'textarea':
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["TextArea"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
          key: field.name,
          ref: register({
            required: field.isRequired && ((_field$errorMessage2 = field.errorMessage) === null || _field$errorMessage2 === void 0 ? void 0 : _field$errorMessage2.required)
          }),
          errors: errors
        }, field));

      case 'email':
        return __jsx(_Fields__WEBPACK_IMPORTED_MODULE_5__["Email"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
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

/***/ }),

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form */ "./components/Form/Form.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Form__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Templates/CasesOverview.jsx":
/*!************************************************!*\
  !*** ./components/Templates/CasesOverview.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");
/* harmony import */ var _FlexibleContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FlexibleContent */ "./components/FlexibleContent.jsx");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var layouts = _ref.layouts;
  return __jsx(_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    noPadding: true
  }, __jsx(_FlexibleContent__WEBPACK_IMPORTED_MODULE_2__["default"], {
    layouts: layouts
  }));
});

/***/ }),

/***/ "./components/Tile/Tile.jsx":
/*!**********************************!*\
  !*** ./components/Tile/Tile.jsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
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
    mt: 15,
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

/***/ }),

/***/ "./components/Tile/index.js":
/*!**********************************!*\
  !*** ./components/Tile/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tile */ "./components/Tile/Tile.jsx");

/* harmony default export */ __webpack_exports__["default"] = (_Tile__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./components/Tile/styles.js":
/*!***********************************!*\
  !*** ./components/Tile/styles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles */ "./components/styles/index.js");



var STile = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_styles__WEBPACK_IMPORTED_MODULE_2__["Box"]).withConfig({
  displayName: "styles__STile",
  componentId: "sc-1rx2yf9-0"
})(["a{display:block;text-decoration:none;> div{overflow:hidden;transition:transform 0.3s ease;img{display:block;width:100%;max-height:", ";object-fit:cover;transition:transform 0.3s ease;}}span{display:block;text-transform:uppercase;}&:hover,&:focus{> div{transform:scale(0.95);img{transform:scale(1.08);}}", "{&:before{transform:translateX(5px);}}}}"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(500), _styles__WEBPACK_IMPORTED_MODULE_2__["ArrowButton"]);
/* harmony default export */ __webpack_exports__["default"] = (STile);

/***/ }),

/***/ "./components/styles/Button.js":
/*!*************************************!*\
  !*** ./components/styles/Button.js ***!
  \*************************************/
/*! exports provided: ArrowButton, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowButton", function() { return ArrowButton; });
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../theme */ "./theme.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n      width: 100%;\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
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
var ArrowButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Button__ArrowButton",
  componentId: "sc-1qg0mzm-1"
})(["color:", ";text-transform:uppercase;font-size:", ";font-weight:700;&:before{content:'';display:inline-block;margin-right:", ";width:0;height:0;border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:7px solid ", ";transition:transform 0.3s ease;}"], _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.blue, Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(14), Object(polished__WEBPACK_IMPORTED_MODULE_3__["rem"])(10), _theme__WEBPACK_IMPORTED_MODULE_5__["default"].colors.blue);
/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./components/styles/Column.js":
/*!*************************************!*\
  !*** ./components/styles/Column.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-system */ "styled-system");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flex */ "./components/styles/Flex.js");
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../theme */ "./theme.js");






function offset(margin) {
  var styles = '';

  if (typeof margin === 'number' || _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(margin) === 'object' && margin.length === 1) {
    styles = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["margin-left:", "%;"], margin * 100);
  } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(margin) === 'object') {
    styles = margin.filter(function (num) {
      return typeof num === 'number';
    }).map(function (item, index) {
      return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media screen and (min-width:", "){margin-left:", "%;}"], "".concat(_theme__WEBPACK_IMPORTED_MODULE_4__["breakpoints"][index], "px"), item * 100);
    });
  }

  return styles;
}

var Column = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Flex__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Column",
  componentId: "sc-1pla7c5-0"
})(["", ";", ""], styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], function (props) {
  return props.offset ? offset(props.offset) : Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])([""]);
});
/* harmony default export */ __webpack_exports__["default"] = (Column);

/***/ }),

/***/ "./components/styles/Container.js":
/*!****************************************!*\
  !*** ./components/styles/Container.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Flex */ "./components/styles/Flex.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils */ "./utils/index.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n    ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_Flex__WEBPACK_IMPORTED_MODULE_3__["Box"]).withConfig({
  displayName: "Container",
  componentId: "sc-17dqwau-0"
})(["width:100%;max-width:", ";", ""], function (props) {
  return props.theme.containerSize;
}, _utils__WEBPACK_IMPORTED_MODULE_4__["media"].smallOnly(_templateObject(), function (props) {
  return !props.noPadding && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["padding-left:", ";padding-right:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(30), Object(polished__WEBPACK_IMPORTED_MODULE_2__["rem"])(30));
}));
Container.defaultProps = {
  mx: 'auto',
  px: '0'
};
/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/styles/Flex.js":
/*!***********************************!*\
  !*** ./components/styles/Flex.js ***!
  \***********************************/
/*! exports provided: Box, Text, Flex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Flex", function() { return Flex; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-system */ "styled-system");
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

/***/ "./components/styles/FormLabel.js":
/*!****************************************!*\
  !*** ./components/styles/FormLabel.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../theme */ "./theme.js");



var FormLabel = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.label.withConfig({
  displayName: "FormLabel",
  componentId: "sc-12nf5k4-0"
})(["text-transform:uppercase;font-size:", ";font-weight:700;line-height:2;color:", ";"], Object(polished__WEBPACK_IMPORTED_MODULE_1__["rem"])(15), _theme__WEBPACK_IMPORTED_MODULE_2__["default"].colors.black);
/* harmony default export */ __webpack_exports__["default"] = (FormLabel);

/***/ }),

/***/ "./components/styles/GlobalStyles.js":
/*!*******************************************!*\
  !*** ./components/styles/GlobalStyles.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js");
/* harmony import */ var _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-normalize */ "styled-normalize");
/* harmony import */ var styled_normalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_normalize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../theme */ "./theme.js");
/* harmony import */ var _utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/mediaQueries */ "./utils/mediaQueries.js");


function _templateObject() {
  var data = _babel_runtime_helpers_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0___default()(["\n  ", ";\n\n  ", "\n\n  html {\n    box-sizing: border-box;\n  }\n\n  body {\n    font-family: ", ";\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  h1, h2, h3, h4, h5, h6 {\n    margin: 0;\n    font-family: ", ";\n  }\n\n  img {\n    max-width: 100%;\n  }\n\n  blockquote {\n    margin: 0;\n    font-family: ", ";\n    line-height: 1.28;\n  }\n\n  select::-ms-expand {\n    display: none;\n  }\n\n  .accessibly-hidden {\n    position: absolute;\n    left: -999em;\n  }\n\n  .border {\n    border-top: 1px solid ", ";\n  }\n\n  .block {\n    display: block;\n  }\n\n  .upper {\n    text-transform: uppercase;\n  }\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject(), styled_normalize__WEBPACK_IMPORTED_MODULE_2___default.a, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["", ";", ";"], _utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["showClasses"], _utils_mediaQueries__WEBPACK_IMPORTED_MODULE_4__["hideClasses"]), _theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.body, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.heading, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].fonts.heading, _theme__WEBPACK_IMPORTED_MODULE_3__["default"].colors.border);
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/styles/Row.js":
/*!**********************************!*\
  !*** ./components/styles/Row.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Flex */ "./components/styles/Flex.js");


var Row = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(_Flex__WEBPACK_IMPORTED_MODULE_1__["Box"]).withConfig({
  displayName: "Row",
  componentId: "sc-1bf1evj-0"
})(["width:100%;max-width:", ";"], function (props) {
  return props.theme.gridSize;
});
Row.defaultProps = {
  mx: 'auto',
  px: [20, 30]
};
/* harmony default export */ __webpack_exports__["default"] = (Row);

/***/ }),

/***/ "./components/styles/index.js":
/*!************************************!*\
  !*** ./components/styles/index.js ***!
  \************************************/
/*! exports provided: GlobalStyles, Button, ArrowButton, Container, Column, Flex, Box, Text, Row, FormLabel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStyles */ "./components/styles/GlobalStyles.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GlobalStyles", function() { return _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button */ "./components/styles/Button.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrowButton", function() { return _Button__WEBPACK_IMPORTED_MODULE_1__["ArrowButton"]; });

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










/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

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

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/taggedTemplateLiteral.js ***!
  \**********************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
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

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_callers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/callers */ "./api/callers/index.js");
/* harmony import */ var _components_Templates_CasesOverview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Templates/CasesOverview */ "./components/Templates/CasesOverview.jsx");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

 // Utils

 // Components



var Home = function Home(_ref) {
  var layouts = _ref.layouts;
  return __jsx(_components_Templates_CasesOverview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    layouts: layouts
  });
};

Home.getInitialProps = function _callee() {
  var cases, clients, contact, layouts;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_callers__WEBPACK_IMPORTED_MODULE_4__["get"])('cases/').then(function (resp) {
            return resp === null || resp === void 0 ? void 0 : resp.layouts;
          }));

        case 2:
          cases = _context.sent;
          _context.next = 5;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_callers__WEBPACK_IMPORTED_MODULE_4__["get"])('clients/'));

        case 5:
          clients = _context.sent;
          _context.next = 8;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Object(_api_callers__WEBPACK_IMPORTED_MODULE_4__["get"])('contact/'));

        case 8:
          contact = _context.sent;
          layouts = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(cases), [clients, contact]);
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

Home.propTypes = {
  layouts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object)
};
Home.defaultProps = {
  layouts: []
};
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./theme.js":
/*!******************!*\
  !*** ./theme.js ***!
  \******************/
/*! exports provided: breakpoints, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "breakpoints", function() { return breakpoints; });
var breakpoints = [640, 1024, 1440];
/* harmony default export */ __webpack_exports__["default"] = ({
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

/***/ "./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/*! exports provided: media, isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mediaQueries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mediaQueries */ "./utils/mediaQueries.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "media", function() { return _mediaQueries__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isEmail */ "./utils/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./utils/isEmail.js":
/*!**************************!*\
  !*** ./utils/isEmail.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var isEmail = function isEmail(email, message) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!re.test(email)) {
    return false;
  }

  return true;
};

/* harmony default export */ __webpack_exports__["default"] = (isEmail);

/***/ }),

/***/ "./utils/mediaQueries.js":
/*!*******************************!*\
  !*** ./utils/mediaQueries.js ***!
  \*******************************/
/*! exports provided: showClasses, hideClasses, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showClasses", function() { return showClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideClasses", function() { return hideClasses; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../theme */ "./theme.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var labels = ['small', 'medium', 'large'];
var mediaMin = _theme__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].reduce(function (acc, cur, i) {
  acc[labels[i]] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (min-width:", "px){", ";}"], cur, styled_components__WEBPACK_IMPORTED_MODULE_1__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});
var mediaMax = _theme__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].reduce(function (acc, cur, i, sizes) {
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


var showClasses = _theme__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].reduce(function (acc, cur, i) {
  acc.push("\n    .show-for-".concat(labels[i], " {\n      @media (max-width: ").concat(cur - 1, "px) {\n        display: none!important;\n      }\n    }\n  "));
  return acc;
}, []);
var hideClasses = _theme__WEBPACK_IMPORTED_MODULE_2__["breakpoints"].reduce(function (acc, cur, i) {
  acc.push("\n    .hide-for-".concat(labels[i], " {\n      @media (min-width: ").concat(cur, "px) {\n        display: none!important;\n      }\n    }\n  "));
  return acc;
}, []);

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.jsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/stefwinterswijk/Werk/dept/src/pages/index.jsx */"./pages/index.jsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "axios-mock-adapter":
/*!*************************************!*\
  !*** external "axios-mock-adapter" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios-mock-adapter");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-hook-form":
/*!**********************************!*\
  !*** external "react-hook-form" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hook-form");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-normalize":
/*!***********************************!*\
  !*** external "styled-normalize" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-normalize");

/***/ }),

/***/ "styled-system":
/*!********************************!*\
  !*** external "styled-system" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map