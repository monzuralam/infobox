(window["webpackJsonp_infobox"] = window["webpackJsonp_infobox"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var jsonpArray = window["webpackJsonp_infobox"] = window["webpackJsonp_infobox"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  Object(_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
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

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

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

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

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
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports["default"] = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2018 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-dom */ "react-dom"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js")):undefined}(window,function(e,t,r,n,a){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=15)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.flattenPossiblyCategorizedSource=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return o(e);if(null!==t)return void 0!==e[t]?o(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){a(e,t,r[t])})}return e}({},e);return Object.keys(n).forEach(function(e){r=o(r).concat(o(n[e]))}),r},t.getPossibleCategories=function(e){return Array.isArray(e)?null:Object.keys(e)},t.convertToHex=function(e){return String.fromCodePoint(parseInt(e,10))},t.isArrayEqual=function(e,t){if(!Array.isArray(e)||!Array.isArray(t))return!1;var r=o(e);r.sort();var n=o(t);return n.sort(),JSON.stringify(r)===JSON.stringify(n)},t.getOffset=function(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}},t.getSourceType=function(e){return null===e?"null":"object"!==n(e)||Array.isArray(e)?Array.isArray(e)?"array":n(e):"object"},t.InvalidSourceException=function(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}},t.fuzzySearch=function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var a=0,o=0;a<n;a++){for(var l=e.codePointAt(a);o<r;)if(t.codePointAt(o++)===l)continue e;return!1}return!0},t.debounce=void 0,t.debounce=function(e,t){var r;return function(){var n=this,a=arguments;clearTimeout(r),r=setTimeout(function(){return e.apply(n,a)},t)}}},function(e,t){e.exports=r},,,function(e,t){e.exports=n},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=u(r(1)),a=r(6),o=u(r(0)),l=u(r(3)),i=r(2);function u(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==c(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"syncPortalPosition",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.resetPortalPosition(),r.fixWindowOverflow()}}),Object.defineProperty(d(r),"fixWindowOverflow",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.domRef.current.offsetWidth,t=r.props.domRef.current.offsetHeight,n=window,a=n.innerWidth,o=n.pageYOffset,l=document.documentElement.clientHeight,u=(0,i.getOffset)(r.props.domRef.current),c=u.left,s=u.top,f="self"===r.state.appendRoot?r.props.domRef.current:r.state.appendRoot,d=(0,i.getOffset)(f),p=r.props.btnRef.current,h=r.props.domRef.current,y=(0,i.getOffset)(p),b=getComputedStyle(p),g=(parseInt(b.borderTop,10)||0)+(parseInt(b.borderBottom,10)||0);if(c+e>a-20){var m=y.left+r.props.btnRef.current.offsetWidth-(e+d.left);m+d.left<0&&(m=10-d.left),h.style.left="".concat(m,"px")}t+s-o>l&&y.top-t>0&&("self"===r.state.appendRoot?h.style.top="-".concat(t-g,"px"):h.style.top="".concat(y.top+g-t,"px"))}}),r.state={},r.debouncedSyncPortalPosition=(0,i.debounce)(r.syncPortalPosition,250),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e){var r=t.calculateAppendAndClass(e.appendRoot);return{appendRoot:r.appendRoot,portalClasses:r.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=(0,l.default)({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),f(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=(0,i.getOffset)(t),n=(0,i.getOffset)(this.state.appendRoot),a=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+a,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=(0,l.default)(this.props.className,this.state.portalClasses),t=n.default.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:(0,a.createPortal)(t,this.state.appendRoot)}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:o.default.oneOfType([o.default.bool,o.default.string]),children:o.default.node.isRequired,domRef:o.default.object.isRequired,btnRef:o.default.object.isRequired,className:o.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{appendRoot:!1}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(r(1)),a=i(r(0)),o=i(r(3)),l=r(2);function i(e){return e&&e.__esModule?e:{default:e}}function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t,r){return t&&s(e.prototype,t),r&&s(e,r),e}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var p=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==u(n)&&"function"!=typeof n?d(this):n,Object.defineProperty(d(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=r.props.currentPage,o=r.state.totalPage;null!==n?"next"===n?a+=1:a-=1:a=parseInt(e.target.value,10)-1,a<0&&(a=0),a>o-1&&(a=o-1),t=a+1,null===n&&Number.isNaN(a)&&(a=0,t=""),r.setState({viewPage:t}),r.props.handleChangePage(a)}}),Object.defineProperty(d(r),"handlePageKeyBoard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangePage({},t)}}),Object.defineProperty(d(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.props.handleChangeValue(e)}}),Object.defineProperty(d(r),"handleValueKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){13!==e.keyCode&&32!==e.keyCode||r.handleChangeValue(t)}}),r.state={viewPage:r.props.currentPage+1},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),f(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n=t.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),a=t.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),o=t.getActiveIcons(n,a,e.currentSearch),l=o.activeIcons,i=o.activeTitles,u=e.currentPage,c=e.iconsPerPage,s={iconView:t.getCurrentViewIcons(l,c,u),titleView:t.getCurrentViewIcons(i,c,u),totalPage:Math.ceil(l.length/c)};return""!==r.viewPage&&(s.viewPage=e.currentPage+1),s}},{key:"getActiveIcons",value:function(e,t,r){var n=c(e),a=c(t);if(""===r||null===r)return{activeIcons:n,activeTitles:a};var o=[],i=[];return n.forEach(function(e,n){(0,l.fuzzySearch)(r,t[n])&&(o.push(e),i.push(t[n]))}),{activeIcons:o,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,a=(0,l.getSourceType)(r);if(Array.isArray(t)){if("object"!==a)throw new l.InvalidSourceException(a,"object")}else if("array"!==a)throw new l.InvalidSourceException(a,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),(0,l.flattenPossiblyCategorizedSource)(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,a=(r+1)*t;return e.slice(n,a)}}]),f(t,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?n.default.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},n.default.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?n.default.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},n.default.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},n.default.createElement("i",{className:"fipicon-angle-right"}))):null;return n.default.createElement("div",{className:"rfipicons__pager"},n.default.createElement("div",{className:"rfipicons__num"},n.default.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),n.default.createElement("span",{className:"rfipicons__sp"},"/"),n.default.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),n.default.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map(function(t,r){var a=(0,o.default)("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return n.default.createElement("span",{className:a,key:t,title:e.state.titleView[r]},n.default.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))}):n.default.createElement("span",{className:"rfipicons__icon--error"},n.default.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return n.default.createElement("div",{className:"rfipicons"},this.renderPager(),n.default.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}]),t}();Object.defineProperty(p,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{categories:a.default.arrayOf(a.default.string),currentCategory:a.default.number,isMulti:a.default.bool.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,currentSearch:a.default.string.isRequired,handleChangeValue:a.default.func.isRequired,currentPage:a.default.number.isRequired,iconsPerPage:a.default.number.isRequired,handleChangePage:a.default.func.isRequired,renderIcon:a.default.func.isRequired,noIconPlaceholder:a.default.string.isRequired}}),Object.defineProperty(p,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{categories:null,currentCategory:null,search:null}});var h=p;t.default=h},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}var l=function(e){return n.default.createElement("div",{className:"rfipsearch"},n.default.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};l.propTypes={handleSearch:a.default.func.isRequired,value:a.default.string.isRequired,placeholder:a.default.string.isRequired};var i=l;t.default=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(r(1)),a=o(r(0));function o(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var u=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipcategory"},n.default.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map(function(e,t){return n.default.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)})),n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}])&&i(r.prototype,a),t}();Object.defineProperty(u,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{handleCategory:a.default.func.isRequired,value:a.default.number.isRequired,categories:a.default.arrayOf(a.default.string).isRequired}});var c=u;t.default=c},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=c(r(1)),a=c(r(0)),o=c(r(10)),l=c(r(9)),i=c(r(8)),u=r(2);function c(e){return e&&e.__esModule?e:{default:e}}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t,r){return t&&f(e.prototype,t),r&&f(e,r),e}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function t(e){var r,n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,n=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!n||"object"!==s(n)&&"function"!=typeof n?p(this):n,Object.defineProperty(p(r),"handleCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),r.props.handleChangeCategory(t),r.props.handleChangePage(0)}}),Object.defineProperty(p(r),"handleSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target.value;r.props.handleChangeSearch(t)}}),r.state={},r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),d(t,null,[{key:"getDerivedStateFromProps",value:function(e){var t=(0,u.getPossibleCategories)(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),d(t,[{key:"render",value:function(){return n.default.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?n.default.createElement(l.default,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?n.default.createElement(o.default,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,n.default.createElement(i.default,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}]),t}();Object.defineProperty(h,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.any)]).isRequired,currentCategory:a.default.number.isRequired,currentPage:a.default.number.isRequired,currentSearch:a.default.string.isRequired,icons:a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.object,a.default.arrayOf(a.default.string)]),showCategory:a.default.bool.isRequired,showSearch:a.default.bool.isRequired,iconsPerPage:a.default.number.isRequired,allCatPlaceholder:a.default.string.isRequired,searchPlaceholder:a.default.string.isRequired,noIconPlaceholder:a.default.string.isRequired,renderIcon:a.default.func.isRequired,handleChangeValue:a.default.func.isRequired,handleChangeCategory:a.default.func.isRequired,handleChangePage:a.default.func.isRequired,handleChangeSearch:a.default.func.isRequired}}),Object.defineProperty(h,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null}});var y=h;t.default=y},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(r(1)),a=l(r(0)),o=l(r(3));function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?f(e):t}function f(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){function t(){var e,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,l=new Array(o),i=0;i<o;i++)l[i]=arguments[i];return s(a,(r=a=s(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),Object.defineProperty(f(a),"handleClick",{configurable:!0,enumerable:!0,writable:!0,value:function(){a.props.onClick()}}),Object.defineProperty(f(a),"handleKeyDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){32!==e.keyCode&&13!==e.keyCode||a.props.onClick()}}),Object.defineProperty(f(a),"handleDelete",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){e.stopPropagation(),a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"handleDeleteKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e,t){32!==e.keyCode&&13!==e.keyCode||a.props.handleDeleteValue(t)}}),Object.defineProperty(f(a),"renderEmptyIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(){return n.default.createElement("span",{className:"rfipbtn__icon--empty"},a.props.noSelectedPlaceholder)}}),r))}var r,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),r=t,(a=[{key:"renderIcon",value:function(e){var t=this;return""===e||null===e||void 0===e?this.renderEmptyIcon():n.default.createElement("span",{className:"rfipbtn__icon",key:e},n.default.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),n.default.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map(function(t){return e.renderIcon(t)}):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=(0,o.default)("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=(0,o.default)(this.props.className);return n.default.createElement("div",u({className:r,ref:this.props.domRef},e),n.default.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),n.default.createElement("div",{className:t},n.default.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}])&&c(r.prototype,a),t}();Object.defineProperty(d,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{className:a.default.string.isRequired,isOpen:a.default.bool.isRequired,onClick:a.default.func.isRequired,domRef:a.default.object.isRequired,isMulti:a.default.bool.isRequired,value:a.default.oneOfType([a.default.number,a.default.string,a.default.arrayOf(a.default.oneOfType([a.default.number,a.default.string]))]).isRequired,renderIcon:a.default.func.isRequired,handleDeleteValue:a.default.func.isRequired,noSelectedPlaceholder:a.default.string.isRequired}});var p=d;t.default=p},function(e,t){e.exports=a},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=f(r(1)),a=f(r(0)),o=f(r(3)),l=r(13),i=f(r(12)),u=f(r(11)),c=f(r(7)),s=r(2);function f(e){return e&&e.__esModule?e:{default:e}}function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&y(e.prototype,t),r&&y(e,r),e}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var m=[],v="",P=function(e){function t(e){var r,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this,a=(t.__proto__||Object.getPrototypeOf(t)).call(this,e),r=!a||"object"!==d(a)&&"function"!=typeof a?g(this):a,Object.defineProperty(g(r),"handleOuterClick",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.target;r.isClickWithin(t)||r.closeDropdown()}}),Object.defineProperty(g(r),"handleEscapeKeyboard",{configurable:!0,enumerable:!0,writable:!0,value:function(e){27===e.keyCode&&r.closeDropdown()}}),Object.defineProperty(g(r),"isClickWithin",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.fipButtonRef.current.contains(e)||r.fipDropDownRef.current&&r.fipDropDownRef.current.contains(e)}}),Object.defineProperty(g(r),"handleToggle",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.setState(function(e){return r.handleDropDown(!e.isOpen,!1)})}}),Object.defineProperty(g(r),"closeDropdown",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.handleDropDown(!1)}}),Object.defineProperty(g(r),"handleDropDown",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a={isOpen:e};return a.elemClass=t.getDerivedClassName("rfip",r.props.theme,r.props.isMulti,e),a.btnClass=t.getDerivedClassName("rfipbtn",r.props.theme,r.props.isMulti,e),a.ddClass=t.getDerivedClassName("rfipdropdown",r.props.theme,r.props.isMulti,e),n&&r.setState(a),a}}),Object.defineProperty(g(r),"handleChangeValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t;r.props.isMulti?(t=p(r.state.value)).includes(e)?(t=t.filter(function(t){return t!==e})).length||(t=m):t.push(e):t=e===r.state.value?v:e,r.setState({value:t,isOpen:!r.props.closeOnSelect}),r.props.onChange(t)}}),Object.defineProperty(g(r),"handleDeleteValue",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var n;n=r.props.isMulti?r.state.value.filter(function(t){return t!==e}):t.getDerivedValue(n,r.props.isMulti),r.setState({value:n}),r.props.onChange(n)}}),Object.defineProperty(g(r),"handleChangePage",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentPage:e})}}),Object.defineProperty(g(r),"handleChangeCategory",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentCategory:e,currentPage:0})}}),Object.defineProperty(g(r),"handleChangeSearch",{configurable:!0,enumerable:!0,writable:!0,value:function(e){r.setState({currentSearch:e,currentPage:0})}}),Object.defineProperty(g(r),"resetPortalStyle",{configurable:!0,enumerable:!0,writable:!0,value:function(e){["maxHeight","paddingTop","paddingBottom"].forEach(function(t){e.style[t]=null})}}),Object.defineProperty(g(r),"handlePortalEnter",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t);r.fipPortalComputedStyle={height:n.height,paddingTop:n.paddingTop,paddingBottom:n.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach(function(e){t.style[e]="0px"})}}),Object.defineProperty(g(r),"handlePortalEntering",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight=r.fipPortalComputedStyle.height,t.style.paddingTop=r.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=r.fipPortalComputedStyle.paddingBottom}}),Object.defineProperty(g(r),"handlePortalEntered",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t),r.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()}}),Object.defineProperty(g(r),"handlePortalExit",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];r.resetPortalStyle(t);var n=getComputedStyle(t).height;t.style.maxHeight=n}}),Object.defineProperty(g(r),"handlePortalExiting",{configurable:!0,enumerable:!0,writable:!0,value:function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"}}),Object.defineProperty(g(r),"renderIcon",{configurable:!0,enumerable:!0,writable:!0,value:function(e){if("function"==typeof r.props.renderFunc)return r.props.renderFunc(e);if("class"===r.props.renderUsing)return n.default.createElement("i",{className:e});var t=h({},r.props.renderUsing,r.props.convertHex?(0,s.convertToHex)(e):e);return n.default.createElement("i",t)}}),r.fipButtonRef=n.default.createRef(),r.fipDropDownRef=n.default.createRef(),r.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},r.fipPortalComputedStyle=null,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,n.default.PureComponent),b(t,null,[{key:"getDerivedStateFromProps",value:function(e,r){var n={};return n.elemClass=t.getDerivedClassName("rfip",e.theme,e.isMulti,r.isOpen),n.btnClass=t.getDerivedClassName("rfipbtn",e.theme,e.isMulti,r.isOpen),n.ddClass=t.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,r.isOpen),n.value=t.getDerivedValue(e.value,e.isMulti),e.showCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return(0,o.default)(e,"".concat(e,"--").concat(t),h({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?p(e):m:"number"!=typeof e&&"string"!=typeof e&&(r=v),r}}]),b(t,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach(function(t){document.addEventListener(t,e.handleOuterClick,!1)}),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach(function(t){document.removeEventListener(t,e.handleOuterClick,!1)}),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return n.default.createElement("div",{className:this.state.elemClass,ref:this.fipRef},n.default.createElement(i.default,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),n.default.createElement(l.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},n.default.createElement(c.default,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},n.default.createElement(u.default,e))))}}]),t}();Object.defineProperty(P,"propTypes",{configurable:!0,enumerable:!0,writable:!0,value:{icons:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.objectOf(a.default.oneOfType([a.default.arrayOf(a.default.number),a.default.arrayOf(a.default.string)]))]).isRequired,search:a.default.oneOfType([a.default.objectOf(a.default.arrayOf(a.default.string)),a.default.arrayOf(a.default.string)]),iconsPerPage:a.default.number,theme:a.default.string,onChange:a.default.func.isRequired,showCategory:a.default.bool,showSearch:a.default.bool,value:a.default.oneOfType([a.default.arrayOf(a.default.string),a.default.arrayOf(a.default.number),a.default.number,a.default.string]),isMulti:a.default.bool,renderUsing:a.default.string,convertHex:a.default.bool,renderFunc:a.default.func,appendTo:a.default.oneOfType([a.default.bool,a.default.string]),allCatPlaceholder:a.default.string,searchPlaceholder:a.default.string,noIconPlaceholder:a.default.string,noSelectedPlaceholder:a.default.string,closeOnSelect:a.default.bool}}),Object.defineProperty(P,"defaultProps",{configurable:!0,enumerable:!0,writable:!0,value:{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}}),Object.defineProperty(P,"displayName",{configurable:!0,enumerable:!0,writable:!0,value:"FontIconPicker"});var O=P;t.default=O},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=((n=r(14))&&n.__esModule?n:{default:n}).default;t.default=a}]).default});
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/esm/addClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/addClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return addClass; });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!Object(_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return hasClass; });
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/removeClass.js":
/*!*****************************************************!*\
  !*** ./node_modules/dom-helpers/esm/removeClass.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return removeClass; });
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return Object(dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_5__["default"])(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _ = _this$props.classNames,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_Transition__WEBPACK_IMPORTED_MODULE_7__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_7__["default"].propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_8__["classNamesShape"],

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
}) : undefined;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;
    var child = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_5__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

ReplaceTransition.propTypes =  true ? {
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/*! exports provided: modes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modes", function() { return modes; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default.a.isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */


var modes = {
  out: 'out-in',
  in: 'in-out'
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] && (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders = (_leaveRenders = {}, _leaveRenders[modes.out] = function (_ref) {
  var current = _ref.current,
      changeState = _ref.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"], null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"], react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(children, {
    in: true
  })];
}, _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"],
      current: null
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {
    if (props.children == null) {
      return {
        current: null
      };
    }

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"] && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default.a.cloneElement(props.children, {
        in: true
      })
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        mode = _this$props.mode,
        _this$state = this.state,
        status = _this$state.status,
        current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status
    };
    var component;

    switch (status) {
      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERING"]:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["EXITING"]:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_3__["ENTERED"]:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired])
} : undefined;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/*! exports provided: UNMOUNTED, EXITED, ENTERING, ENTERED, EXITING, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNMOUNTED", function() { return UNMOUNTED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITED", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERING", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ENTERED", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXITING", function() { return EXITING; });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_5__["default"].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_3___default.a.cloneElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_7__["default"];
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    current: typeof Element === 'undefined' ? prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any : prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.instanceOf(Element)
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_6__["timeoutsShape"];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
} : undefined; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["default"] = (Transition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroup.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroup.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


    _this.state = {
      contextValue: {
        isMounting: true
      },
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false
      }
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getInitialChildMapping"])(nextProps, handleExited) : Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getNextChildMapping"])(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = Object(_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_7__["getChildMapping"])(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(Component, props, children));
  };

  return TransitionGroup;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func
} : undefined;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  disabled: false
});

/***/ }),

/***/ "./node_modules/react-transition-group/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CSSTransition, ReplaceTransition, SwitchTransition, TransitionGroup, Transition, config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CSSTransition", function() { return _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplaceTransition", function() { return _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SwitchTransition", function() { return _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransitionGroup", function() { return _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Transition", function() { return _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "config", function() { return _config__WEBPACK_IMPORTED_MODULE_5__["default"]; });








/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/*! exports provided: getChildMapping, mergeChildMappings, getInitialChildMapping, getNextChildMapping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildMapping", function() { return getChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeChildMappings", function() { return mergeChildMappings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInitialChildMapping", function() { return getInitialChildMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextChildMapping", function() { return getNextChildMapping; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__["Children"].map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        in: false
      });
    } else if (hasNext && hasPrev && Object(react__WEBPACK_IMPORTED_MODULE_0__["isValidElement"])(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = Object(react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"])(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/PropTypes.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/PropTypes.js ***!
  \********************************************************************/
/*! exports provided: timeoutsShape, classNamesShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeoutsShape", function() { return timeoutsShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classNamesShape", function() { return classNamesShape; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number,
  appear: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number
}).isRequired]) : undefined;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  active: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.shape({
  enter: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  enterActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exit: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitDone: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  exitActive: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string
})]) : undefined;

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






var attributes = _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    default: "desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    default: "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // isOverly is to check if a overly on the block's background should exist ⬇
  isOverly: {
    type: "boolean",
    default: false
  },
  // this attribute is for selecting the desired design preset from the layout design presets options ⬇
  layoutPreset: {
    type: "string",
    default: "preset1"
  },
  // media attribute is for checking which of these (image / icon / number) is chosen for head top media ⬇
  media: {
    type: "string",
    default: "icon"
  },
  //
  numIconColor: {
    type: "string"
  },
  // should icon number background
  useNumIconBg: {
    type: "boolean",
    default: true
  },
  //
  numIconBgType: {
    type: "string",
    default: "fill"
  },
  //
  numIconBgColor: {
    type: "string",
    default: "#0003"
  },
  //
  numIconBgGradient: {
    type: "string",
    default: "linear-gradient(45deg,#c277f2,#7967ff)"
  },
  //
  imageUrl: {
    source: "attribute",
    selector: ".eb-infobox-image",
    attribute: "src" // default: "https://source.unsplash.com/user/cristofer",

  },
  //
  imageId: {
    type: "string"
  },
  //
  mediaImgWidthUnit: {
    type: "string",
    default: "px"
  },
  mediaImgWidth: {
    type: "number",
    default: 300
  },
  TABmediaImgWidth: {
    type: "number"
  },
  MOBmediaImgWidth: {
    type: "number"
  },
  //
  isMediaImgHeightAuto: {
    type: "boolean",
    default: true
  },
  mediaImgHeightUnit: {
    type: "string",
    default: "px"
  },
  mediaImgHeight: {
    type: "number"
  },
  TABmediaImgHeight: {
    type: "number"
  },
  MOBmediaImgHeight: {
    type: "number"
  },
  //
  selectedIcon: {
    type: "string",
    source: "attribute",
    selector: ".eb-infobox-icon-data-selector",
    attribute: "data-icon",
    default: "far fa-gem"
  },
  //
  number: {
    type: "number"
  },
  // this attribute is for checking whether subtitle should be shown or not ⬇
  enableSubTitle: {
    type: "boolean",
    default: false
  },
  //  this attribute is for checking whether content should be shown or not ⬇
  enableDescription: {
    type: "boolean",
    default: true
  },
  // this attribute is for checking whether a button should be shown or not ⬇
  enableButton: {
    type: "boolean",
    default: false
  },
  //
  buttonText: {
    type: "string",
    default: "Learn More"
  },
  //
  buttonTextColor: {
    type: "string"
  },
  //
  buttonBgColor: {
    type: "string"
  },
  //
  infoboxLink: {
    type: "string"
  },
  //
  title: {
    type: "text",
    selector: ".title",
    default: "This is an info box"
  },
  //
  titleColor: {
    type: "string"
  },
  //
  subTitle: {
    type: "text",
    selector: ".subtitle",
    default: "This is a Sub title"
  },
  //
  subTitleColor: {
    type: "string"
  },
  //
  description: {
    type: "text",
    selector: ".description",
    default: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  },
  //
  descriptionColor: {
    type: "string"
  },
  //
  iconSize: {
    type: "number",
    default: 50
  },
  TABiconSize: {
    type: "number"
  },
  MOBiconSize: {
    type: "number"
  },
  // .infobox-wrapper-inner flex-direction
  flexDirection: {
    type: "string"
  },
  // .icon-img-wrapper align-self property
  mediaAlignSelf: {
    type: "string"
  },
  // .contents-wrapper text-alignment
  contentAlignment: {
    type: "string"
  },
  // .icon-img-wrapper margin
  mediaWrapperMargin: {
    type: "number",
    default: 20
  },
  //
  titleTag: {
    type: "string",
    default: "h2"
  },
  subTitleTag: {
    type: "string",
    default: "h3"
  },
  //
  mediaAlignment: {
    type: "string"
  },
  //
  contentsAlignment: {
    type: "string"
  },
  // border attributes ⬇
  wrp_borderColor: {
    type: "string"
  },
  wrp_borderStyle: {
    type: "string",
    default: "solid"
  },
  // shadow attributes  ⬇
  wrp_hOffset: {
    type: "number"
  },
  wrp_vOffset: {
    type: "number"
  },
  wrp_blur: {
    type: "number"
  },
  wrp_spread: {
    type: "number"
  },
  wrp_shadowColor: {
    type: "string"
  },
  wrp_inset: {
    type: "boolean",
    default: false
  },
  wrp_shadowType: {
    type: "string",
    default: "normal"
  },
  wrp_hoverHOffset: {
    type: "number"
  },
  wrp_hoverVOffset: {
    type: "number"
  },
  wrp_hoverBlur: {
    type: "number"
  },
  wrp_hoverSpread: {
    type: "number"
  },
  wrp_hoverShadowColor: {
    type: "string"
  },
  wrp_hoverInset: {
    type: "boolean",
    default: false
  },
  wrp_transitionTime: {
    type: "string",
    default: "500"
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBackground"], {
  top: 20,
  bottom: 20,
  right: 20,
  left: 20
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBgRadius"], {
  top: 20,
  bottom: 20
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["mediaBgMargin"], {
  top: 15
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["buttonPadding"], {
  top: 15,
  bottom: 15,
  right: 30,
  left: 30
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["buttonRadius"], {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["titlePadding"], {
  top: 10,
  bottom: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["subTitlePadding"], {
  top: 10,
  bottom: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["contentPadding"], {
  top: 10,
  bottom: 30
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrapperMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrapperPadding"], {
  top: 40,
  bottom: 40,
  right: 30,
  left: 30
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrp_border"], {
  top: 0,
  bottom: 0,
  right: 0,
  left: 0
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_2__["wrp_radius"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBackgroundAttributes"])(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_3__["infoWrapBg"], {// isBgDefaultFill: true,
  // defaultFillColor: "#400",
}));

/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/infobox-container.js":
/*!*********************************************!*\
  !*** ./src/components/infobox-container.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoboxContainer; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function InfoboxContainer(_ref) {
  var requiredProps = _ref.requiredProps;
  var blockId = requiredProps.blockId,
      selectedIcon = requiredProps.selectedIcon,
      media = requiredProps.media,
      number = requiredProps.number,
      imageUrl = requiredProps.imageUrl,
      infoboxLink = requiredProps.infoboxLink,
      enableSubTitle = requiredProps.enableSubTitle,
      enableDescription = requiredProps.enableDescription,
      enableButton = requiredProps.enableButton,
      buttonText = requiredProps.buttonText,
      title = requiredProps.title,
      subTitle = requiredProps.subTitle,
      description = requiredProps.description,
      titleTag = requiredProps.titleTag,
      subTitleTag = requiredProps.subTitleTag,
      isOverly = requiredProps.isOverly;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(blockId, " eb-infobox-wrapper")
  }, isOverly ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "overly"
  }) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-icon number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-icon": selectedIcon,
    className: "eb-infobox-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "number" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-image-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "contents-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-btn-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: infoboxLink,
    className: "infobox-btn"
  }, buttonText)) : null)));
}

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/*! exports provided: infoWrapBg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoWrapBg", function() { return infoWrapBg; });
// each and every const here has to be totally unique from one another
var infoWrapBg = "wrp_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/*! exports provided: mediaBackground, mediaBgRadius, mediaBgMargin, buttonPadding, buttonRadius, titlePadding, subTitlePadding, contentPadding, wrapperMargin, wrapperPadding, wrp_border, wrp_radius */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBackground", function() { return mediaBackground; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBgRadius", function() { return mediaBgRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mediaBgMargin", function() { return mediaBgMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPadding", function() { return buttonPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonRadius", function() { return buttonRadius; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titlePadding", function() { return titlePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subTitlePadding", function() { return subTitlePadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentPadding", function() { return contentPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperMargin", function() { return wrapperMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperPadding", function() { return wrapperPadding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrp_border", function() { return wrp_border; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrp_radius", function() { return wrp_radius; });
// each and every const here has to be totally unique from one another
var mediaBackground = "mediaBgSize";
var mediaBgRadius = "mediaBgRadius";
var mediaBgMargin = "mediaBgMargin";
var buttonPadding = "buttonPadding";
var buttonRadius = "buttonRadius";
var titlePadding = "titlePadding";
var subTitlePadding = "subTitlePadding";
var contentPadding = "contentPadding";
var wrapperMargin = "wrapperMargin";
var wrapperPadding = "wrapperPadding";
var wrp_border = "WRPborder";
var wrp_radius = "WRPradius";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! exports provided: LAYOUT_TYPES, MEDIA_TYPES, CONTENTS_ALIGNMENTS, MEDIA_ALIGNMENTS_ON_FLEX_COLUMN, MEDIA_ALIGNMENTS_ON_FLEX_ROW, ICON_IMAGE_BG_TYPES, sizeUnitTypes, HEADER_TAGS, BACKGROUND_TYPES, BACKGROUND_SIZES, BORDER_STYLES, SHADOW_HOVER_OPTIONS, LETTER_SPACING_LINE_HEIGHT_UNITS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_TYPES", function() { return LAYOUT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_TYPES", function() { return MEDIA_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENTS_ALIGNMENTS", function() { return CONTENTS_ALIGNMENTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ALIGNMENTS_ON_FLEX_COLUMN", function() { return MEDIA_ALIGNMENTS_ON_FLEX_COLUMN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEDIA_ALIGNMENTS_ON_FLEX_ROW", function() { return MEDIA_ALIGNMENTS_ON_FLEX_ROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ICON_IMAGE_BG_TYPES", function() { return ICON_IMAGE_BG_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_TAGS", function() { return HEADER_TAGS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPES", function() { return BACKGROUND_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZES", function() { return BACKGROUND_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADOW_HOVER_OPTIONS", function() { return SHADOW_HOVER_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LETTER_SPACING_LINE_HEIGHT_UNITS", function() { return LETTER_SPACING_LINE_HEIGHT_UNITS; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var LAYOUT_TYPES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Preset 1"),
  value: "preset1"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Preset 2"),
  value: "preset2"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Preset 3"),
  value: "preset3"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Preset 4"),
  value: "preset4"
}];
var MEDIA_TYPES = ["image", "icon", "number", "none"];
var CONTENTS_ALIGNMENTS = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Left"),
  value: "left"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center"),
  value: "center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Right"),
  value: "right"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Left"),
  value: "flex-start"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center"),
  value: "center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Right"),
  value: "flex-end"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_ROW = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top"),
  value: "flex-start"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Middle"),
  value: "center"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom"),
  value: "flex-end"
}];
var ICON_IMAGE_BG_TYPES = [{
  label: "Fill",
  value: "fill"
}, {
  label: "Gradient",
  value: "gradient"
}];
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
var BACKGROUND_TYPES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fill"),
  value: "fill"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient"),
  value: "gradient"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image"),
  value: "image"
}];
var BACKGROUND_SIZES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Auto"),
  value: "auto"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Cover"),
  value: "cover"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Contain"),
  value: "contain"
}];
var BORDER_STYLES = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dashed"),
  value: "dashed"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Solid"),
  value: "solid"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dotted"),
  value: "dotted"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Double"),
  value: "double"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Groove"),
  value: "groove"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
  value: "inset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset"),
  value: "outset"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ridge"),
  value: "ridge"
}];
var SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
var LETTER_SPACING_LINE_HEIGHT_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: typoPrefix_number, typoPrefix_title, typoPrefix_subTitle, typoPrefix_content, typoPrefix_buttonText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_number", function() { return typoPrefix_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_subTitle", function() { return typoPrefix_subTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_content", function() { return typoPrefix_content; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_buttonText", function() { return typoPrefix_buttonText; });
// each and every const here has to be totally unique from one another
var typoPrefix_number = "number";
var typoPrefix_title = "title";
var typoPrefix_subTitle = "subTitle";
var typoPrefix_content = "content";
var typoPrefix_buttonText = "buttonText";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");


function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */







var Edit = function Edit(_ref) {
  var attributes = _ref.attributes,
      setAttributes = _ref.setAttributes,
      isSelected = _ref.isSelected,
      clientId = _ref.clientId;
  var resOption = attributes.resOption,
      blockMeta = attributes.blockMeta,
      blockId = attributes.blockId,
      isOverly = attributes.isOverly,
      selectedIcon = attributes.selectedIcon,
      media = attributes.media,
      _attributes$number = attributes.number,
      number = _attributes$number === void 0 ? 0 : _attributes$number,
      imageUrl = attributes.imageUrl,
      infoboxLink = attributes.infoboxLink,
      enableSubTitle = attributes.enableSubTitle,
      enableDescription = attributes.enableDescription,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      title = attributes.title,
      subTitle = attributes.subTitle,
      description = attributes.description,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag,
      imageId = attributes.imageId,
      iconSize = attributes.iconSize,
      TABiconSize = attributes.TABiconSize,
      MOBiconSize = attributes.MOBiconSize,
      flexDirection = attributes.flexDirection,
      mediaAlignSelf = attributes.mediaAlignSelf,
      contentAlignment = attributes.contentAlignment,
      mediaWrapperMargin = attributes.mediaWrapperMargin,
      useNumIconBg = attributes.useNumIconBg,
      numIconColor = attributes.numIconColor,
      numIconBgType = attributes.numIconBgType,
      numIconBgColor = attributes.numIconBgColor,
      numIconBgGradient = attributes.numIconBgGradient,
      mediaImgWidthUnit = attributes.mediaImgWidthUnit,
      mediaImgWidth = attributes.mediaImgWidth,
      TABmediaImgWidth = attributes.TABmediaImgWidth,
      MOBmediaImgWidth = attributes.MOBmediaImgWidth,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto,
      mediaImgHeightUnit = attributes.mediaImgHeightUnit,
      mediaImgHeight = attributes.mediaImgHeight,
      TABmediaImgHeight = attributes.TABmediaImgHeight,
      MOBmediaImgHeight = attributes.MOBmediaImgHeight,
      _attributes$buttonTex = attributes.buttonTextColor,
      buttonTextColor = _attributes$buttonTex === void 0 ? "#fff" : _attributes$buttonTex,
      _attributes$titleColo = attributes.titleColor,
      titleColor = _attributes$titleColo === void 0 ? "#fff" : _attributes$titleColo,
      _attributes$subTitleC = attributes.subTitleColor,
      subTitleColor = _attributes$subTitleC === void 0 ? "#fff" : _attributes$subTitleC,
      _attributes$descripti = attributes.descriptionColor,
      descriptionColor = _attributes$descripti === void 0 ? "#fff" : _attributes$descripti,
      _attributes$buttonBgC = attributes.buttonBgColor,
      buttonBgColor = _attributes$buttonBgC === void 0 ? "#7a137a" : _attributes$buttonBgC,
      mediaAlignment = attributes.mediaAlignment,
      contentsAlignment = attributes.contentsAlignment,
      wrp_borderColor = attributes.wrp_borderColor,
      wrp_borderStyle = attributes.wrp_borderStyle,
      wrp_shadowColor = attributes.wrp_shadowColor,
      _attributes$wrp_hOffs = attributes.wrp_hOffset,
      wrp_hOffset = _attributes$wrp_hOffs === void 0 ? 0 : _attributes$wrp_hOffs,
      _attributes$wrp_vOffs = attributes.wrp_vOffset,
      wrp_vOffset = _attributes$wrp_vOffs === void 0 ? 0 : _attributes$wrp_vOffs,
      _attributes$wrp_blur = attributes.wrp_blur,
      wrp_blur = _attributes$wrp_blur === void 0 ? 0 : _attributes$wrp_blur,
      _attributes$wrp_sprea = attributes.wrp_spread,
      wrp_spread = _attributes$wrp_sprea === void 0 ? 0 : _attributes$wrp_sprea,
      wrp_inset = attributes.wrp_inset,
      _attributes$wrp_hover = attributes.wrp_hoverShadowColor,
      wrp_hoverShadowColor = _attributes$wrp_hover === void 0 ? wrp_shadowColor : _attributes$wrp_hover,
      _attributes$wrp_hover2 = attributes.wrp_hoverHOffset,
      wrp_hoverHOffset = _attributes$wrp_hover2 === void 0 ? wrp_hOffset : _attributes$wrp_hover2,
      _attributes$wrp_hover3 = attributes.wrp_hoverVOffset,
      wrp_hoverVOffset = _attributes$wrp_hover3 === void 0 ? wrp_vOffset : _attributes$wrp_hover3,
      _attributes$wrp_hover4 = attributes.wrp_hoverBlur,
      wrp_hoverBlur = _attributes$wrp_hover4 === void 0 ? wrp_blur : _attributes$wrp_hover4,
      _attributes$wrp_hover5 = attributes.wrp_hoverSpread,
      wrp_hoverSpread = _attributes$wrp_hover5 === void 0 ? wrp_spread : _attributes$wrp_hover5,
      wrp_transitionTime = attributes.wrp_transitionTime,
      wrp_backgroundType = attributes.wrp_backgroundType,
      wrp_backgroundColor = attributes.wrp_backgroundColor,
      wrp_gradientColor = attributes.wrp_gradientColor,
      wrp_bgImageURL = attributes.wrp_bgImageURL,
      wrp_backgroundSize = attributes.wrp_backgroundSize,
      wrp_bgImgCustomSize = attributes.wrp_bgImgCustomSize,
      wrp_bgImgCustomSizeUnit = attributes.wrp_bgImgCustomSizeUnit,
      wrp_bgImgPos = attributes.wrp_bgImgPos,
      wrp_bgImgcustomPosX = attributes.wrp_bgImgcustomPosX,
      wrp_bgImgcustomPosXUnit = attributes.wrp_bgImgcustomPosXUnit,
      wrp_bgImgcustomPosY = attributes.wrp_bgImgcustomPosY,
      wrp_bgImgcustomPosYUnit = attributes.wrp_bgImgcustomPosYUnit,
      wrp_bgImgAttachment = attributes.wrp_bgImgAttachment,
      wrp_bgImgRepeat = attributes.wrp_bgImgRepeat; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var bodyClasses = document.body.className;

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // const current_block_id = attributes.blockId;
    var BLOCK_PREFIX = "eb-infobox";
    var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
    /**
     * Define and Generate Unique Block ID
     */

    if (!blockId) {
      setAttributes({
        blockId: unique_id
      });
    }
    /**
     * Assign New Unique ID when duplicate BlockId found
     * Mostly happens when User Duplicate a Block
     */


    var all_blocks = wp.data.select("core/block-editor").getBlocks(); // console.log({ all_blocks });

    var duplicateFound = false;

    var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
      if (duplicateFound) return;

      var _iterator = _createForOfIteratorHelper(blocks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var innerBlocks = item.innerBlocks;

          if (item.attributes.blockId === blockId) {
            if (item.clientId !== clientId) {
              setAttributes({
                blockId: unique_id
              }); // console.log("found a duplicate");

              duplicateFound = true;
              return;
            } else if (innerBlocks.length > 0) {
              fixDuplicateBlockId(innerBlocks);
            }
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    fixDuplicateBlockId(all_blocks); // console.log({ blockId });
  }, []);
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: "eb-guten-block-main-parent-wrapper"
  }); //
  // styling codes starts from here
  //

  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__["typoPrefix_title"],
    defaultFontSize: 26
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__["typoPrefix_subTitle"],
    defaultFontSize: 22
  }),
      subTitleTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      subTitleTypoStylesTab = _generateTypographySt2.typoStylesTab,
      subTitleTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__["typoPrefix_content"],
    defaultFontSize: 20
  }),
      contentTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      contentTypoStylesTab = _generateTypographySt3.typoStylesTab,
      contentTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  var _generateTypographySt4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__["typoPrefix_buttonText"],
    defaultFontSize: 20
  }),
      buttonTypoStylesDesktop = _generateTypographySt4.typoStylesDesktop,
      buttonTypoStylesTab = _generateTypographySt4.typoStylesTab,
      buttonTypoStylesMobile = _generateTypographySt4.typoStylesMobile;

  var _generateTypographySt5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__["typoPrefix_number"],
    defaultFontSize: 28
  }),
      numTypoStylesDesktop = _generateTypographySt5.typoStylesDesktop,
      numTypoStylesTab = _generateTypographySt5.typoStylesTab,
      numTypoStylesMobile = _generateTypographySt5.typoStylesMobile;

  var _generateDimensionsCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["mediaBackground"],
    styleFor: "padding"
  }),
      mediaBgPaddingDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      mediaBgPaddingTab = _generateDimensionsCo.dimensionStylesTab,
      mediaBgPaddingMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["mediaBgRadius"],
    styleFor: "border-radius"
  }),
      mediaRadiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      mediaRadiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      mediaRadiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["mediaBgMargin"],
    styleFor: "margin"
  }),
      mediaBgMarginStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      mediaBgMarginStylesTab = _generateDimensionsCo3.dimensionStylesTab,
      mediaBgMarginStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["buttonPadding"],
    styleFor: "padding"
  }),
      buttonPaddingStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      buttonPaddingStylesTab = _generateDimensionsCo4.dimensionStylesTab,
      buttonPaddingStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["buttonRadius"],
    styleFor: "border-radius"
  }),
      buttonRadiusStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      buttonRadiusStylesTab = _generateDimensionsCo5.dimensionStylesTab,
      buttonRadiusStylesMobile = _generateDimensionsCo5.dimensionStylesMobile;

  var _generateDimensionsCo6 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["titlePadding"],
    styleFor: "padding"
  }),
      titlePaddingStylesDesktop = _generateDimensionsCo6.dimensionStylesDesktop,
      titlePaddingStylesTab = _generateDimensionsCo6.dimensionStylesTab,
      titlePaddingStylesMobile = _generateDimensionsCo6.dimensionStylesMobile;

  var _generateDimensionsCo7 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["subTitlePadding"],
    styleFor: "padding"
  }),
      subTitlePaddingStylesDesktop = _generateDimensionsCo7.dimensionStylesDesktop,
      subTitlePaddingStylesTab = _generateDimensionsCo7.dimensionStylesTab,
      subTitlePaddingStylesMobile = _generateDimensionsCo7.dimensionStylesMobile;

  var _generateDimensionsCo8 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["contentPadding"],
    styleFor: "padding"
  }),
      contentPaddingStylesDesktop = _generateDimensionsCo8.dimensionStylesDesktop,
      contentPaddingStylesTab = _generateDimensionsCo8.dimensionStylesTab,
      contentPaddingStylesMobile = _generateDimensionsCo8.dimensionStylesMobile;

  var _generateDimensionsCo9 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["wrapperPadding"],
    styleFor: "padding"
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo9.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo9.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo9.dimensionStylesMobile;

  var _generateDimensionsCo10 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["wrapperMargin"],
    styleFor: "margin"
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo10.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo10.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo10.dimensionStylesMobile;

  var _generateDimensionsCo11 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["wrp_border"],
    styleFor: "border"
  }),
      wrp_borderStylesDesktop = _generateDimensionsCo11.dimensionStylesDesktop,
      wrp_borderStylesTab = _generateDimensionsCo11.dimensionStylesTab,
      wrp_borderStylesMobile = _generateDimensionsCo11.dimensionStylesMobile;

  var _generateDimensionsCo12 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__["wrp_radius"],
    styleFor: "border-radius"
  }),
      wrp_radiusStylesDesktop = _generateDimensionsCo12.dimensionStylesDesktop,
      wrp_radiusStylesTab = _generateDimensionsCo12.dimensionStylesTab,
      wrp_radiusStylesMobile = _generateDimensionsCo12.dimensionStylesMobile;

  var _generateBackgroundCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__["infoWrapBg"]
  }),
      backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      isBgOverly = _generateBackgroundCo.isBgOverly,
      overlyType = _generateBackgroundCo.overlyType,
      overlyColor = _generateBackgroundCo.overlyColor,
      overlyGradient = _generateBackgroundCo.overlyGradient,
      backgroundType = _generateBackgroundCo.backgroundType;

  var wrapperStylesDesktop = "\n\t\t.".concat(blockId, " {\n\t\t\tposition: relative;\n\t\t\toverflow: hidden;\n\t\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t\t").concat(wrapperPaddingStylesDesktop, "\n\n\t\t\t").concat(backgroundStylesDesktop, "\n\t\t\t").concat(isBgOverly ? "z-index: 1;" : " ", "\t\t\t\n\n\t\t\t").concat(wrp_borderStyle !== "none" && wrp_borderColor ? "\n\t\t\t\t\t".concat(wrp_borderStylesDesktop, "\n\t\t\t\t\tborder-color: ").concat(wrp_borderColor, ";\n\t\t\t\t\tborder-style: ").concat(wrp_borderStyle, ";\n\t\t\t\t\t") : " ", "\n\t\t\t").concat(wrp_radiusStylesDesktop, "\n\n\t\t\t").concat(wrp_shadowColor ? "box-shadow: ".concat(wrp_shadowColor, " ").concat(wrp_hOffset, "px ").concat(wrp_vOffset, "px ").concat(wrp_blur, "px ").concat(wrp_spread, "px ").concat(wrp_inset ? "inset" : "", ";") : " ", "\n\n\t\t\ttransition: ").concat(wrp_transitionTime ? "".concat(wrp_transitionTime / 1000, "s") : ".5s", ";\n\t\t}\n\n\t\t.").concat(blockId, ":hover{\t\t\n\t\t\t").concat(wrp_hoverShadowColor ? "box-shadow: ".concat(wrp_hoverShadowColor, " ").concat(wrp_hoverHOffset, "px ").concat(wrp_hoverVOffset, "px ").concat(wrp_hoverBlur, "px ").concat(wrp_hoverSpread, "px ").concat(wrp_inset ? "inset" : " ", ";") : " ", "\n\t\t}\n\n\t\t").concat(backgroundType === "image" && isBgOverly ? "\n\t\t\t\t.".concat(blockId, ":before{\n\t\t\t\t\tcontent: \"\";\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tbottom: 0;\n\t\t\t\t\tright: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tz-index: -1;\n\n\t\t\t\t\t").concat(overlyType === "fill" ? "background-color: ".concat(overlyColor, ";") : overlyType === "gradient" ? "background-image: ".concat(overlyGradient, ";") : " ", "\n\n\t\t\t\t}\n\t\t\t") : " ", "\n\t\t\n\n\t");
  var wrapperStylesTab = "\n\t\t.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesTab, "\n\t\t\t").concat(wrapperPaddingStylesTab, "\n\n\t\t\t").concat(backgroundStylesTab, "\n\n\t\t\t").concat(wrp_borderColor ? wrp_borderStylesTab : " ", "\n\t\t\t").concat(wrp_radiusStylesTab, "\n\n\n\t\t\t").concat(backgroundType === "image" ? "background-attachment: scroll;" : " ", "\n\t\t}\n\n\t");
  var wrapperStylesMobile = "\n\t\t.".concat(blockId, " {\n\t\t\t").concat(wrapperMarginStylesMobile, "\n\t\t\t").concat(wrapperPaddingStylesMobile, "\t\t\t\n\n\t\t\t").concat(backgroundStylesMobile, "\n\n\t\t\t").concat(wrp_borderColor ? wrp_borderStylesMobile : " ", "\n\t\t\t").concat(wrp_radiusStylesMobile, "\n\t\t}\n\n\t");
  var wrapperInnerStylesDesktop = "\t\n\t\t.".concat(blockId, " .infobox-wrapper-inner {\n\t\t\tdisplay: flex;\n\t\t\t").concat(flexDirection ? "flex-direction: ".concat(flexDirection, ";") : " ", " \n\t\t\t\n\t\t}\n\t\n\t");
  var mediaStylesDesktop = "\n\t".concat(media !== "none" ? " \n\t\t\t\n\t\t\t.".concat(blockId, " .icon-img-wrapper {\n\n\t\t\t\t").concat(mediaAlignment ? "align-self: ".concat(mediaAlignment, ";") : "align-self: ".concat(mediaAlignSelf || "center", ";"), "\n\n\t\t\t\t").concat(mediaBgMarginStylesDesktop, "\n\n\t\t\t\t").concat(flexDirection === "row" ? "margin-right: ".concat(mediaWrapperMargin, "px;") : flexDirection === "row-reverse" ? "margin-left: ".concat(mediaWrapperMargin, "px;") : flexDirection === "column" ? "margin-bottom: ".concat(mediaWrapperMargin, "px;") : flexDirection === "column-reverse" ? "margin-top: ".concat(mediaWrapperMargin, "px;") : " ", "\n\n\t\t\t\toverflow: hidden;\n\t\t\t}\n\n\n\t\t\t").concat(media === "image" ? "\n\n\t\t\t\t\t\n\t\t\t\t.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\t").concat(mediaImgWidthUnit === "%" && mediaImgWidth ? "width: ".concat(mediaImgWidth).concat(mediaImgWidthUnit, ";") : " ", "\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\tmax-width: 100%;\n\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\tdisplay: inline-block;\n\t\t\t\t\t").concat(imageUrl ? mediaRadiusStylesDesktop : " ", "\n\t\t\t\t\t\n\t\t\t\t\t").concat(mediaImgWidthUnit !== "%" ? mediaImgWidth ? "width: ".concat(mediaImgWidth).concat(mediaImgWidthUnit, ";") : " " : mediaImgWidth ? "width: 100".concat(mediaImgWidthUnit, ";") : " ", "\n\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : mediaImgHeight ? "height: ".concat(mediaImgHeight).concat(mediaImgHeightUnit, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\n\t\t\t\t.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\t").concat(imageUrl ? " " : mediaRadiusStylesDesktop, "\n\n\t\t\t\t}\n\t\t\t\t\n\n\t\t\t\t") : " ", "\n\n\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\n\t\t\t\t\t\t").concat(mediaBgPaddingDesktop, "\n\t\t\t\t\t\t").concat(mediaRadiusStylesDesktop, "\n\t\t\n\t\t\t\t\t\t").concat(useNumIconBg ? "".concat(numIconBgType === "fill" ? "background-color: ".concat(numIconBgColor, ";") : numIconBgType === "gradient" ? "background-image: ".concat(numIconBgGradient, ";") : " ") : " ", "\t\t\t\t\t\t\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\t\t\n\t\t\t\t\t.").concat(blockId, " .number-or-icon > span{\n\t\t\t\t\t\tcolor: ").concat(numIconColor || "#fff", ";\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\t\t\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t").concat(numTypoStylesDesktop, "\n\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\tfont-size: ").concat(iconSize, "px;\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\n\t\t\t\t\t") : " ", "\n\n\n\t\t") : " ", "\n\n\t");
  var mediaStylesTab = "\n\t".concat(media !== "none" ? "\n\n\t\t\t.".concat(blockId, " .icon-img-wrapper {\n\n\t\t\t\t").concat(mediaBgMarginStylesTab, "\t\t\t\t\n\t\t\t}\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\t\t\t\n\t\t\t\t\t.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\t\t\t\t\t\t").concat(mediaBgPaddingTab, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t\t.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t\t").concat(numTypoStylesTab, "\n\t\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\tfont-size: ").concat(TABiconSize, "px;\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\t\t\t\t\t\t\n\t\t\t\t.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\t").concat(mediaImgWidthUnit === "%" && TABmediaImgWidth ? "width: ".concat(TABmediaImgWidth).concat(mediaImgWidthUnit, ";") : " ", "\n\t\t\t\t}\n\n\t\t\t\t.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(mediaImgWidthUnit !== "%" ? TABmediaImgWidth ? "width: ".concat(TABmediaImgWidth).concat(mediaImgWidthUnit, ";") : " " : TABmediaImgWidth ? "width: 100".concat(mediaImgWidthUnit, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : TABmediaImgHeight ? "height: ".concat(TABmediaImgHeight).concat(mediaImgHeightUnit, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\n\n\t\t") : " ", "\n\t\n\t");
  var mediaStylesMobile = "\n\t".concat(media !== "none" ? "\n\n\t\t\t.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\t\n\t\t\t\t").concat(mediaBgMarginStylesMobile, "\n\t\t\t}\n\n\n\n\t\t\t").concat(media === "number" || media === "icon" ? "\n\n\t\t\t\t\t.".concat(blockId, " .number-or-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\t\t\t\t\t\t").concat(mediaBgPaddingMobile, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t") : " ", "\n\n\n\n\n\n\t\t\t").concat(media === "number" ? "\n\n\t\t\t\t.".concat(blockId, " span.eb-infobox-number{\n\t\t\t\t\t").concat(numTypoStylesMobile, "\n\t\t\t\t}\t\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\n\t\t\t").concat(media === "icon" ? "\n\n\t\t\t\t\t.".concat(blockId, " .icon-img-wrapper .eb-infobox-icon-data-selector {\n\t\t\t\t\t\tfont-size: ").concat(MOBiconSize, "px;\n\t\t\t\t\t}\t\t\t\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\n\t\t\t\t\t\t\t\t\n\t\t\t\t.".concat(blockId, " .infobox-wrapper-inner .icon-img-wrapper{\n\t\t\t\t\t").concat(mediaImgWidthUnit === "%" && MOBmediaImgWidth ? "width: ".concat(MOBmediaImgWidth).concat(mediaImgWidthUnit, ";") : " ", "\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.").concat(blockId, " .infobox-wrapper-inner img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(mediaImgWidthUnit !== "%" ? MOBmediaImgWidth ? "width: ".concat(MOBmediaImgWidth).concat(mediaImgWidthUnit, ";") : " " : MOBmediaImgWidth ? "width: 100".concat(mediaImgWidthUnit, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : MOBmediaImgHeight ? "height: ".concat(MOBmediaImgHeight).concat(mediaImgHeightUnit, ";") : " ", "\n\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.").concat(blockId, " .eb-infobox-image-wrapper{\n\t\t\t\t\t\n\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\n\t\t") : " ", "\n\t\t\n\t\n\t");
  var contentStylesDesktop = "\n\t\t.".concat(blockId, " .contents-wrapper {\n\t\t\tflex: 1;\n\t\t\t").concat(contentAlignment ? "text-align: ".concat(contentAlignment, ";") : " ", " \n\n\t\t\t").concat(contentsAlignment ? "text-align: ".concat(contentsAlignment, ";") : "text-align: ".concat(contentAlignment, ";"), "\n\t\t}\n\n\t\t.").concat(blockId, " .title {\n\t\t\tmargin: 0;\n\t\t\tpadding: 10px 0;\n\t\t\t").concat(titleTypoStylesDesktop, "\n\t\t\t").concat(titlePaddingStylesDesktop, "\n\t\t\t").concat(titleColor ? "color: ".concat(titleColor, ";") : " ", "\n\t\t}\n\n\t\t").concat(enableSubTitle ? "\t\t\t\n\t\t\t\t.".concat(blockId, " .subtitle {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\t").concat(subTitleTypoStylesDesktop, "\n\t\t\t\t\t").concat(subTitlePaddingStylesDesktop, "\n\t\t\t\t\t").concat(subTitleColor ? "color: ".concat(subTitleColor, ";") : " ", "\n\t\t\t\t}\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableDescription ? "\n\t\t\t\n\t\t\t\t.".concat(blockId, " .description {\n\t\t\t\t\tmargin: 0;\n\t\t\t\t\tpadding: 10px 0;\n\t\t\t\t\t").concat(contentTypoStylesDesktop, "\n\t\t\t\t\t").concat(contentPaddingStylesDesktop, "\n\t\t\t\t\t").concat(descriptionColor ? "color: ".concat(descriptionColor, ";") : " ", "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\n\t\t\t\t.".concat(blockId, " a{\n\t\t\t\t\ttext-decoration:none;\n\t\t\t\t}\n\n\t\t\t\t.").concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesDesktop, "\n\t\t\t\t\t").concat(buttonPaddingStylesDesktop, "\n\t\t\t\t\t").concat(buttonRadiusStylesDesktop, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(buttonBgColor ? "background-color: ".concat(buttonBgColor, ";") : " ", "\n\t\t\t\t\t").concat(buttonTextColor ? "color: ".concat(buttonTextColor, ";") : " ", "\n\t\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\n\t");
  var contentStylesTab = "\n\t\t.".concat(blockId, " .title {\n\t\t\t").concat(titleTypoStylesTab, "\n\t\t\t").concat(titlePaddingStylesTab, "\n\n\t\t}\n\t\t\n\t\t").concat(enableSubTitle ? "\t\t\t\n\t\t\t\t.".concat(blockId, " .subtitle {\n\t\t\t\t\t").concat(subTitleTypoStylesTab, "\n\t\t\t\t\t").concat(subTitlePaddingStylesTab, "\n\t\t\n\t\t\t\t}\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t").concat(enableDescription ? "\n\t\t\t\t.".concat(blockId, " .description {\n\t\t\t\t\t").concat(contentTypoStylesTab, "\n\t\t\t\t\t").concat(contentPaddingStylesTab, "\n\t\t\n\t\t\t\t}\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\t.".concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesTab, "\n\t\t\t\t\t").concat(buttonPaddingStylesTab, "\n\t\t\t\t\t").concat(buttonRadiusStylesTab, "\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\n\t");
  var contentStylesMobile = "\n\t\t.".concat(blockId, " .title {\n\t\t\t").concat(titleTypoStylesMobile, "\n\t\t\t").concat(titlePaddingStylesMobile, "\n\n\t\t}\n\t\t\n\t\t").concat(enableSubTitle ? "\n\t\t\t\t.".concat(blockId, " .subtitle {\n\t\t\t\t\t").concat(subTitleTypoStylesMobile, "\n\t\t\t\t\t").concat(subTitlePaddingStylesMobile, "\n\t\t\n\t\t\t\t}\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t").concat(enableDescription ? "\n\t\t\t\t.".concat(blockId, " .description {\n\t\t\t\t\t").concat(contentTypoStylesMobile, "\n\t\t\t\t\t").concat(contentPaddingStylesMobile, "\n\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t").concat(enableButton ? "\n\t\t\t\n\t\t\t\t.".concat(blockId, " .contents-wrapper .infobox-btn{\n\t\t\t\t\t").concat(buttonTypoStylesMobile, "\n\t\t\t\t\t").concat(buttonPaddingStylesMobile, "\n\t\t\t\t\t").concat(buttonRadiusStylesMobile, "\n\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t\n\t\t\n\n\t"); // all css styles for large screen width (desktop/laptop) in strings ⬇

  var desktopAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\t\t\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesDesktop) ? wrapperStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperInnerStylesDesktop) ? wrapperInnerStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(mediaStylesDesktop) ? mediaStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(contentStylesDesktop) ? contentStylesDesktop : " ", "\n\t\t\n\t")); // all css styles for Tab in strings ⬇

  var tabAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesTab) ? wrapperStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(mediaStylesTab) ? mediaStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(contentStylesTab) ? contentStylesTab : " ", "\n\t\t\n\t\t\n\t")); // all css styles for Mobile in strings ⬇

  var mobileAllStyles = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])("\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(wrapperStylesMobile) ? wrapperStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(mediaStylesMobile) ? mediaStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["isCssExists"])(contentStylesMobile) ? contentStylesMobile : " ", "\n\t\n\t")); // Set All Style in "blockMeta" Attribute

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]); // console.log("--edit theke", { attributes });

  return [isSelected && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), // Edit view
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "tab" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "".concat(blockId, " eb-infobox-wrapper")
  }, isOverly ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "overly"
  }) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-icon number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    "data-icon": selectedIcon,
    className: "eb-infobox-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "number" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "icon-img-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-image-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: function onSelect(_ref2) {
      var id = _ref2.id,
          url = _ref2.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref3) {
      var open = _ref3.open;

      if (!imageUrl) {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          className: "eb-infobox-img-btn components-button",
          label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Upload Image"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
          className: "eb-infobox-image",
          src: imageUrl
        });
      }
    }
  }))) : null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "contents-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: titleTag,
    className: "title",
    value: title,
    onChange: function onChange(title) {
      return setAttributes({
        title: title
      });
    }
  }), enableSubTitle ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle,
    onChange: function onChange(subTitle) {
      return setAttributes({
        subTitle: subTitle
      });
    }
  }) : null, enableDescription ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
    tagName: "p",
    className: "description",
    value: description,
    onChange: function onChange(description) {
      return setAttributes({
        description: description
      });
    }
  }) : null, enableButton ? Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-infobox-btn-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: infoboxLink // style={{ pointerEvents: "none" }}
    ,
    className: "infobox-btn"
  }, buttonText)) : null))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-info-box",
    viewBox: "0 0 64 64"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_1__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "19.203",
    x2: "32",
    y2: "45.242",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "43,19 21,19 21,25 29,25 29,45 35,45 35,25 43,25",
    fill: "url(#SVGID_1__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_2__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "9.359",
    x2: "32",
    y2: "55.428",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M54,9H10c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h44c2.757,0,5-2.243,5-5V14 C59,11.243,56.757,9,54,9z M57,50c0,1.654-1.346,3-3,3H10c-1.654,0-3-1.346-3-3V14c0-1.654,1.346-3,3-3h44c1.654,0,3,1.346,3,3V50z",
    fill: "url(#SVGID_2__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_3__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "26.939",
    x2: "58",
    y2: "61.543",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M58,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S60.206,28,58,28z",
    fill: "url(#SVGID_3__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_4__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "30.125",
    x2: "58",
    y2: "33.875",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "58",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_4__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_5__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "26.939",
    x2: "6",
    y2: "61.543",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M6,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S8.206,28,6,28z",
    fill: "url(#SVGID_5__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_6__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "30.125",
    x2: "6",
    y2: "33.875",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
    cx: "6",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_6__56360)"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("linearGradient", {
    id: "SVGID_7__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "21.172",
    x2: "32",
    y2: "43.205",
    spreadMethod: "reflect"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("polygon", {
    points: "41,21 23,21 23,23 31,23 31,43 33,43 33,23 41,23",
    fill: "url(#SVGID_7__56360)"
  }));
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("infobox/infobox", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox", "block"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Deliver your content beautifully to grab attention with an animated Infobox block.", "block"),
  category: "widgets",
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("EB infobox", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("infobox", "essential-blocks"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("infobox block", "essential-blocks")],
  icon: _icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _util_faIcons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/faIcons.js */ "./util/faIcons.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/typography-control-v2/Icon */ "./util/typography-control-v2/Icon.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_image_avatar___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/image-avatar/ */ "./util/image-avatar/index.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_reset_control__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../util/reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _util_withResButtons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../util/withResButtons */ "./util/withResButtons/index.js");
/* harmony import */ var _util_withResBtns__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../util/withResBtns */ "./util/withResBtns/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */



















function Inspector(props) {
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
      layoutPreset = attributes.layoutPreset,
      media = attributes.media,
      enableSubTitle = attributes.enableSubTitle,
      number = attributes.number,
      imageUrl = attributes.imageUrl,
      selectedIcon = attributes.selectedIcon,
      iconSize = attributes.iconSize,
      TABiconSize = attributes.TABiconSize,
      MOBiconSize = attributes.MOBiconSize,
      flexDirection = attributes.flexDirection,
      mediaWrapperMargin = attributes.mediaWrapperMargin,
      enableDescription = attributes.enableDescription,
      useNumIconBg = attributes.useNumIconBg,
      numIconColor = attributes.numIconColor,
      numIconBgType = attributes.numIconBgType,
      numIconBgColor = attributes.numIconBgColor,
      numIconBgGradient = attributes.numIconBgGradient,
      imageId = attributes.imageId,
      mediaImgWidthUnit = attributes.mediaImgWidthUnit,
      mediaImgWidth = attributes.mediaImgWidth,
      TABmediaImgWidth = attributes.TABmediaImgWidth,
      MOBmediaImgWidth = attributes.MOBmediaImgWidth,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto,
      mediaImgHeightUnit = attributes.mediaImgHeightUnit,
      mediaImgHeight = attributes.mediaImgHeight,
      TABmediaImgHeight = attributes.TABmediaImgHeight,
      MOBmediaImgHeight = attributes.MOBmediaImgHeight,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      infoboxLink = attributes.infoboxLink,
      buttonTextColor = attributes.buttonTextColor,
      titleColor = attributes.titleColor,
      subTitleColor = attributes.subTitleColor,
      descriptionColor = attributes.descriptionColor,
      buttonBgColor = attributes.buttonBgColor,
      mediaAlignment = attributes.mediaAlignment,
      contentsAlignment = attributes.contentsAlignment,
      wrp_borderColor = attributes.wrp_borderColor,
      wrp_borderStyle = attributes.wrp_borderStyle,
      wrp_hOffset = attributes.wrp_hOffset,
      wrp_vOffset = attributes.wrp_vOffset,
      wrp_blur = attributes.wrp_blur,
      wrp_spread = attributes.wrp_spread,
      wrp_shadowColor = attributes.wrp_shadowColor,
      wrp_inset = attributes.wrp_inset,
      wrp_shadowType = attributes.wrp_shadowType,
      wrp_hoverHOffset = attributes.wrp_hoverHOffset,
      wrp_hoverVOffset = attributes.wrp_hoverVOffset,
      wrp_hoverBlur = attributes.wrp_hoverBlur,
      wrp_hoverSpread = attributes.wrp_hoverSpread,
      wrp_hoverShadowColor = attributes.wrp_hoverShadowColor,
      wrp_transitionTime = attributes.wrp_transitionTime; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var bodyClasses = document.body.className; // console.log("----log from inspector useEffect with empty []", {
    // 	bodyClasses,
    // });

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var allEbBlocksWrapper = document.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"); // console.log("---inspector", { allEbBlocksWrapper });

    if (allEbBlocksWrapper.length < 1) return;
    allEbBlocksWrapper.forEach(function (styleTag) {
      var cssStrings = styleTag.textContent;
      var minCss = cssStrings.replace(/\s+/g, " ");
      var regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
      var newCssStrings = " ";

      if (resOption === "tab") {
        var tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
      } else if (resOption === "mobile") {
        var _tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0];
        var mobCssStrings = (minCss.match(/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings, mobCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, "".concat(_tabCssStrings, " ").concat(mobCssStrings));
      } else {
        newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
      }

      styleTag.textContent = newCssStrings;
    });
  }, [resOption]);
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes
  };
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    switch (layoutPreset) {
      case "preset1":
        setAttributes({
          flexDirection: "column",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset2":
        setAttributes({
          flexDirection: "column-reverse",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset3":
        setAttributes({
          flexDirection: "row",
          contentAlignment: "left",
          mediaAlignSelf: "flex-start"
        });
        break;

      case "preset4":
        setAttributes({
          flexDirection: "row-reverse",
          contentAlignment: "right",
          mediaAlignSelf: "flex-start"
        });
        break;
    }
  }, [layoutPreset]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], {
    key: "controls"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "eb-panel-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox Settings"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Layout Preset "),
    value: layoutPreset,
    options: _constants__WEBPACK_IMPORTED_MODULE_20__["LAYOUT_TYPES"],
    onChange: function onChange(layoutPreset) {
      return setAttributes({
        layoutPreset: layoutPreset
      });
    }
  }), media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Media & content spacing")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    value: mediaWrapperMargin,
    onChange: function onChange(mediaWrapperMargin) {
      return setAttributes({
        mediaWrapperMargin: mediaWrapperMargin
      });
    },
    min: 0,
    max: 200
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Alignments"),
    initialOpen: false
  }, media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, (flexDirection === "row" || flexDirection === "row-reverse") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["MEDIA_ALIGNMENTS_ON_FLEX_ROW"].map(function (_ref) {
    var value = _ref.value,
        label = _ref.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isSecondary: mediaAlignment !== value,
      isPrimary: mediaAlignment === value,
      onClick: function onClick() {
        return setAttributes({
          mediaAlignment: value
        });
      }
    }, label);
  }))), (flexDirection === "column" || flexDirection === "column-reverse") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["MEDIA_ALIGNMENTS_ON_FLEX_COLUMN"].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isSecondary: mediaAlignment !== value,
      isPrimary: mediaAlignment === value,
      onClick: function onClick() {
        return setAttributes({
          mediaAlignment: value
        });
      }
    }, label);
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-alignments",
    label: "Contents alignments"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["CONTENTS_ALIGNMENTS"].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isSecondary: contentsAlignment !== value,
      isPrimary: contentsAlignment === value,
      onClick: function onClick() {
        return setAttributes({
          contentsAlignment: value
        });
      }
    }, label);
  })))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Media"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-image-icon"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-image-icon"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["MEDIA_TYPES"].map(function (value) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isSecondary: media !== value,
      isPrimary: media === value,
      onClick: function onClick() {
        return setAttributes({
          media: value
        });
      }
    }, value);
  }))), media !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, media === "icon" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Select Icon")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_4___default.a, {
    icons: _util_faIcons_js__WEBPACK_IMPORTED_MODULE_5__["default"],
    onChange: function onChange(icon) {
      return setAttributes({
        selectedIcon: icon
      });
    },
    value: selectedIcon,
    appendTo: "body",
    isMulti: false
  })), media === "icon" && selectedIcon && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_withResButtons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "for-icon-size",
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Icon Size"),
    value: iconSize,
    onChange: function onChange(iconSize) {
      return setAttributes({
        iconSize: iconSize
      });
    },
    min: 8,
    max: 100
  }), resOption == "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABiconSize: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Icon Size"),
    value: TABiconSize,
    onChange: function onChange(TABiconSize) {
      return setAttributes({
        TABiconSize: TABiconSize
      });
    },
    min: 8,
    max: 100
  })), resOption == "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBiconSize: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    allowReset: true,
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Icon Size"),
    value: MOBiconSize,
    onChange: function onChange(MOBiconSize) {
      return setAttributes({
        MOBiconSize: MOBiconSize
      });
    },
    min: 8,
    max: 100
  })))), media === "number" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Number"),
    id: "eb-infobox-number-id"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("input", {
    type: "number",
    value: number,
    id: "eb-infobox-number-id",
    onChange: function onChange(e) {
      return setAttributes({
        number: parseInt(e.target.value, 10) || 0
      });
    },
    min: 0
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseLabel: "Number Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__["typoPrefix_number"],
    resRequiredProps: resRequiredProps
  })), (media === "number" || media === "icon") && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color"),
    color: numIconColor,
    onChange: function onChange(numIconColor) {
      return setAttributes({
        numIconColor: numIconColor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Use Background"),
    checked: useNumIconBg,
    onChange: function onChange() {
      return setAttributes({
        useNumIconBg: !useNumIconBg
      });
    }
  }), useNumIconBg && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["mediaBackground"],
    baseLabel: "Background size"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Background Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-infobox-background"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["ICON_IMAGE_BG_TYPES"].map(function (_ref4) {
    var value = _ref4.value,
        label = _ref4.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isPrimary: numIconBgType === value,
      isSecondary: numIconBgType !== value,
      onClick: function onClick() {
        return setAttributes({
          numIconBgType: value
        });
      }
    }, label);
  }))), numIconBgType === "fill" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Background Color"),
    color: numIconBgColor,
    onChange: function onChange(numIconBgColor) {
      return setAttributes({
        numIconBgColor: numIconBgColor
      });
    }
  }), numIconBgType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Gradient"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_10__["default"], {
    gradientColor: numIconBgGradient,
    onChange: function onChange(numIconBgGradient) {
      return setAttributes({
        numIconBgGradient: numIconBgGradient
      });
    }
  })))), media === "image" && !imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaUpload"], {
    onSelect: function onSelect(_ref5) {
      var id = _ref5.id,
          url = _ref5.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref6) {
      var open = _ref6.open;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "eb-infobox-inspector-panel-img-btn components-button",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  }), media === "image" && imageUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_image_avatar___WEBPACK_IMPORTED_MODULE_9__["default"], {
    imageUrl: imageUrl,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        imageUrl: null
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_unit_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedUnit: mediaImgWidthUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_20__["sizeUnitTypes"],
    onClick: function onClick(mediaImgWidthUnit) {
      return setAttributes({
        mediaImgWidthUnit: mediaImgWidthUnit
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_withResButtons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "for-media-image-width",
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Width"),
    value: mediaImgWidth,
    onChange: function onChange(mediaImgWidth) {
      return setAttributes({
        mediaImgWidth: mediaImgWidth
      });
    },
    min: 0,
    max: mediaImgWidthUnit === "%" ? 100 : 2000
  }), resOption == "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABmediaImgWidth: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Width"),
    value: TABmediaImgWidth,
    onChange: function onChange(TABmediaImgWidth) {
      return setAttributes({
        TABmediaImgWidth: TABmediaImgWidth
      });
    },
    min: 0,
    max: mediaImgWidthUnit === "%" ? 100 : 1030
  })), resOption == "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBmediaImgWidth: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Width"),
    value: MOBmediaImgWidth,
    onChange: function onChange(MOBmediaImgWidth) {
      return setAttributes({
        MOBmediaImgWidth: MOBmediaImgWidth
      });
    },
    min: 0,
    max: mediaImgWidthUnit === "%" ? 100 : 780
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Auto Image Height"),
    checked: isMediaImgHeightAuto,
    onChange: function onChange() {
      return setAttributes({
        isMediaImgHeightAuto: !isMediaImgHeightAuto
      });
    }
  }), !isMediaImgHeightAuto && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_unit_control__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedUnit: mediaImgHeightUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_20__["sizeUnitTypes"],
    onClick: function onClick(mediaImgHeightUnit) {
      return setAttributes({
        mediaImgHeightUnit: mediaImgHeightUnit
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_withResButtons__WEBPACK_IMPORTED_MODULE_14__["default"], {
    className: "for-media-image-height",
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Height"),
    value: mediaImgHeight,
    onChange: function onChange(mediaImgHeight) {
      return setAttributes({
        mediaImgHeight: mediaImgHeight
      });
    },
    min: 0,
    max: mediaImgHeightUnit === "%" ? 100 : 2000
  }), resOption == "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABmediaImgHeight: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Height"),
    value: TABmediaImgHeight,
    onChange: function onChange(TABmediaImgHeight) {
      return setAttributes({
        TABmediaImgHeight: TABmediaImgHeight
      });
    },
    min: 0,
    max: mediaImgHeightUnit === "%" ? 100 : 1030
  })), resOption == "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBmediaImgHeight: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Image Height"),
    value: MOBmediaImgHeight,
    onChange: function onChange(MOBmediaImgHeight) {
      return setAttributes({
        MOBmediaImgHeight: MOBmediaImgHeight
      });
    },
    min: 0,
    max: mediaImgHeightUnit === "%" ? 100 : 780
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["mediaBgRadius"],
    baseLabel: "Border Radius"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["mediaBgMargin"],
    baseLabel: "Margin"
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Title Tag")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["HEADER_TAGS"].map(function (header) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isSecondary: titleTag !== header,
      isPrimary: titleTag === header,
      onClick: function onClick() {
        return setAttributes({
          titleTag: header
        });
      }
    }, header.toUpperCase());
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__["typoPrefix_title"],
    resRequiredProps: resRequiredProps
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["titlePadding"],
    baseLabel: "Title Padding"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color"),
    color: titleColor,
    onChange: function onChange(titleColor) {
      return setAttributes({
        titleColor: titleColor
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Subtitle"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Enable"),
    checked: enableSubTitle,
    onChange: function onChange() {
      return setAttributes({
        enableSubTitle: !enableSubTitle
      });
    }
  }), enableSubTitle && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Subtitle Tag")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["HEADER_TAGS"].map(function (header) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isSecondary: subTitleTag !== header,
      isPrimary: subTitleTag === header,
      onClick: function onClick() {
        return setAttributes({
          subTitleTag: header
        });
      }
    }, header.toUpperCase());
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__["typoPrefix_subTitle"],
    resRequiredProps: resRequiredProps
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["subTitlePadding"],
    baseLabel: "Subtitle Padding"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color"),
    color: subTitleColor,
    onChange: function onChange(subTitleColor) {
      return setAttributes({
        subTitleColor: subTitleColor
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Content"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Show content"),
    checked: enableDescription,
    onChange: function onChange() {
      return setAttributes({
        enableDescription: !enableDescription
      });
    }
  }), enableDescription && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__["typoPrefix_content"],
    resRequiredProps: resRequiredProps
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["contentPadding"],
    baseLabel: "Content Padding"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Color"),
    color: descriptionColor,
    onChange: function onChange(descriptionColor) {
      return setAttributes({
        descriptionColor: descriptionColor
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Show button"),
    checked: enableButton,
    onChange: function onChange() {
      return setAttributes({
        enableButton: !enableButton
      });
    }
  }), enableButton && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button Text"),
    value: buttonText,
    onChange: function onChange(buttonText) {
      return setAttributes({
        buttonText: buttonText
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Link URL"),
    placeholder: "https://your-link.com",
    value: infoboxLink,
    onChange: function onChange(infoboxLink) {
      return setAttributes({
        infoboxLink: infoboxLink
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_6__["default"], {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_18__["typoPrefix_buttonText"],
    resRequiredProps: resRequiredProps
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["buttonPadding"],
    baseLabel: "Button Padding"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["buttonRadius"],
    baseLabel: "Button Border Radius"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Text Color"),
    color: buttonTextColor,
    onChange: function onChange(buttonTextColor) {
      return setAttributes({
        buttonTextColor: buttonTextColor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Button Color"),
    color: buttonBgColor,
    onChange: function onChange(buttonBgColor) {
      return setAttributes({
        buttonBgColor: buttonBgColor
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox Margin Padding"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["wrapperMargin"],
    baseLabel: "Container Margin"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["wrapperPadding"],
    baseLabel: "Container Padding"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox Background") // initialOpen={false}

  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_background_control__WEBPACK_IMPORTED_MODULE_16__["default"], {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_17__["infoWrapBg"],
    resRequiredProps: resRequiredProps
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox Border") // initialOpen={false}

  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border Style"),
    value: wrp_borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_20__["BORDER_STYLES"],
    onChange: function onChange(wrp_borderStyle) {
      return setAttributes({
        wrp_borderStyle: wrp_borderStyle
      });
    }
  }), wrp_borderStyle !== "none" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Border Color"),
    color: wrp_borderColor,
    onChange: function onChange(wrp_borderColor) {
      return setAttributes({
        wrp_borderColor: wrp_borderColor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["wrp_border"],
    baseLabel: "Border Width"
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_8__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_19__["wrp_radius"],
    baseLabel: "Border Radius"
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Box Shadow"),
    className: "eb-typography-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref7) {
      var isOpen = _ref7.isOpen,
          onToggle = _ref7.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_7__["default"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        id: "eb-infobox-shadow-hover-ptions"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
        id: "eb-infobox-shadow-hover-ptions"
      }, _constants__WEBPACK_IMPORTED_MODULE_20__["SHADOW_HOVER_OPTIONS"].map(function (_ref8) {
        var value = _ref8.value,
            label = _ref8.label;
        return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
          isLarge: true,
          isSecondary: wrp_shadowType !== value,
          isPrimary: wrp_shadowType === value,
          onClick: function onClick() {
            return setAttributes({
              wrp_shadowType: value
            });
          }
        }, label);
      })), " "), wrp_shadowType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Color"),
        color: wrp_shadowColor,
        onChange: function onChange(wrp_shadowColor) {
          return setAttributes({
            wrp_shadowColor: wrp_shadowColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_hOffset: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Horizontal Offset"),
        value: wrp_hOffset,
        onChange: function onChange(wrp_hOffset) {
          return setAttributes({
            wrp_hOffset: wrp_hOffset
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_vOffset: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Vertical Offset"),
        value: wrp_vOffset,
        onChange: function onChange(wrp_vOffset) {
          return setAttributes({
            wrp_vOffset: wrp_vOffset
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_blur: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Blur"),
        value: wrp_blur,
        onChange: function onChange(wrp_blur) {
          return setAttributes({
            wrp_blur: wrp_blur
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_spread: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Spread"),
        value: wrp_spread,
        onChange: function onChange(wrp_spread) {
          return setAttributes({
            wrp_spread: wrp_spread
          });
        },
        min: 0,
        max: 20
      }))), wrp_shadowType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Hover Shadow Color"),
        color: wrp_hoverShadowColor,
        onChange: function onChange(wrp_hoverShadowColor) {
          return setAttributes({
            wrp_hoverShadowColor: wrp_hoverShadowColor
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_hoverHOffset: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Horizontal Offset"),
        value: wrp_hoverHOffset,
        onChange: function onChange(wrp_hoverHOffset) {
          return setAttributes({
            wrp_hoverHOffset: wrp_hoverHOffset
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_hoverVOffset: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Vertical Offset"),
        value: wrp_hoverVOffset,
        onChange: function onChange(wrp_hoverVOffset) {
          return setAttributes({
            wrp_hoverVOffset: wrp_hoverVOffset
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_hoverBlur: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Blur"),
        value: wrp_hoverBlur,
        onChange: function onChange(wrp_hoverBlur) {
          return setAttributes({
            wrp_hoverBlur: wrp_hoverBlur
          });
        },
        min: 0,
        max: 20
      })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
        onReset: function onReset() {
          return setAttributes({
            wrp_hoverSpread: undefined
          });
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Spread"),
        value: wrp_hoverSpread,
        onChange: function onChange(wrp_hoverSpread) {
          return setAttributes({
            wrp_hoverSpread: wrp_hoverSpread
          });
        },
        min: 0,
        max: 20
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inset"),
        checked: wrp_inset,
        onChange: function onChange() {
          return setAttributes({
            wrp_inset: !wrp_inset
          });
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
        id: "eb-infobox-transition-time"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Transition"),
        value: wrp_transitionTime,
        type: "number",
        onChange: function onChange(wrp_transitionTime) {
          return setAttributes({
            wrp_transitionTime: wrp_transitionTime
          });
        }
      }))));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Infobox Shadow") // initialOpen={false}

  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-shadow-hover-ptions"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ButtonGroup"], {
    id: "eb-infobox-shadow-hover-ptions"
  }, _constants__WEBPACK_IMPORTED_MODULE_20__["SHADOW_HOVER_OPTIONS"].map(function (_ref9) {
    var value = _ref9.value,
        label = _ref9.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      isLarge: true,
      isSecondary: wrp_shadowType !== value,
      isPrimary: wrp_shadowType === value,
      onClick: function onClick() {
        return setAttributes({
          wrp_shadowType: value
        });
      }
    }, label);
  })), " "), wrp_shadowType === "normal" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Color"),
    color: wrp_shadowColor,
    onChange: function onChange(wrp_shadowColor) {
      return setAttributes({
        wrp_shadowColor: wrp_shadowColor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_hOffset: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Horizontal Offset"),
    value: wrp_hOffset,
    onChange: function onChange(wrp_hOffset) {
      return setAttributes({
        wrp_hOffset: wrp_hOffset
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_vOffset: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Vertical Offset"),
    value: wrp_vOffset,
    onChange: function onChange(wrp_vOffset) {
      return setAttributes({
        wrp_vOffset: wrp_vOffset
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_blur: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Blur"),
    value: wrp_blur,
    onChange: function onChange(wrp_blur) {
      return setAttributes({
        wrp_blur: wrp_blur
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_spread: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Spread"),
    value: wrp_spread,
    onChange: function onChange(wrp_spread) {
      return setAttributes({
        wrp_spread: wrp_spread
      });
    },
    min: 0,
    max: 20
  }))), wrp_shadowType === "hover" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_color_control__WEBPACK_IMPORTED_MODULE_12__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Hover Shadow Color"),
    color: wrp_hoverShadowColor,
    onChange: function onChange(wrp_hoverShadowColor) {
      return setAttributes({
        wrp_hoverShadowColor: wrp_hoverShadowColor
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_hoverHOffset: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Horizontal Offset"),
    value: wrp_hoverHOffset,
    onChange: function onChange(wrp_hoverHOffset) {
      return setAttributes({
        wrp_hoverHOffset: wrp_hoverHOffset
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_hoverVOffset: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Vertical Offset"),
    value: wrp_hoverVOffset,
    onChange: function onChange(wrp_hoverVOffset) {
      return setAttributes({
        wrp_hoverVOffset: wrp_hoverVOffset
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_hoverBlur: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Blur"),
    value: wrp_hoverBlur,
    onChange: function onChange(wrp_hoverBlur) {
      return setAttributes({
        wrp_hoverBlur: wrp_hoverBlur
      });
    },
    min: 0,
    max: 20
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_util_reset_control__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onReset: function onReset() {
      return setAttributes({
        wrp_hoverSpread: undefined
      });
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Shadow Spread"),
    value: wrp_hoverSpread,
    onChange: function onChange(wrp_hoverSpread) {
      return setAttributes({
        wrp_hoverSpread: wrp_hoverSpread
      });
    },
    min: 0,
    max: 20
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Inset"),
    checked: wrp_inset,
    onChange: function onChange() {
      return setAttributes({
        wrp_inset: !wrp_inset
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-infobox-transition-time"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Transition"),
    value: wrp_transitionTime,
    type: "number",
    onChange: function onChange(wrp_transitionTime) {
      return setAttributes({
        wrp_transitionTime: wrp_transitionTime
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null)));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return save; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infobox_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/infobox-container */ "./src/components/infobox-container.js");



function save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      selectedIcon = attributes.selectedIcon,
      _attributes$number = attributes.number,
      number = _attributes$number === void 0 ? 0 : _attributes$number,
      media = attributes.media,
      imageUrl = attributes.imageUrl,
      enableSubTitle = attributes.enableSubTitle,
      enableDescription = attributes.enableDescription,
      infoboxLink = attributes.infoboxLink,
      enableButton = attributes.enableButton,
      buttonText = attributes.buttonText,
      title = attributes.title,
      subTitle = attributes.subTitle,
      description = attributes.description,
      titleTag = attributes.titleTag,
      subTitleTag = attributes.subTitleTag,
      isOverly = attributes.isOverly;
  var requiredProps = {
    selectedIcon: selectedIcon,
    blockId: blockId,
    number: number,
    media: media,
    imageUrl: imageUrl,
    enableSubTitle: enableSubTitle,
    enableDescription: enableDescription,
    infoboxLink: infoboxLink,
    enableButton: enableButton,
    buttonText: buttonText,
    title: title,
    subTitle: subTitle,
    description: description,
    titleTag: titleTag,
    subTitleTag: subTitleTag,
    isOverly: isOverly
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_components_infobox_container__WEBPACK_IMPORTED_MODULE_2__["default"], {
    requiredProps: requiredProps
  }));
}

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");




/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

function WithResBtns(_ref4) {
  var children = _ref4.children,
      resRequiredProps = _ref4.resRequiredProps,
      label = _ref4.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "newWithResWrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "resBtns"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "resLabel"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleDesktopBtnClick({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleTabBtnClick({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleMobileBtnClick({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

var ImageAvatar = function ImageAvatar(_ref5) {
  var imageUrl = _ref5.imageUrl,
      onDeleteImage = _ref5.onDeleteImage;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

function BackgroundControl(_ref6) {
  var resRequiredProps = _ref6.resRequiredProps,
      controlName = _ref6.controlName;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      isBgOverly = attributes["".concat(controlName, "isBgOverly")],
      overlyType = attributes["".concat(controlName, "overlyType")],
      _attributes$ = attributes["".concat(controlName, "overlyColor")],
      overlyColor = _attributes$ === void 0 ? "#00000080" : _attributes$,
      overlyGradient = attributes["".concat(controlName, "overlyGradient")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], null, [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Fill"),
    value: "fill"
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Gradient"),
    value: "gradient"
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Image"),
    value: "image"
  }].map(function (_ref7) {
    var value = _ref7.value,
        label = _ref7.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "fill" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), backgroundType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Gradient"),
    initialOpen: false
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), backgroundType === "image" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Background Image")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__["MediaUpload"], {
    onSelect: function onSelect(_ref8) {
      var _setAttributes4;

      var url = _ref8.url,
          id = _ref8.id;
      return setAttributes((_setAttributes4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref9) {
      var open = _ref9.open;
      return !bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
        className: "eb-infobox-inspector-panel-img-btn components-button",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Upload Image"),
        icon: "format-image",
        onClick: open
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(ImageAvatar, {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: bgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: bgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: backgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: TABbgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: TABbgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: TABbackgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: MOBbgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("i", null, "Note: Attachment Fixed works only on desktop.")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: MOBbgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["SelectControl"], {
    value: MOBbackgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_7__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["RangeControl"], {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Enable Overly"),
    checked: isBgOverly,
    onChange: function onChange() {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "isBgOverly"), !isBgOverly));
    }
  }), isBgOverly && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Overly Type")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["ButtonGroup"], {
    id: "eb-infobox-infobox-background"
  }, [{
    label: "Fill",
    value: "fill"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref10) {
    var value = _ref10.value,
        label = _ref10.label;
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      isLarge: true,
      isPrimary: overlyType === value,
      isSecondary: overlyType !== value,
      onClick: function onClick() {
        return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlyType"), value));
      }
    }, label);
  }))), overlyType === "fill" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_color_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Overly"),
    color: overlyColor,
    onChange: function onChange(overlyColor) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlyColor"), overlyColor));
    }
  }), overlyType === "gradient" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_6__["default"], {
    gradientColor: overlyGradient,
    onChange: function onChange(overlyGradient) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "overlyGradient"), overlyGradient));
    }
  }) //   <PanelBody title={__("Gradient")} initialOpen={false}>
  // </PanelBody>
  )));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onChange(bgColor);
  }, [bgColor]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // console.log("----color-useEffect-fired", { color, bgColor });
    setBgColor(color);
  }, []); // console.log({ color, bgColor });

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    label: label || "",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Tooltip"], {
        text: bgColor || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ColorPicker"], {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      handleDesktopBtnClick = neededProps.handleDesktopBtnClick,
      handleTabBtnClick = neededProps.handleTabBtnClick,
      handleMobileBtnClick = neededProps.handleMobileBtnClick;

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, name, value));
      });
    }
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    onChange(dimensions);
  }, [dimensions]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dimention-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "withResWrapperInDimension"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "dimention-label"
  }, baseLabel), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleDesktopBtnClick();
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleTabBtnClick();
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("span", {
    onClick: function onClick() {
      return handleMobileBtnClick();
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-container"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "input-wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");





function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    handleDesktopBtnClick: function handleDesktopBtnClick() {
      document.body.classList.add("eb-res-option-desktop");
      document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
      setAttributes({
        resOption: "desktop"
      });
    },
    handleTabBtnClick: function handleTabBtnClick() {
      document.body.classList.add("eb-res-option-tab");
      document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
      setAttributes({
        resOption: "tab"
      });
    },
    handleMobileBtnClick: function handleMobileBtnClick() {
      document.body.classList.add("eb-res-option-mobile");
      document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
      setAttributes({
        resOption: "mobile"
      });
    }
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, resOption == "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_dimensions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Top"), top), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Right"), right), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

/***/ }),

/***/ "./util/faIcons.js":
/*!*************************!*\
  !*** ./util/faIcons.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var faIcons = ["far fa-address-book", "far fa-address-card", "far fa-angry", "far fa-arrow-alt-circle-down", "far fa-arrow-alt-circle-left", "far fa-arrow-alt-circle-right", "far fa-arrow-alt-circle-up", "far fa-bell", "far fa-bell-slash", "far fa-bookmark", "far fa-building", "far fa-calendar", "far fa-calendar-alt", "far fa-calendar-check", "far fa-calendar-minus", "far fa-calendar-plus", "far fa-calendar-times", "far fa-caret-square-down", "far fa-caret-square-left", "far fa-caret-square-right", "far fa-caret-square-up", "far fa-chart-bar", "far fa-check-circle", "far fa-check-square", "far fa-circle", "far fa-clipboard", "far fa-clock", "far fa-clone", "far fa-closed-captioning", "far fa-comment", "far fa-comment-alt", "far fa-comment-dots", "far fa-comments", "far fa-compass", "far fa-copy", "far fa-copyright", "far fa-credit-card", "far fa-dizzy", "far fa-dot-circle", "far fa-edit", "far fa-envelope", "far fa-envelope-open", "far fa-eye", "far fa-eye-slash", "far fa-file", "far fa-file-alt", "far fa-file-archive", "far fa-file-audio", "far fa-file-code", "far fa-file-excel", "far fa-file-image", "far fa-file-pdf", "far fa-file-powerpoint", "far fa-file-video", "far fa-file-word", "far fa-flag", "far fa-flushed", "far fa-folder", "far fa-folder-open", "far fa-frown", "far fa-frown-open", "far fa-futbol", "far fa-gem", "far fa-grimace", "far fa-grin", "far fa-grin-alt", "far fa-grin-beam", "far fa-grin-beam-sweat", "far fa-grin-hearts", "far fa-grin-squint", "far fa-grin-squint-tears", "far fa-grin-stars", "far fa-grin-tears", "far fa-grin-tongue", "far fa-grin-tongue-squint", "far fa-grin-tongue-wink", "far fa-grin-wink", "far fa-hand-lizard", "far fa-hand-paper", "far fa-hand-peace", "far fa-hand-point-down", "far fa-hand-point-left", "far fa-hand-point-right", "far fa-hand-point-up", "far fa-hand-pointer", "far fa-hand-rock", "far fa-hand-scissors", "far fa-hand-spock", "far fa-handshake", "far fa-hdd", "far fa-heart", "far fa-hospital", "far fa-hourglass", "far fa-id-badge", "far fa-id-card", "far fa-image", "far fa-images", "far fa-keyboard", "far fa-kiss", "far fa-kiss-beam", "far fa-kiss-wink-heart", "far fa-laugh", "far fa-laugh-beam", "far fa-laugh-squint", "far fa-laugh-wink", "far fa-lemon", "far fa-life-ring", "far fa-lightbulb", "far fa-list-alt", "far fa-map", "far fa-meh", "far fa-meh-blank", "far fa-meh-rolling-eyes", "far fa-minus-square", "far fa-money-bill-alt", "far fa-moon", "far fa-newspaper", "far fa-object-group", "far fa-object-ungroup", "far fa-paper-plane", "far fa-pause-circle", "far fa-play-circle", "far fa-plus-square", "far fa-question-circle", "far fa-registered", "far fa-sad-cry", "far fa-sad-tear", "far fa-save", "far fa-share-square", "far fa-smile", "far fa-smile-beam", "far fa-smile-wink", "far fa-snowflake", "far fa-square", "far fa-star", "far fa-star-half", "far fa-sticky-note", "far fa-stop-circle", "far fa-sun", "far fa-surprise", "far fa-thumbs-down", "far fa-thumbs-up", "far fa-times-circle", "far fa-tired", "far fa-trash-alt", "far fa-user", "far fa-user-circle", "far fa-window-close", "far fa-window-maximize", "far fa-window-minimize", "far fa-window-restore", "fas fa-ad", "fas fa-address-book", "fas fa-address-card", "fas fa-adjust", "fas fa-air-freshener", "fas fa-align-center", "fas fa-align-justify", "fas fa-align-left", "fas fa-align-right", "fas fa-allergies", "fas fa-ambulance", "fas fa-american-sign-language-interpreting", "fas fa-anchor", "fas fa-angle-double-down", "fas fa-angle-double-left", "fas fa-angle-double-right", "fas fa-angle-double-up", "fas fa-angle-down", "fas fa-angle-left", "fas fa-angle-right", "fas fa-angle-up", "fas fa-angry", "fas fa-ankh", "fas fa-apple-alt", "fas fa-archive", "fas fa-archway", "fas fa-arrow-alt-circle-down", "fas fa-arrow-alt-circle-left", "fas fa-arrow-alt-circle-right", "fas fa-arrow-alt-circle-up", "fas fa-arrow-circle-down", "fas fa-arrow-circle-left", "fas fa-arrow-circle-right", "fas fa-arrow-circle-up", "fas fa-arrow-down", "fas fa-arrow-left", "fas fa-arrow-right", "fas fa-arrow-up", "fas fa-arrows-alt", "fas fa-arrows-alt-h", "fas fa-arrows-alt-v", "fas fa-assistive-listening-systems", "fas fa-asterisk", "fas fa-at", "fas fa-atlas", "fas fa-atom", "fas fa-audio-description", "fas fa-award", "fas fa-baby", "fas fa-baby-carriage", "fas fa-backspace", "fas fa-backward", "fas fa-bacon", "fas fa-bahai", "fas fa-balance-scale", "fas fa-balance-scale-left", "fas fa-balance-scale-right", "fas fa-ban", "fas fa-band-aid", "fas fa-barcode", "fas fa-bars", "fas fa-baseball-ball", "fas fa-basketball-ball", "fas fa-bath", "fas fa-battery-empty", "fas fa-battery-full", "fas fa-battery-half", "fas fa-battery-quarter", "fas fa-battery-three-quarters", "fas fa-bed", "fas fa-beer", "fas fa-bell", "fas fa-bell-slash", "fas fa-bezier-curve", "fas fa-bible", "fas fa-bicycle", "fas fa-biking", "fas fa-binoculars", "fas fa-biohazard", "fas fa-birthday-cake", "fas fa-blender", "fas fa-blender-phone", "fas fa-blind", "fas fa-blog", "fas fa-bold", "fas fa-bolt", "fas fa-bomb", "fas fa-bone", "fas fa-bong", "fas fa-book", "fas fa-book-dead", "fas fa-book-medical", "fas fa-book-open", "fas fa-book-reader", "fas fa-bookmark", "fas fa-border-all", "fas fa-border-none", "fas fa-border-style", "fas fa-bowling-ball", "fas fa-box", "fas fa-box-open", "fas fa-boxes", "fas fa-braille", "fas fa-brain", "fas fa-bread-slice", "fas fa-briefcase", "fas fa-briefcase-medical", "fas fa-broadcast-tower", "fas fa-broom", "fas fa-brush", "fas fa-bug", "fas fa-building", "fas fa-bullhorn", "fas fa-bullseye", "fas fa-burn", "fas fa-bus", "fas fa-bus-alt", "fas fa-business-time", "fas fa-calculator", "fas fa-calendar", "fas fa-calendar-alt", "fas fa-calendar-check", "fas fa-calendar-day", "fas fa-calendar-minus", "fas fa-calendar-plus", "fas fa-calendar-times", "fas fa-calendar-week", "fas fa-camera", "fas fa-camera-retro", "fas fa-campground", "fas fa-candy-cane", "fas fa-cannabis", "fas fa-capsules", "fas fa-car", "fas fa-car-alt", "fas fa-car-battery", "fas fa-car-crash", "fas fa-car-side", "fas fa-caravan", "fas fa-caret-down", "fas fa-caret-left", "fas fa-caret-right", "fas fa-caret-square-down", "fas fa-caret-square-left", "fas fa-caret-square-right", "fas fa-caret-square-up", "fas fa-caret-up", "fas fa-carrot", "fas fa-cart-arrow-down", "fas fa-cart-plus", "fas fa-cash-register", "fas fa-cat", "fas fa-certificate", "fas fa-chair", "fas fa-chalkboard", "fas fa-chalkboard-teacher", "fas fa-charging-station", "fas fa-chart-area", "fas fa-chart-bar", "fas fa-chart-line", "fas fa-chart-pie", "fas fa-check", "fas fa-check-circle", "fas fa-check-double", "fas fa-check-square", "fas fa-cheese", "fas fa-chess", "fas fa-chess-bishop", "fas fa-chess-board", "fas fa-chess-king", "fas fa-chess-knight", "fas fa-chess-pawn", "fas fa-chess-queen", "fas fa-chess-rook", "fas fa-chevron-circle-down", "fas fa-chevron-circle-left", "fas fa-chevron-circle-right", "fas fa-chevron-circle-up", "fas fa-chevron-down", "fas fa-chevron-left", "fas fa-chevron-right", "fas fa-chevron-up", "fas fa-child", "fas fa-church", "fas fa-circle", "fas fa-circle-notch", "fas fa-city", "fas fa-clinic-medical", "fas fa-clipboard", "fas fa-clipboard-check", "fas fa-clipboard-list", "fas fa-clock", "fas fa-clone", "fas fa-closed-captioning", "fas fa-cloud", "fas fa-cloud-download-alt", "fas fa-cloud-meatball", "fas fa-cloud-moon", "fas fa-cloud-moon-rain", "fas fa-cloud-rain", "fas fa-cloud-showers-heavy", "fas fa-cloud-sun", "fas fa-cloud-sun-rain", "fas fa-cloud-upload-alt", "fas fa-cocktail", "fas fa-code", "fas fa-code-branch", "fas fa-coffee", "fas fa-cog", "fas fa-cogs", "fas fa-coins", "fas fa-columns", "fas fa-comment", "fas fa-comment-alt", "fas fa-comment-dollar", "fas fa-comment-dots", "fas fa-comment-medical", "fas fa-comment-slash", "fas fa-comments", "fas fa-comments-dollar", "fas fa-compact-disc", "fas fa-compass", "fas fa-compress", "fas fa-compress-alt", "fas fa-compress-arrows-alt", "fas fa-concierge-bell", "fas fa-cookie", "fas fa-cookie-bite", "fas fa-copy", "fas fa-copyright", "fas fa-couch", "fas fa-credit-card", "fas fa-crop", "fas fa-crop-alt", "fas fa-cross", "fas fa-crosshairs", "fas fa-crow", "fas fa-crown", "fas fa-crutch", "fas fa-cube", "fas fa-cubes", "fas fa-cut", "fas fa-database", "fas fa-deaf", "fas fa-democrat", "fas fa-desktop", "fas fa-dharmachakra", "fas fa-diagnoses", "fas fa-dice", "fas fa-dice-d20", "fas fa-dice-d6", "fas fa-dice-five", "fas fa-dice-four", "fas fa-dice-one", "fas fa-dice-six", "fas fa-dice-three", "fas fa-dice-two", "fas fa-digital-tachograph", "fas fa-directions", "fas fa-divide", "fas fa-dizzy", "fas fa-dna", "fas fa-dog", "fas fa-dollar-sign", "fas fa-dolly", "fas fa-dolly-flatbed", "fas fa-donate", "fas fa-door-closed", "fas fa-door-open", "fas fa-dot-circle", "fas fa-dove", "fas fa-download", "fas fa-drafting-compass", "fas fa-dragon", "fas fa-draw-polygon", "fas fa-drum", "fas fa-drum-steelpan", "fas fa-drumstick-bite", "fas fa-dumbbell", "fas fa-dumpster", "fas fa-dumpster-fire", "fas fa-dungeon", "fas fa-edit", "fas fa-egg", "fas fa-eject", "fas fa-ellipsis-h", "fas fa-ellipsis-v", "fas fa-envelope", "fas fa-envelope-open", "fas fa-envelope-open-text", "fas fa-envelope-square", "fas fa-equals", "fas fa-eraser", "fas fa-ethernet", "fas fa-euro-sign", "fas fa-exchange-alt", "fas fa-exclamation", "fas fa-exclamation-circle", "fas fa-exclamation-triangle", "fas fa-expand", "fas fa-expand-alt", "fas fa-expand-arrows-alt", "fas fa-external-link-alt", "fas fa-external-link-square-alt", "fas fa-eye", "fas fa-eye-dropper", "fas fa-eye-slash", "fas fa-fan", "fas fa-fast-backward", "fas fa-fast-forward", "fas fa-fax", "fas fa-feather", "fas fa-feather-alt", "fas fa-female", "fas fa-fighter-jet", "fas fa-file", "fas fa-file-alt", "fas fa-file-archive", "fas fa-file-audio", "fas fa-file-code", "fas fa-file-contract", "fas fa-file-csv", "fas fa-file-download", "fas fa-file-excel", "fas fa-file-export", "fas fa-file-image", "fas fa-file-import", "fas fa-file-invoice", "fas fa-file-invoice-dollar", "fas fa-file-medical", "fas fa-file-medical-alt", "fas fa-file-pdf", "fas fa-file-powerpoint", "fas fa-file-prescription", "fas fa-file-signature", "fas fa-file-upload", "fas fa-file-video", "fas fa-file-word", "fas fa-fill", "fas fa-fill-drip", "fas fa-film", "fas fa-filter", "fas fa-fingerprint", "fas fa-fire", "fas fa-fire-alt", "fas fa-fire-extinguisher", "fas fa-first-aid", "fas fa-fish", "fas fa-fist-raised", "fas fa-flag", "fas fa-flag-checkered", "fas fa-flag-usa", "fas fa-flask", "fas fa-flushed", "fas fa-folder", "fas fa-folder-minus", "fas fa-folder-open", "fas fa-folder-plus", "fas fa-font", "fas fa-football-ball", "fas fa-forward", "fas fa-frog", "fas fa-frown", "fas fa-frown-open", "fas fa-funnel-dollar", "fas fa-futbol", "fas fa-gamepad", "fas fa-gas-pump", "fas fa-gavel", "fas fa-gem", "fas fa-genderless", "fas fa-ghost", "fas fa-gift", "fas fa-gifts", "fas fa-glass-cheers", "fas fa-glass-martini", "fas fa-glass-martini-alt", "fas fa-glass-whiskey", "fas fa-glasses", "fas fa-globe", "fas fa-globe-africa", "fas fa-globe-americas", "fas fa-globe-asia", "fas fa-globe-europe", "fas fa-golf-ball", "fas fa-gopuram", "fas fa-graduation-cap", "fas fa-greater-than", "fas fa-greater-than-equal", "fas fa-grimace", "fas fa-grin", "fas fa-grin-alt", "fas fa-grin-beam", "fas fa-grin-beam-sweat", "fas fa-grin-hearts", "fas fa-grin-squint", "fas fa-grin-squint-tears", "fas fa-grin-stars", "fas fa-grin-tears", "fas fa-grin-tongue", "fas fa-grin-tongue-squint", "fas fa-grin-tongue-wink", "fas fa-grin-wink", "fas fa-grip-horizontal", "fas fa-grip-lines", "fas fa-grip-lines-vertical", "fas fa-grip-vertical", "fas fa-guitar", "fas fa-h-square", "fas fa-hamburger", "fas fa-hammer", "fas fa-hamsa", "fas fa-hand-holding", "fas fa-hand-holding-heart", "fas fa-hand-holding-usd", "fas fa-hand-lizard", "fas fa-hand-middle-finger", "fas fa-hand-paper", "fas fa-hand-peace", "fas fa-hand-point-down", "fas fa-hand-point-left", "fas fa-hand-point-right", "fas fa-hand-point-up", "fas fa-hand-pointer", "fas fa-hand-rock", "fas fa-hand-scissors", "fas fa-hand-spock", "fas fa-hands", "fas fa-hands-helping", "fas fa-handshake", "fas fa-hanukiah", "fas fa-hard-hat", "fas fa-hashtag", "fas fa-hat-cowboy", "fas fa-hat-cowboy-side", "fas fa-hat-wizard", "fas fa-hdd", "fas fa-heading", "fas fa-headphones", "fas fa-headphones-alt", "fas fa-headset", "fas fa-heart", "fas fa-heart-broken", "fas fa-heartbeat", "fas fa-helicopter", "fas fa-highlighter", "fas fa-hiking", "fas fa-hippo", "fas fa-history", "fas fa-hockey-puck", "fas fa-holly-berry", "fas fa-home", "fas fa-horse", "fas fa-horse-head", "fas fa-hospital", "fas fa-hospital-alt", "fas fa-hospital-symbol", "fas fa-hot-tub", "fas fa-hotdog", "fas fa-hotel", "fas fa-hourglass", "fas fa-hourglass-end", "fas fa-hourglass-half", "fas fa-hourglass-start", "fas fa-house-damage", "fas fa-hryvnia", "fas fa-i-cursor", "fas fa-ice-cream", "fas fa-icicles", "fas fa-icons", "fas fa-id-badge", "fas fa-id-card", "fas fa-id-card-alt", "fas fa-igloo", "fas fa-image", "fas fa-images", "fas fa-inbox", "fas fa-indent", "fas fa-industry", "fas fa-infinity", "fas fa-info", "fas fa-info-circle", "fas fa-italic", "fas fa-jedi", "fas fa-joint", "fas fa-journal-whills", "fas fa-kaaba", "fas fa-key", "fas fa-keyboard", "fas fa-khanda", "fas fa-kiss", "fas fa-kiss-beam", "fas fa-kiss-wink-heart", "fas fa-kiwi-bird", "fas fa-landmark", "fas fa-language", "fas fa-laptop", "fas fa-laptop-code", "fas fa-laptop-medical", "fas fa-laugh", "fas fa-laugh-beam", "fas fa-laugh-squint", "fas fa-laugh-wink", "fas fa-layer-group", "fas fa-leaf", "fas fa-lemon", "fas fa-less-than", "fas fa-less-than-equal", "fas fa-level-down-alt", "fas fa-level-up-alt", "fas fa-life-ring", "fas fa-lightbulb", "fas fa-link", "fas fa-lira-sign", "fas fa-list", "fas fa-list-alt", "fas fa-list-ol", "fas fa-list-ul", "fas fa-location-arrow", "fas fa-lock", "fas fa-lock-open", "fas fa-long-arrow-alt-down", "fas fa-long-arrow-alt-left", "fas fa-long-arrow-alt-right", "fas fa-long-arrow-alt-up", "fas fa-low-vision", "fas fa-luggage-cart", "fas fa-magic", "fas fa-magnet", "fas fa-mail-bulk", "fas fa-male", "fas fa-map", "fas fa-map-marked", "fas fa-map-marked-alt", "fas fa-map-marker", "fas fa-map-marker-alt", "fas fa-map-pin", "fas fa-map-signs", "fas fa-marker", "fas fa-mars", "fas fa-mars-double", "fas fa-mars-stroke", "fas fa-mars-stroke-h", "fas fa-mars-stroke-v", "fas fa-mask", "fas fa-medal", "fas fa-medkit", "fas fa-meh", "fas fa-meh-blank", "fas fa-meh-rolling-eyes", "fas fa-memory", "fas fa-menorah", "fas fa-mercury", "fas fa-meteor", "fas fa-microchip", "fas fa-microphone", "fas fa-microphone-alt", "fas fa-microphone-alt-slash", "fas fa-microphone-slash", "fas fa-microscope", "fas fa-minus", "fas fa-minus-circle", "fas fa-minus-square", "fas fa-mitten", "fas fa-mobile", "fas fa-mobile-alt", "fas fa-money-bill", "fas fa-money-bill-alt", "fas fa-money-bill-wave", "fas fa-money-bill-wave-alt", "fas fa-money-check", "fas fa-money-check-alt", "fas fa-monument", "fas fa-moon", "fas fa-mortar-pestle", "fas fa-mosque", "fas fa-motorcycle", "fas fa-mountain", "fas fa-mouse", "fas fa-mouse-pointer", "fas fa-mug-hot", "fas fa-music", "fas fa-network-wired", "fas fa-neuter", "fas fa-newspaper", "fas fa-not-equal", "fas fa-notes-medical", "fas fa-object-group", "fas fa-object-ungroup", "fas fa-oil-can", "fas fa-om", "fas fa-otter", "fas fa-outdent", "fas fa-pager", "fas fa-paint-brush", "fas fa-paint-roller", "fas fa-palette", "fas fa-pallet", "fas fa-paper-plane", "fas fa-paperclip", "fas fa-parachute-box", "fas fa-paragraph", "fas fa-parking", "fas fa-passport", "fas fa-pastafarianism", "fas fa-paste", "fas fa-pause", "fas fa-pause-circle", "fas fa-paw", "fas fa-peace", "fas fa-pen", "fas fa-pen-alt", "fas fa-pen-fancy", "fas fa-pen-nib", "fas fa-pen-square", "fas fa-pencil-alt", "fas fa-pencil-ruler", "fas fa-people-carry", "fas fa-pepper-hot", "fas fa-percent", "fas fa-percentage", "fas fa-person-booth", "fas fa-phone", "fas fa-phone-alt", "fas fa-phone-slash", "fas fa-phone-square", "fas fa-phone-square-alt", "fas fa-phone-volume", "fas fa-photo-video", "fas fa-piggy-bank", "fas fa-pills", "fas fa-pizza-slice", "fas fa-place-of-worship", "fas fa-plane", "fas fa-plane-arrival", "fas fa-plane-departure", "fas fa-play", "fas fa-play-circle", "fas fa-plug", "fas fa-plus", "fas fa-plus-circle", "fas fa-plus-square", "fas fa-podcast", "fas fa-poll", "fas fa-poll-h", "fas fa-poo", "fas fa-poo-storm", "fas fa-poop", "fas fa-portrait", "fas fa-pound-sign", "fas fa-power-off", "fas fa-pray", "fas fa-praying-hands", "fas fa-prescription", "fas fa-prescription-bottle", "fas fa-prescription-bottle-alt", "fas fa-print", "fas fa-procedures", "fas fa-project-diagram", "fas fa-puzzle-piece", "fas fa-qrcode", "fas fa-question", "fas fa-question-circle", "fas fa-quidditch", "fas fa-quote-left", "fas fa-quote-right", "fas fa-quran", "fas fa-radiation", "fas fa-radiation-alt", "fas fa-rainbow", "fas fa-random", "fas fa-receipt", "fas fa-record-vinyl", "fas fa-recycle", "fas fa-redo", "fas fa-redo-alt", "fas fa-registered", "fas fa-remove-format", "fas fa-reply", "fas fa-reply-all", "fas fa-republican", "fas fa-restroom", "fas fa-retweet", "fas fa-ribbon", "fas fa-ring", "fas fa-road", "fas fa-robot", "fas fa-rocket", "fas fa-route", "fas fa-rss", "fas fa-rss-square", "fas fa-ruble-sign", "fas fa-ruler", "fas fa-ruler-combined", "fas fa-ruler-horizontal", "fas fa-ruler-vertical", "fas fa-running", "fas fa-rupee-sign", "fas fa-sad-cry", "fas fa-sad-tear", "fas fa-satellite", "fas fa-satellite-dish", "fas fa-save", "fas fa-school", "fas fa-screwdriver", "fas fa-scroll", "fas fa-sd-card", "fas fa-search", "fas fa-search-dollar", "fas fa-search-location", "fas fa-search-minus", "fas fa-search-plus", "fas fa-seedling", "fas fa-server", "fas fa-shapes", "fas fa-share", "fas fa-share-alt", "fas fa-share-alt-square", "fas fa-share-square", "fas fa-shekel-sign", "fas fa-shield-alt", "fas fa-ship", "fas fa-shipping-fast", "fas fa-shoe-prints", "fas fa-shopping-bag", "fas fa-shopping-basket", "fas fa-shopping-cart", "fas fa-shower", "fas fa-shuttle-van", "fas fa-sign", "fas fa-sign-in-alt", "fas fa-sign-language", "fas fa-sign-out-alt", "fas fa-signal", "fas fa-signature", "fas fa-sim-card", "fas fa-sitemap", "fas fa-skating", "fas fa-skiing", "fas fa-skiing-nordic", "fas fa-skull", "fas fa-skull-crossbones", "fas fa-slash", "fas fa-sleigh", "fas fa-sliders-h", "fas fa-smile", "fas fa-smile-beam", "fas fa-smile-wink", "fas fa-smog", "fas fa-smoking", "fas fa-smoking-ban", "fas fa-sms", "fas fa-snowboarding", "fas fa-snowflake", "fas fa-snowman", "fas fa-snowplow", "fas fa-socks", "fas fa-solar-panel", "fas fa-sort", "fas fa-sort-alpha-down", "fas fa-sort-alpha-down-alt", "fas fa-sort-alpha-up", "fas fa-sort-alpha-up-alt", "fas fa-sort-amount-down", "fas fa-sort-amount-down-alt", "fas fa-sort-amount-up", "fas fa-sort-amount-up-alt", "fas fa-sort-down", "fas fa-sort-numeric-down", "fas fa-sort-numeric-down-alt", "fas fa-sort-numeric-up", "fas fa-sort-numeric-up-alt", "fas fa-sort-up", "fas fa-spa", "fas fa-space-shuttle", "fas fa-spell-check", "fas fa-spider", "fas fa-spinner", "fas fa-splotch", "fas fa-spray-can", "fas fa-square", "fas fa-square-full", "fas fa-square-root-alt", "fas fa-stamp", "fas fa-star", "fas fa-star-and-crescent", "fas fa-star-half", "fas fa-star-half-alt", "fas fa-star-of-david", "fas fa-star-of-life", "fas fa-step-backward", "fas fa-step-forward", "fas fa-stethoscope", "fas fa-sticky-note", "fas fa-stop", "fas fa-stop-circle", "fas fa-stopwatch", "fas fa-store", "fas fa-store-alt", "fas fa-stream", "fas fa-street-view", "fas fa-strikethrough", "fas fa-stroopwafel", "fas fa-subscript", "fas fa-subway", "fas fa-suitcase", "fas fa-suitcase-rolling", "fas fa-sun", "fas fa-superscript", "fas fa-surprise", "fas fa-swatchbook", "fas fa-swimmer", "fas fa-swimming-pool", "fas fa-synagogue", "fas fa-sync", "fas fa-sync-alt", "fas fa-syringe", "fas fa-table", "fas fa-table-tennis", "fas fa-tablet", "fas fa-tablet-alt", "fas fa-tablets", "fas fa-tachometer-alt", "fas fa-tag", "fas fa-tags", "fas fa-tape", "fas fa-tasks", "fas fa-taxi", "fas fa-teeth", "fas fa-teeth-open", "fas fa-temperature-high", "fas fa-temperature-low", "fas fa-tenge", "fas fa-terminal", "fas fa-text-height", "fas fa-text-width", "fas fa-th", "fas fa-th-large", "fas fa-th-list", "fas fa-theater-masks", "fas fa-thermometer", "fas fa-thermometer-empty", "fas fa-thermometer-full", "fas fa-thermometer-half", "fas fa-thermometer-quarter", "fas fa-thermometer-three-quarters", "fas fa-thumbs-down", "fas fa-thumbs-up", "fas fa-thumbtack", "fas fa-ticket-alt", "fas fa-times", "fas fa-times-circle", "fas fa-tint", "fas fa-tint-slash", "fas fa-tired", "fas fa-toggle-off", "fas fa-toggle-on", "fas fa-toilet", "fas fa-toilet-paper", "fas fa-toolbox", "fas fa-tools", "fas fa-tooth", "fas fa-torah", "fas fa-torii-gate", "fas fa-tractor", "fas fa-trademark", "fas fa-traffic-light", "fas fa-trailer", "fas fa-train", "fas fa-tram", "fas fa-transgender", "fas fa-transgender-alt", "fas fa-trash", "fas fa-trash-alt", "fas fa-trash-restore", "fas fa-trash-restore-alt", "fas fa-tree", "fas fa-trophy", "fas fa-truck", "fas fa-truck-loading", "fas fa-truck-monster", "fas fa-truck-moving", "fas fa-truck-pickup", "fas fa-tshirt", "fas fa-tty", "fas fa-tv", "fas fa-umbrella", "fas fa-umbrella-beach", "fas fa-underline", "fas fa-undo", "fas fa-undo-alt", "fas fa-universal-access", "fas fa-university", "fas fa-unlink", "fas fa-unlock", "fas fa-unlock-alt", "fas fa-upload", "fas fa-user", "fas fa-user-alt", "fas fa-user-alt-slash", "fas fa-user-astronaut", "fas fa-user-check", "fas fa-user-circle", "fas fa-user-clock", "fas fa-user-cog", "fas fa-user-edit", "fas fa-user-friends", "fas fa-user-graduate", "fas fa-user-injured", "fas fa-user-lock", "fas fa-user-md", "fas fa-user-minus", "fas fa-user-ninja", "fas fa-user-nurse", "fas fa-user-plus", "fas fa-user-secret", "fas fa-user-shield", "fas fa-user-slash", "fas fa-user-tag", "fas fa-user-tie", "fas fa-user-times", "fas fa-users", "fas fa-users-cog", "fas fa-utensil-spoon", "fas fa-utensils", "fas fa-vector-square", "fas fa-venus", "fas fa-venus-double", "fas fa-venus-mars", "fas fa-vial", "fas fa-vials", "fas fa-video", "fas fa-video-slash", "fas fa-vihara", "fas fa-voicemail", "fas fa-volleyball-ball", "fas fa-volume-down", "fas fa-volume-mute", "fas fa-volume-off", "fas fa-volume-up", "fas fa-vote-yea", "fas fa-vr-cardboard", "fas fa-walking", "fas fa-wallet", "fas fa-warehouse", "fas fa-water", "fas fa-wave-square", "fas fa-weight", "fas fa-weight-hanging", "fas fa-wheelchair", "fas fa-wifi", "fas fa-wind", "fas fa-window-close", "fas fa-window-maximize", "fas fa-window-minimize", "fas fa-window-restore", "fas fa-wine-bottle", "fas fa-wine-glass", "fas fa-wine-glass-alt", "fas fa-won-sign", "fas fa-wrench", "fas fa-x-ray", "fas fa-yen-sign", "fas fa-yin-yang", "fab fa-500px", "fab fa-accessible-icon", "fab fa-accusoft", "fab fa-acquisitions-incorporated", "fab fa-adn", "fab fa-adobe", "fab fa-adversal", "fab fa-affiliatetheme", "fab fa-airbnb", "fab fa-algolia", "fab fa-alipay", "fab fa-amazon", "fab fa-amazon-pay", "fab fa-amilia", "fab fa-android", "fab fa-angellist", "fab fa-angrycreative", "fab fa-angular", "fab fa-app-store", "fab fa-app-store-ios", "fab fa-apper", "fab fa-apple", "fab fa-apple-pay", "fab fa-artstation", "fab fa-asymmetrik", "fab fa-atlassian", "fab fa-audible", "fab fa-autoprefixer", "fab fa-avianex", "fab fa-aviato", "fab fa-aws", "fab fa-bandcamp", "fab fa-battle-net", "fab fa-behance", "fab fa-behance-square", "fab fa-bimobject", "fab fa-bitbucket", "fab fa-bitcoin", "fab fa-bity", "fab fa-black-tie", "fab fa-blackberry", "fab fa-blogger", "fab fa-blogger-b", "fab fa-bluetooth", "fab fa-bluetooth-b", "fab fa-bootstrap", "fab fa-btc", "fab fa-buffer", "fab fa-buromobelexperte", "fab fa-buy-n-large", "fab fa-buysellads", "fab fa-canadian-maple-leaf", "fab fa-cc-amazon-pay", "fab fa-cc-amex", "fab fa-cc-apple-pay", "fab fa-cc-diners-club", "fab fa-cc-discover", "fab fa-cc-jcb", "fab fa-cc-mastercard", "fab fa-cc-paypal", "fab fa-cc-stripe", "fab fa-cc-visa", "fab fa-centercode", "fab fa-centos", "fab fa-chrome", "fab fa-chromecast", "fab fa-cloudscale", "fab fa-cloudsmith", "fab fa-cloudversify", "fab fa-codepen", "fab fa-codiepie", "fab fa-confluence", "fab fa-connectdevelop", "fab fa-contao", "fab fa-cotton-bureau", "fab fa-cpanel", "fab fa-creative-commons", "fab fa-creative-commons-by", "fab fa-creative-commons-nc", "fab fa-creative-commons-nc-eu", "fab fa-creative-commons-nc-jp", "fab fa-creative-commons-nd", "fab fa-creative-commons-pd", "fab fa-creative-commons-pd-alt", "fab fa-creative-commons-remix", "fab fa-creative-commons-sa", "fab fa-creative-commons-sampling", "fab fa-creative-commons-sampling-plus", "fab fa-creative-commons-share", "fab fa-creative-commons-zero", "fab fa-critical-role", "fab fa-css3", "fab fa-css3-alt", "fab fa-cuttlefish", "fab fa-d-and-d", "fab fa-d-and-d-beyond", "fab fa-dashcube", "fab fa-delicious", "fab fa-deploydog", "fab fa-deskpro", "fab fa-dev", "fab fa-deviantart", "fab fa-dhl", "fab fa-diaspora", "fab fa-digg", "fab fa-digital-ocean", "fab fa-discord", "fab fa-discourse", "fab fa-dochub", "fab fa-docker", "fab fa-draft2digital", "fab fa-dribbble", "fab fa-dribbble-square", "fab fa-dropbox", "fab fa-drupal", "fab fa-dyalog", "fab fa-earlybirds", "fab fa-ebay", "fab fa-edge", "fab fa-elementor", "fab fa-ello", "fab fa-ember", "fab fa-empire", "fab fa-envira", "fab fa-erlang", "fab fa-ethereum", "fab fa-etsy", "fab fa-evernote", "fab fa-expeditedssl", "fab fa-facebook", "fab fa-facebook-f", "fab fa-facebook-messenger", "fab fa-facebook-square", "fab fa-fantasy-flight-games", "fab fa-fedex", "fab fa-fedora", "fab fa-figma", "fab fa-firefox", "fab fa-firefox-browser", "fab fa-first-order", "fab fa-first-order-alt", "fab fa-firstdraft", "fab fa-flickr", "fab fa-flipboard", "fab fa-fly", "fab fa-font-awesome", "fab fa-font-awesome-alt", "fab fa-font-awesome-flag", "fab fa-fonticons", "fab fa-fonticons-fi", "fab fa-fort-awesome", "fab fa-fort-awesome-alt", "fab fa-forumbee", "fab fa-foursquare", "fab fa-free-code-camp", "fab fa-freebsd", "fab fa-fulcrum", "fab fa-galactic-republic", "fab fa-galactic-senate", "fab fa-get-pocket", "fab fa-gg", "fab fa-gg-circle", "fab fa-git", "fab fa-git-alt", "fab fa-git-square", "fab fa-github", "fab fa-github-alt", "fab fa-github-square", "fab fa-gitkraken", "fab fa-gitlab", "fab fa-gitter", "fab fa-glide", "fab fa-glide-g", "fab fa-gofore", "fab fa-goodreads", "fab fa-goodreads-g", "fab fa-google", "fab fa-google-drive", "fab fa-google-play", "fab fa-google-plus", "fab fa-google-plus-g", "fab fa-google-plus-square", "fab fa-google-wallet", "fab fa-gratipay", "fab fa-grav", "fab fa-gripfire", "fab fa-grunt", "fab fa-gulp", "fab fa-hacker-news", "fab fa-hacker-news-square", "fab fa-hackerrank", "fab fa-hips", "fab fa-hire-a-helper", "fab fa-hooli", "fab fa-hornbill", "fab fa-hotjar", "fab fa-houzz", "fab fa-html5", "fab fa-hubspot", "fab fa-ideal", "fab fa-imdb", "fab fa-instagram", "fab fa-intercom", "fab fa-internet-explorer", "fab fa-invision", "fab fa-ioxhost", "fab fa-itch-io", "fab fa-itunes", "fab fa-itunes-note", "fab fa-java", "fab fa-jedi-order", "fab fa-jenkins", "fab fa-jira", "fab fa-joget", "fab fa-joomla", "fab fa-js", "fab fa-js-square", "fab fa-jsfiddle", "fab fa-kaggle", "fab fa-keybase", "fab fa-keycdn", "fab fa-kickstarter", "fab fa-kickstarter-k", "fab fa-korvue", "fab fa-laravel", "fab fa-lastfm", "fab fa-lastfm-square", "fab fa-leanpub", "fab fa-less", "fab fa-line", "fab fa-linkedin", "fab fa-linkedin-in", "fab fa-linode", "fab fa-linux", "fab fa-lyft", "fab fa-magento", "fab fa-mailchimp", "fab fa-mandalorian", "fab fa-markdown", "fab fa-mastodon", "fab fa-maxcdn", "fab fa-mdb", "fab fa-medapps", "fab fa-medium", "fab fa-medium-m", "fab fa-medrt", "fab fa-meetup", "fab fa-megaport", "fab fa-mendeley", "fab fa-microblog", "fab fa-microsoft", "fab fa-mix", "fab fa-mixcloud", "fab fa-mizuni", "fab fa-modx", "fab fa-monero", "fab fa-napster", "fab fa-neos", "fab fa-nimblr", "fab fa-node", "fab fa-node-js", "fab fa-npm", "fab fa-ns8", "fab fa-nutritionix", "fab fa-odnoklassniki", "fab fa-odnoklassniki-square", "fab fa-old-republic", "fab fa-opencart", "fab fa-openid", "fab fa-opera", "fab fa-optin-monster", "fab fa-orcid", "fab fa-osi", "fab fa-page4", "fab fa-pagelines", "fab fa-palfed", "fab fa-patreon", "fab fa-paypal", "fab fa-penny-arcade", "fab fa-periscope", "fab fa-phabricator", "fab fa-phoenix-framework", "fab fa-phoenix-squadron", "fab fa-php", "fab fa-pied-piper", "fab fa-pied-piper-alt", "fab fa-pied-piper-hat", "fab fa-pied-piper-pp", "fab fa-pied-piper-square", "fab fa-pinterest", "fab fa-pinterest-p", "fab fa-pinterest-square", "fab fa-playstation", "fab fa-product-hunt", "fab fa-pushed", "fab fa-python", "fab fa-qq", "fab fa-quinscape", "fab fa-quora", "fab fa-r-project", "fab fa-raspberry-pi", "fab fa-ravelry", "fab fa-react", "fab fa-reacteurope", "fab fa-readme", "fab fa-rebel", "fab fa-red-river", "fab fa-reddit", "fab fa-reddit-alien", "fab fa-reddit-square", "fab fa-redhat", "fab fa-renren", "fab fa-replyd", "fab fa-researchgate", "fab fa-resolving", "fab fa-rev", "fab fa-rocketchat", "fab fa-rockrms", "fab fa-safari", "fab fa-salesforce", "fab fa-sass", "fab fa-schlix", "fab fa-scribd", "fab fa-searchengin", "fab fa-sellcast", "fab fa-sellsy", "fab fa-servicestack", "fab fa-shirtsinbulk", "fab fa-shopware", "fab fa-simplybuilt", "fab fa-sistrix", "fab fa-sith", "fab fa-sketch", "fab fa-skyatlas", "fab fa-skype", "fab fa-slack", "fab fa-slack-hash", "fab fa-slideshare", "fab fa-snapchat", "fab fa-snapchat-ghost", "fab fa-snapchat-square", "fab fa-soundcloud", "fab fa-sourcetree", "fab fa-speakap", "fab fa-speaker-deck", "fab fa-spotify", "fab fa-squarespace", "fab fa-stack-exchange", "fab fa-stack-overflow", "fab fa-stackpath", "fab fa-staylinked", "fab fa-steam", "fab fa-steam-square", "fab fa-steam-symbol", "fab fa-sticker-mule", "fab fa-strava", "fab fa-stripe", "fab fa-stripe-s", "fab fa-studiovinari", "fab fa-stumbleupon", "fab fa-stumbleupon-circle", "fab fa-superpowers", "fab fa-supple", "fab fa-suse", "fab fa-swift", "fab fa-symfony", "fab fa-teamspeak", "fab fa-telegram", "fab fa-telegram-plane", "fab fa-tencent-weibo", "fab fa-the-red-yeti", "fab fa-themeco", "fab fa-themeisle", "fab fa-think-peaks", "fab fa-trade-federation", "fab fa-trello", "fab fa-tripadvisor", "fab fa-tumblr", "fab fa-tumblr-square", "fab fa-twitch", "fab fa-twitter", "fab fa-twitter-square", "fab fa-typo3", "fab fa-uber", "fab fa-ubuntu", "fab fa-uikit", "fab fa-umbraco", "fab fa-uniregistry", "fab fa-unity", "fab fa-untappd", "fab fa-ups", "fab fa-usb", "fab fa-usps", "fab fa-ussunnah", "fab fa-vaadin", "fab fa-viacoin", "fab fa-viadeo", "fab fa-viadeo-square", "fab fa-viber", "fab fa-vimeo", "fab fa-vimeo-square", "fab fa-vimeo-v", "fab fa-vine", "fab fa-vk", "fab fa-vnv", "fab fa-vuejs", "fab fa-waze", "fab fa-weebly", "fab fa-weibo", "fab fa-weixin", "fab fa-whatsapp", "fab fa-whatsapp-square", "fab fa-whmcs", "fab fa-wikipedia-w", "fab fa-windows", "fab fa-wix", "fab fa-wizards-of-the-coast", "fab fa-wolf-pack-battalion", "fab fa-wordpress", "fab fa-wordpress-simple", "fab fa-wpbeginner", "fab fa-wpexplorer", "fab fa-wpforms", "fab fa-wpressr", "fab fa-xbox", "fab fa-xing", "fab fa-xing-square", "fab fa-y-combinator", "fab fa-yahoo", "fab fa-yammer", "fab fa-yandex", "fab fa-yandex-international", "fab fa-yarn", "fab fa-yelp", "fab fa-yoast", "fab fa-youtube", "fab fa-youtube-square", "fab fa-zhihu"];
/* harmony default export */ __webpack_exports__["default"] = (faIcons);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);

// Parses the gradient color string
var parseGradientColor = function parseGradientColor(gradientColor) {
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["#0000", "#0000"],
      _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || [0, 100];

    var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || [])[0];
    radialX = (gradientColor.match(/(?<=at )\d{1,3}/i) || [])[0];
    radialY = (gradientColor.match(/(?<=% )\d{1,3}/i) || [])[0];
    colorOnePosition = (gradientColor.match(/\d{1,3}(?=% ,)/gi) || [])[0];
    colorTwoPosition = (gradientColor.match(/\d{1,3}(?=%\))/gi) || [])[0];
  }

  return {
    gradientType: gradientType,
    angle: parseInt(angle),
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: parseInt(colorOnePosition),
    colorTwoPosition: parseInt(colorTwoPosition),
    radialShape: radialShape,
    radialX: parseInt(radialX),
    radialY: parseInt(radialY)
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var gradientColor = _ref.gradientColor,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("linear"),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("transparent"),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("transparent"),
      _useState8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(100),
      _useState10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(0),
      _useState12 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("ellipse"),
      _useState14 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(50),
      _useState16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(50),
      _useState18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_9__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
    className: "eb-gradient-control"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_toggle_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_8__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_8__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_8__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_toggle_button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_8__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_8__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_8__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: "First Color",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
        text: colorOne || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["BaseControl"], {
    label: "Second Color",
    className: "eb-color-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Tooltip"], {
        text: colorTwo || "default"
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ColorPicker"], {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
};

GradientColorControl.propTypes = {
  gradientColor: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: hasVal, generateBackgroundAttributes, generateDimensionsAttributes, generateTypographyAttributes, generateBorderShadowAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, generateTypographyStyles, generateDimensionsControlStyles, generateBorderShadowStyles, generateBackgroundControlStyles, generateResponsiveRangeAttributes, generateResponsiveRangeStyles, getFlipTransform, getButtonClasses, getBackgroundImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImage", function() { return getBackgroundImage; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
}; // function to generate Background control's attributes

var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultFill = defaults.isBgDefaultFill,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#7967ff,#c277f2)" : _defaults$defaultBgGr;
  var bgColorAttr = defaultFillColor ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    default: defaultFillColor
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "backgroundType"), {
    type: "string",
    default: isBgDefaultFill === true ? "fill" : "gradient"
  }), bgColorAttr), {}, (_objectSpread3 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "gradientColor"), {
    type: "string",
    default: defaultBgGradient
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "isBgOverly"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "overlyType"), {
    type: "string",
    default: "fill"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "overlyColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "".concat(controlName, "overlyGradient"), {
    type: "string",
    default: "linear-gradient(45deg,#000000cc,#00000000)"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    default: 100
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    default: "%"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    default: 0
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread3, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _objectSpread3));
}; // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread5;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left;
  var desktopTop = hasVal(top) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Top"), {
    type: "string",
    default: "".concat(top)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = hasVal(right) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Right"), {
    type: "string",
    default: "".concat(right)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = hasVal(bottom) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Bottom"), {
    type: "string",
    default: "".concat(bottom)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = hasVal(left) ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Left"), {
    type: "string",
    default: "".concat(left)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread5 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "TAB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "MOB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread5, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread5));
}; // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      default: "px"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      default: "em"
    }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {}); // console.log({ typoAttrs });

  return typoAttrs;
}; // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread6;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {} : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults;

  var result = _objectSpread(_objectSpread((_objectSpread6 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "borderStyle"), {
    type: "string",
    default: "none"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "blur"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "spread"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "inset"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "shadowType"), {
    type: "string",
    default: "normal"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    default: false
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread6, "".concat(controlName, "transitionTime"), {
    type: "string",
    default: "500"
  }), _objectSpread6), generateDimensionsAttributes("".concat(controlName, "Bdr_"), bdrDefaults)), generateDimensionsAttributes("".concat(controlName, "Rds_"), rdsDefaults)); // console.log("---generateBorderShadowAttributes:", { result });


  return result;
}; // helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown

var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  // console.log({ cssString });
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    // console.log({ match, g1, offset, string });
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref11) {
  var prefixConstant = _ref11.prefixConstant,
      defaultFontSize = _ref11.defaultFontSize,
      attributes = _ref11.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n\t\t\t".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n\t\t\t").concat(hasVal(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n\t\t\t").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n\t\t\t").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n\t\t\t").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n\t\t\t").concat(hasVal(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesTab = "\n\t\t\t".concat(hasVal(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesMobile = "\n\t\t\t".concat(hasVal(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n\t\t");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref12) {
  var controlName = _ref12.controlName,
      styleFor = _ref12.styleFor,
      attributes = _ref12.attributes;
  var dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")]; // console.log({ controlName, attributes });

  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (styleFor === "border") {
    dimensionStylesDesktop = "\n\t\t".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  } else if (styleFor === "border-radius") {
    dimensionStylesDesktop = "\n\t\t\t".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  } else {
    dimensionStylesDesktop = "\n\t\t".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  }

  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref13) {
  var controlName = _ref13.controlName,
      attributes = _ref13.attributes;

  var _generateDimensionsCo = generateDimensionsControlStyles({
    controlName: "".concat(controlName, "Bdr_"),
    styleFor: "border",
    attributes: attributes
  }),
      borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
      borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    controlName: "".concat(controlName, "Rds_"),
    styleFor: "border-radius",
    attributes: attributes
  }),
      radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$2 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$2 === void 0 ? 0 : _attributes$2,
      _attributes$3 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$3 === void 0 ? 0 : _attributes$3,
      _attributes$4 = attributes["".concat(controlName, "blur")],
      blur = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "spread")],
      spread = _attributes$5 === void 0 ? 0 : _attributes$5,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$6 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$6 === void 0 ? shadowColor : _attributes$6,
      _attributes$7 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$7 === void 0 ? hOffset : _attributes$7,
      _attributes$8 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$8 === void 0 ? vOffset : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$9 === void 0 ? blur : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$10 === void 0 ? spread : _attributes$10,
      transitionTime = attributes["".concat(controlName, "transitionTime")];
  var styesDesktop = "\n    ".concat(borderStylesDesktop, "\n    ").concat(radiusStylesDesktop, "\n\n\n    ").concat(borderStyle !== "none" && borderColor ? "\n        ".concat(borderStylesDesktop, "\n        border-color: ").concat(borderColor, ";\n        border-style: ").concat(borderStyle, ";\n        ") : " ", "\n\n    ").concat(shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " ", "\n\n    transition: ").concat(transitionTime ? "".concat(transitionTime / 1000, "s") : ".5s", ";\n\n  ");
  var styesTab = "  \n    ".concat(borderColor ? borderStylesTab : " ", "\n    ").concat(radiusStylesTab, "\n  ");
  var styesMobile = "\n    ".concat(borderColor ? borderStylesMobile : " ", "\n    ").concat(radiusStylesMobile, "\n  ");
  var stylesHover = "\n    ".concat(hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " ", "\n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHover: stylesHover
  };
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref14) {
  var controlName = _ref14.controlName,
      attributes = _ref14.attributes;
  var backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      _attributes$11 = attributes["".concat(controlName, "overlyColor")],
      overlyColor = _attributes$11 === void 0 ? "#00000080" : _attributes$11,
      overlyType = attributes["".concat(controlName, "overlyType")],
      isBgOverly = attributes["".concat(controlName, "isBgOverly")],
      overlyGradient = attributes["".concat(controlName, "overlyGradient")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")];
  var backgroundStylesDesktop = "\n    background-image: ".concat(backgroundType === "image" && bgImageURL ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n\n    ").concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n\n        ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n\n        ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n\n        ") : " ", "\n  \n\t\t").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n\n  ");
  var backgroundStylesTab = "\n    ".concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n\n        background-attachment: scroll;\n\n        ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n\n        ") : " ", "\n\n  ");
  var backgroundStylesMobile = "\n    ".concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n\n        ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n\n        ") : " ", "\n\n  ");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    isBgOverly: isBgOverly,
    overlyType: overlyType,
    overlyColor: overlyColor,
    overlyGradient: overlyGradient,
    backgroundType: backgroundType
  };
}; // function to generate responsive range controller attributes for multiple range control based on the array of prefix

var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _objectSpread8;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var desktop = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(defaults) !== undefined && defaults !== "" ? _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Range"), {
    type: "string",
    default: "".concat(defaults)
  }) : _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Range"), {
    type: "string"
  });

  var result = _objectSpread(_objectSpread(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), desktop), {}, (_objectSpread8 = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread8, "TAB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread8, "TAB".concat(controlName, "Range"), {
    type: "string"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread8, "MOB".concat(controlName, "Unit"), {
    type: "string",
    default: "px"
  }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_objectSpread8, "MOB".concat(controlName, "Range"), {
    type: "string"
  }), _objectSpread8)); // console.log(result);


  return _objectSpread({}, result);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref17) {
  var controlName = _ref17.controlName,
      property = _ref17.property,
      attributes = _ref17.attributes;
  var desktopSizeUnit = attributes["".concat(controlName, "Unit")],
      desktopRange = attributes["".concat(controlName, "Range")],
      TABsizeUnit = attributes["TAB".concat(controlName, "Unit")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var size = isNaN(parseFloat(desktopRange)) ? "" : desktopSizeUnit;
  var rangeStylesDesktop = desktopRange ? property + ":" + desktopRange + size + ";" : "";
  var rangeStylesTab = TABrange ? property + ":" + TABrange + TABsizeUnit + ";" : "";
  var rangeStylesMobile = MOBrange ? property + ":" + MOBrange + MOBsizeUnit + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
}; // Return flilp value based on type

var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};
var getBackgroundImage = function getBackgroundImage(type, gradientValue, imageURL) {
  switch (type) {
    case "fill":
      return "none";

    case "gradient":
      return gradientValue;

    case "image":
      if (imageURL) {
        return "url(".concat(imageURL, ")");
      }

      return "none";
  }
};

/***/ }),

/***/ "./util/image-avatar/index.js":
/*!************************************!*\
  !*** ./util/image-avatar/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);




var ImageAvatar = function ImageAvatar(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ImageAvatar);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "eb-range-controller-container"
  }, children, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);




var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useState"])(defaultSelected || options[0]),
      _useState2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    onChange(selected.value);
  }, [selected]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("label", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/FontPicker.js":
/*!**************************************************!*\
  !*** ./util/typography-control-v2/FontPicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");




/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl; // import { __ } from "@wordpress/i18n";
// import { withInstanceId } from "@wordpress/compose";
// import { BaseControl } from "@wordpress/components";

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_3__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("select", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["createElement"])("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control-v2/Icon.js":
/*!********************************************!*\
  !*** ./util/typography-control-v2/Icon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


var TypographyIcon = function TypographyIcon() {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TypographyIcon);

/***/ }),

/***/ "./util/typography-control-v2/WithResButtons.js":
/*!******************************************************!*\
  !*** ./util/typography-control-v2/WithResButtons.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typoHelpers */ "./util/typography-control-v2/typoHelpers.js");


function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrap_res ".concat(className || " ")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "resIcons"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_1__["handleDesktopBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_1__["handleTabBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_1__["handleMobileBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: FONTS, sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("100"),
  value: "100"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("200"),
  value: "200"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("300"),
  value: "300"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("400"),
  value: "400"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("500"),
  value: "500"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("600"),
  value: "600"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("700"),
  value: "700"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("800"),
  value: "800"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lowercase"),
  value: "lowercase"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Capitalize"),
  value: "capitalize"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "initial"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overline"),
  value: "overline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Through"),
  value: "line-through"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline"),
  value: "underline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline Oveline"),
  value: "underline overline"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./unit-control */ "./util/typography-control-v2/unit-control.js");
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control-v2/FontPicker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Icon */ "./util/typography-control-v2/Icon.js");
/* harmony import */ var _WithResButtons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WithResButtons */ "./util/typography-control-v2/WithResButtons.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");










function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])(baseLabel),
    className: "eb-typography-base"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_Icon__WEBPACK_IMPORTED_MODULE_6__["default"], null));
    },
    renderContent: function renderContent() {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_FontPicker__WEBPACK_IMPORTED_MODULE_5__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_WithResButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "forFontSize",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_WithResButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "forLetterSpacing",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_WithResButtons__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "forLineHeight",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_unit_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_8__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/typography-control-v2/typoHelpers.js":
/*!***************************************************!*\
  !*** ./util/typography-control-v2/typoHelpers.js ***!
  \***************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};
var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};
var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

/***/ }),

/***/ "./util/typography-control-v2/unit-control.js":
/*!****************************************************!*\
  !*** ./util/typography-control-v2/unit-control.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);


/**
 * WordPress dependencies
 */
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/withResBtns/helpers.js":
/*!*************************************!*\
  !*** ./util/withResBtns/helpers.js ***!
  \*************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};
var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};
var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

/***/ }),

/***/ "./util/withResBtns/index.js":
/*!***********************************!*\
  !*** ./util/withResBtns/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResBtns; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./util/withResBtns/helpers.js");


function WithResBtns(_ref) {
  var children = _ref.children,
      resRequiredProps = _ref.resRequiredProps,
      label = _ref.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "newWithResWrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "resBtns"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "resLabel"
  }, label), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleDesktopBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleTabBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleMobileBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/withResButtons/helpers.js":
/*!****************************************!*\
  !*** ./util/withResButtons/helpers.js ***!
  \****************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};
var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};
var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

/***/ }),

/***/ "./util/withResButtons/index.js":
/*!**************************************!*\
  !*** ./util/withResButtons/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ "./util/withResButtons/helpers.js");


function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resRequiredProps = _ref.resRequiredProps;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrap_res ".concat(className || " ")
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "resIcons"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleDesktopBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleTabBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    onClick: function onClick() {
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_1__["handleMobileBtnClick"])({
        setAttributes: setAttributes
      });
    },
    class: "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["ReactDOM"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map