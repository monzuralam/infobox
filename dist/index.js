/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
 * Copyright (c) 2022 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js"),__webpack_require__(/*! react-dom */ "react-dom")):0}(window,(function(e,t,r,n,o){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},,,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(2),u=r.n(c),s=r(3);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}(r);function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return m(h(e=t.call.apply(t,[this].concat(a))),"handleClick",(function(){e.props.onClick()})),m(h(e),"handleKeyDown",(function(t){32!==t.keyCode&&13!==t.keyCode||e.props.onClick()})),m(h(e),"handleDelete",(function(t,r){t.stopPropagation(),e.props.handleDeleteValue(r)})),m(h(e),"handleDeleteKeyboard",(function(t,r){32!==t.keyCode&&13!==t.keyCode||e.props.handleDeleteValue(r)})),m(h(e),"renderEmptyIcon",(function(){return o.a.createElement("span",{className:"rfipbtn__icon--empty"},e.props.noSelectedPlaceholder)})),e}return function(e,t,r){t&&p(e.prototype,t)}(r,[{key:"renderIcon",value:function(e){var t=this;return""===e||null==e?this.renderEmptyIcon():o.a.createElement("span",{className:"rfipbtn__icon",key:e},o.a.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),o.a.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map((function(t){return e.renderIcon(t)})):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=u()("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=u()(this.props.className);return o.a.createElement("div",f({className:r,ref:this.props.domRef},e),o.a.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),o.a.createElement("div",{className:t},o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}]),r}();m(g,"propTypes",{className:i.a.string.isRequired,isOpen:i.a.bool.isRequired,onClick:i.a.func.isRequired,domRef:i.a.object.isRequired,isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,renderIcon:i.a.func.isRequired,handleDeleteValue:i.a.func.isRequired,noSelectedPlaceholder:i.a.string.isRequired});var b=g;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.apply(this,arguments)}return function(e,t,r){t&&P(e.prototype,t)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipcategory"},o.a.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map((function(e,t){return o.a.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)}))),o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}]),r}();!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(C,"propTypes",{handleCategory:i.a.func.isRequired,value:i.a.number.isRequired,categories:i.a.arrayOf(i.a.string).isRequired});var S=C,R=function(e){return o.a.createElement("div",{className:"rfipsearch"},o.a.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};R.propTypes={handleSearch:i.a.func.isRequired,value:i.a.string.isRequired,placeholder:i.a.string.isRequired};var E=R;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}}function x(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),F(B(n=t.call(this,e)),"handleChangePage",(function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=n.props.currentPage,a=n.state.totalPage;null!==r?"next"===r?o+=1:o-=1:o=parseInt(e.target.value,10)-1,o<0&&(o=0),o>a-1&&(o=a-1),t=o+1,null===r&&Number.isNaN(o)&&(o=0,t=""),n.setState({viewPage:t}),n.props.handleChangePage(o)})),F(B(n),"handlePageKeyBoard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangePage({},t)})),F(B(n),"handleChangeValue",(function(e){n.props.handleChangeValue(e)})),F(B(n),"handleValueKeyboard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangeValue(t)})),n.state={viewPage:n.props.currentPage+1},n}return function(e,t,r){t&&M(e.prototype,t),r&&M(e,r)}(r,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?o.a.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},o.a.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?o.a.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},o.a.createElement("i",{className:"fipicon-angle-right"}))):null;return o.a.createElement("div",{className:"rfipicons__pager"},o.a.createElement("div",{className:"rfipicons__num"},o.a.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),o.a.createElement("span",{className:"rfipicons__sp"},"/"),o.a.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),o.a.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map((function(t,r){var n=u()("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return o.a.createElement("span",{className:n,key:t,title:e.state.titleView[r]},o.a.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))})):o.a.createElement("span",{className:"rfipicons__icon--error"},o.a.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return o.a.createElement("div",{className:"rfipicons"},this.renderPager(),o.a.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),o=r.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),a=r.getActiveIcons(n,o,e.currentSearch),i=a.activeIcons,c=a.activeTitles,u=e.currentPage,s=e.iconsPerPage,l={iconView:r.getCurrentViewIcons(i,s,u),titleView:r.getCurrentViewIcons(c,s,u),totalPage:Math.ceil(i.length/s)};return""!==t.viewPage&&(l.viewPage=e.currentPage+1),l}},{key:"getActiveIcons",value:function(e,t,r){var n=D(e),o=D(t);if(""===r||null===r)return{activeIcons:n,activeTitles:o};var a=[],i=[];return n.forEach((function(e,n){(function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var o=0,a=0;o<n;o++){for(var i=e.codePointAt(o);a<r;)if(t.codePointAt(a++)===i)continue e;return!1}return!0})(r,t[n])&&(a.includes(e)||a.push(e),i.includes(t[n])||i.push(t[n]))})),{activeIcons:a,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,o=function(e){return null===e?"null":"object"!==_(e)||Array.isArray(e)?Array.isArray(e)?"array":_(e):"object"}(r);if(Array.isArray(t)){if("object"!==o)throw new x(o,"object")}else if("array"!==o)throw new x(o,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return k(e);if(null!==t)return void 0!==e[t]?k(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return Object.keys(n).forEach((function(e){r=[].concat(k(r),k(n[e]))})),r}(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,o=(r+1)*t;return e.slice(n,o)}}]),r}();F(L,"propTypes",{categories:i.a.arrayOf(i.a.string),currentCategory:i.a.number,isMulti:i.a.bool.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,currentSearch:i.a.string.isRequired,handleChangeValue:i.a.func.isRequired,currentPage:i.a.number.isRequired,iconsPerPage:i.a.number.isRequired,handleChangePage:i.a.func.isRequired,renderIcon:i.a.func.isRequired,noIconPlaceholder:i.a.string.isRequired}),F(L,"defaultProps",{categories:null,currentCategory:null,search:null});var H=L;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=G(e);if(t){var o=G(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),X(Y(n=t.call(this,e)),"handleCategory",(function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),n.props.handleChangeCategory(t),n.props.handleChangePage(0)})),X(Y(n),"handleSearch",(function(e){var t=e.target.value;n.props.handleChangeSearch(t)})),n.state={},n}return function(e,t,r){t&&$(e.prototype,t),r&&$(e,r)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?o.a.createElement(E,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?o.a.createElement(S,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,o.a.createElement(H,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=function(e){return Array.isArray(e)?null:Object.keys(e)}(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),r}();X(J,"propTypes",{isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.any)]).isRequired,currentCategory:i.a.number.isRequired,currentPage:i.a.number.isRequired,currentSearch:i.a.string.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.object,i.a.arrayOf(i.a.string)]),showCategory:i.a.bool.isRequired,showSearch:i.a.bool.isRequired,iconsPerPage:i.a.number.isRequired,allCatPlaceholder:i.a.string.isRequired,searchPlaceholder:i.a.string.isRequired,noIconPlaceholder:i.a.string.isRequired,renderIcon:i.a.func.isRequired,handleChangeValue:i.a.func.isRequired,handleChangeCategory:i.a.func.isRequired,handleChangePage:i.a.func.isRequired,handleChangeSearch:i.a.func.isRequired}),X(J,"defaultProps",{search:null});var Q=J,Z=r(4);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=oe(e);if(t){var o=oe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ee(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ae(ne(n=t.call(this,e)),"syncPortalPosition",(function(){n.resetPortalPosition(),n.fixWindowOverflow()})),ae(ne(n),"fixWindowOverflow",(function(){var e=n.props.domRef.current.offsetWidth,t=n.props.domRef.current.offsetHeight,r=window,o=r.innerWidth,a=r.pageYOffset,i=document.documentElement.clientHeight,c=N(n.props.domRef.current),u=c.left,s=c.top,l=N("self"===n.state.appendRoot?n.props.domRef.current:n.state.appendRoot),f=n.props.btnRef.current,p=n.props.domRef.current,d=N(f),h=getComputedStyle(f),y=(parseInt(h.borderTop,10)||0)+(parseInt(h.borderBottom,10)||0);if(u+e>o-20){var m=d.left+n.props.btnRef.current.offsetWidth-(e+l.left);m+l.left<0&&(m=10-l.left),p.style.left="".concat(m,"px")}t+s-a>i&&d.top-t>0&&("self"===n.state.appendRoot?p.style.top="-".concat(t-y,"px"):p.style.top="".concat(d.top+y-t,"px"))})),n.state={},n.debouncedSyncPortalPosition=function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){return e.apply(n,o)}),t)}}(n.syncPortalPosition,250),n}return function(e,t,r){t&&te(e.prototype,t),r&&te(e,r)}(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=N(t),n=N(this.state.appendRoot),o=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+o,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=u()(this.props.className,this.state.portalClasses),t=o.a.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:Object(Z.createPortal)(t,this.state.appendRoot)}}],[{key:"getDerivedStateFromProps",value:function(e){var t=r.calculateAppendAndClass(e.appendRoot);return{appendRoot:t.appendRoot,portalClasses:t.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=u()({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),r}();ae(ie,"propTypes",{appendRoot:i.a.oneOfType([i.a.bool,i.a.string]),children:i.a.node.isRequired,domRef:i.a.object.isRequired,btnRef:i.a.object.isRequired,className:i.a.string.isRequired}),ae(ie,"defaultProps",{appendRoot:!1});var ce=ie;function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?le(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=[],ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=he(e);if(t){var o=he(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ue(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return de(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ye(de(n=t.call(this,e)),"handleOuterClick",(function(e){var t=e.target;n.isClickWithin(t)||n.closeDropdown()})),ye(de(n),"handleEscapeKeyboard",(function(e){27===e.keyCode&&n.closeDropdown()})),ye(de(n),"isClickWithin",(function(e){return"fipicon-angle-left"===e.className||"fipicon-angle-right"===e.className||"rfipicons__label"===e.className||n.fipButtonRef.current.contains(e)||n.fipDropDownRef.current&&n.fipDropDownRef.current.contains(e)})),ye(de(n),"handleToggle",(function(){n.setState((function(e){return n.handleDropDown(!e.isOpen,!1)}))})),ye(de(n),"closeDropdown",(function(){n.handleDropDown(!1)})),ye(de(n),"handleDropDown",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o={isOpen:e};return o.elemClass=r.getDerivedClassName("rfip",n.props.theme,n.props.isMulti,e),o.btnClass=r.getDerivedClassName("rfipbtn",n.props.theme,n.props.isMulti,e),o.ddClass=r.getDerivedClassName("rfipdropdown",n.props.theme,n.props.isMulti,e),t&&n.setState(o),o})),ye(de(n),"handleChangeValue",(function(e){var t;n.props.isMulti?(t=se(n.state.value)).includes(e)?(t=t.filter((function(t){return t!==e}))).length||(t=me):t.push(e):t=e===n.state.value?"":e,n.setState({value:t,isOpen:!n.props.closeOnSelect}),n.props.onChange(t)})),ye(de(n),"handleDeleteValue",(function(e){var t;t=n.props.isMulti?n.state.value.filter((function(t){return t!==e})):r.getDerivedValue(t,n.props.isMulti),n.setState({value:t}),n.props.onChange(t)})),ye(de(n),"handleChangePage",(function(e){n.setState({currentPage:e})})),ye(de(n),"handleChangeCategory",(function(e){n.setState({currentCategory:e,currentPage:0})})),ye(de(n),"handleChangeSearch",(function(e){n.setState({currentSearch:e,currentPage:0})})),ye(de(n),"resetPortalStyle",(function(e){["maxHeight","paddingTop","paddingBottom"].forEach((function(t){e.style[t]=null}))})),ye(de(n),"handlePortalEnter",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t);n.fipPortalComputedStyle={height:r.height,paddingTop:r.paddingTop,paddingBottom:r.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach((function(e){t.style[e]="0px"}))})),ye(de(n),"handlePortalEntering",(function(e){var t=e.childNodes[0];t.style.maxHeight=n.fipPortalComputedStyle.height,t.style.paddingTop=n.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=n.fipPortalComputedStyle.paddingBottom})),ye(de(n),"handlePortalEntered",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t),n.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()})),ye(de(n),"handlePortalExit",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t).height;t.style.maxHeight=r})),ye(de(n),"handlePortalExiting",(function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"})),ye(de(n),"renderIcon",(function(e){if("function"==typeof n.props.renderFunc)return n.props.renderFunc(e);if("class"===n.props.renderUsing)return o.a.createElement("i",{className:e});var t=ye({},n.props.renderUsing,n.props.convertHex?function(e){return String.fromCodePoint(parseInt(e,10))}(e):e);return o.a.createElement("i",t)})),n.fipButtonRef=o.a.createRef(),n.fipDropDownRef=o.a.createRef(),n.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},n.fipPortalComputedStyle=null,n}return function(e,t,r){t&&fe(e.prototype,t),r&&fe(e,r)}(r,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach((function(t){document.addEventListener(t,e.handleOuterClick,!1)})),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach((function(t){document.removeEventListener(t,e.handleOuterClick,!1)})),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return o.a.createElement("div",{className:this.state.elemClass,ref:this.fipRef},o.a.createElement(b,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),o.a.createElement(s.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},o.a.createElement(ce,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},o.a.createElement(Q,e))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return n.elemClass=r.getDerivedClassName("rfip",e.theme,e.isMulti,t.isOpen),n.btnClass=r.getDerivedClassName("rfipbtn",e.theme,e.isMulti,t.isOpen),n.ddClass=r.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,t.isOpen),n.value=r.getDerivedValue(e.value,e.isMulti),e.showCategory||0===t.currentCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||""===t.currentSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return u()(e,"".concat(e,"--").concat(t),ye({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?se(e):me:"number"!=typeof e&&"string"!=typeof e&&(r=""),r}}]),r}();ye(ge,"propTypes",{icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),iconsPerPage:i.a.number,theme:i.a.string,onChange:i.a.func.isRequired,showCategory:i.a.bool,showSearch:i.a.bool,value:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.number,i.a.string]),isMulti:i.a.bool,renderUsing:i.a.string,convertHex:i.a.bool,renderFunc:i.a.func,appendTo:i.a.oneOfType([i.a.bool,i.a.string]),allCatPlaceholder:i.a.string,searchPlaceholder:i.a.string,noIconPlaceholder:i.a.string,noSelectedPlaceholder:i.a.string,closeOnSelect:i.a.bool}),ye(ge,"defaultProps",{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}),ye(ge,"displayName","FontIconPicker");var be=ge;t.default=be}]).default}));
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");





const {
  generateDimensionsAttributes,
  generateTypographyAttributes,
  generateBackgroundAttributes,
  generateBorderShadowAttributes,
  generateResponsiveRangeAttributes
} = window.EBInfoboxControls;
const attributes = {
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    default: "Desktop"
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
  // isOverlay is to check if a overlay on the block's background should exist ⬇
  isOverlay: {
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
    default: "gradient"
  },
  //
  numIconBgColor: {
    type: "string",
    default: "#0003"
  },
  //
  numIconBgGradient: {
    type: "string",
    default: "linear-gradient(45deg,#ffc2de,#ff46a1)"
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
    default: "far fa-gem" // default: "far fa-sun",

  },
  //
  number: {
    type: "string"
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
    default: true
  },
  //
  isInfoClick: {
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
  buttonHvrTextColor: {
    type: "string"
  },
  // //
  // buttonBgColor: {
  // 	type: "string",
  // },
  //
  btnEffect: {
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
    default: "Write a short description, that will describe the title or something informational and useful"
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
  btnAlignment: {
    type: "string"
  },
  // Responsive Range Controller attributes
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaIconSize, {
    defaultRange: 50
  }),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageWidth, {
    defaultRange: 300
  }),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageHeight),
  ...generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaContentGap, {
    defaultRange: 20,
    noUnits: true
  }),
  // typography attributes
  ...generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__)),
  // dimensions Control related Attributes
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBackground, {
    top: 20,
    bottom: 20,
    right: 20,
    left: 20
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgRadius, {
    top: 20,
    bottom: 20,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgMargin, {
    top: 15,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.buttonPadding, {
    top: 15,
    bottom: 15,
    right: 30,
    left: 30,
    isLinked: false
  }),
  // ...generateDimensionsAttributes(buttonRadius, {
  // 	top: 10,
  // 	bottom: 10,
  // 	right: 10,
  // 	left: 10,
  // }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.titlePadding, {
    top: 10,
    bottom: 10,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.subTitlePadding, {
    top: 10,
    bottom: 10,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.contentPadding, {
    top: 10,
    bottom: 50,
    isLinked: false
  }),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperMargin),
  ...generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperPadding, {
    top: 50,
    bottom: 70,
    right: 30,
    left: 30,
    isLinked: false
  }),
  // ...generateDimensionsAttributes(wrp_border, {
  // 	top: 0,
  // 	bottom: 0,
  // 	right: 0,
  // 	left: 0,
  // }),
  // ...generateDimensionsAttributes(wrp_radius),
  ...generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.btnBdShd, {
    // bdrDefaults: {
    // 	top: 10,
    // 	bottom: 10,
    // 	right: 10,
    // 	left: 10,
    // },
    rdsDefaults: {
      top: 10,
      bottom: 10,
      right: 10,
      left: 10
    } // noShadow: true,
    // noBorder: true,

  }),
  ...generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.wrpBdShadow, {// bdrDefaults: {
    // 	top: 10,
    // 	bottom: 0,
    // 	right: 10,
    // 	left: 0,
    // 	isLinked: false,
    // },
    // rdsDefaults: {
    // 	top: 0,
    // 	bottom: 50,
    // 	right: 500,
    // 	left: 1000,
    // 	isLinked: false,
    // },
    // noShadow: true,
    // noBorder: true,
    // defaultBdrColor: "#f2f",
    // defaultBdrStyle: "solid",
  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.infoWrapBg, {
    isBgDefaultGradient: true,
    defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)" // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  }),
  // background attributes ⬇
  ...generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.infoBtnBg, {
    defaultFillColor: "#E1D8FF",
    defaultBgGradient: "linear-gradient(45deg, rgba(120,102,255,0.8) 0% , rgba(195,120,242,0.4) 100%)",
    forButton: true // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'
    // isBgDefaultGradient: true,

  })
};
/* harmony default export */ __webpack_exports__["default"] = (attributes);

/***/ }),

/***/ "./src/components/infobox-edit.js":
/*!****************************************!*\
  !*** ./src/components/infobox-edit.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoboxContainer; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);




function InfoboxContainer(_ref) {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    blockId,
    media,
    selectedIcon,
    number,
    imageUrl,
    imageId,
    titleTag,
    title,
    enableSubTitle,
    subTitleTag,
    subTitle,
    enableDescription,
    description,
    enableButton,
    isInfoClick,
    infoboxLink,
    buttonText,
    //
    btnEffect
  } = attributes;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-icon": selectedIcon,
    className: `eb-infobox-icon-data-selector  ${selectedIcon}`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: _ref2 => {
      let {
        id,
        url
      } = _ref2;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: _ref3 => {
      let {
        open
      } = _ref3;

      if (!imageUrl) {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-infobox-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
          className: "eb-infobox-image",
          src: imageUrl
        });
      }
    }
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: titleTag,
    className: "title",
    value: title,
    onChange: title => setAttributes({
      title
    })
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle,
    onChange: subTitle => setAttributes({
      subTitle
    })
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "p",
    className: "description",
    value: description,
    onChange: description => setAttributes({
      description
    })
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink // style={{ pointerEvents: "none" }}
    ,
    className: `infobox-btn ${btnEffect || " "}`
  }, buttonText)) : null)));
}

/***/ }),

/***/ "./src/components/infobox-save.js":
/*!****************************************!*\
  !*** ./src/components/infobox-save.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoboxContainer; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);


function InfoboxContainer(_ref) {
  let {
    requiredProps
  } = _ref;
  const {
    blockId,
    selectedIcon,
    media,
    number,
    imageUrl,
    infoboxLink,
    enableSubTitle,
    enableDescription,
    enableButton,
    //
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    //
    btnEffect
  } = requiredProps;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: `${blockId} eb-infobox-wrapper`
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "infobox-wrapper-inner"
  }, media === "icon" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-icon number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    "data-icon": selectedIcon,
    className: `eb-infobox-icon-data-selector  ${selectedIcon}`
  }))) : null, media === "number" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-num-wrapper number-or-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
    className: "eb-infobox-number"
  }, number))) : null, media === "image" ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "icon-img-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-image-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("img", {
    className: "eb-infobox-image",
    src: imageUrl,
    alt: "macbook"
  }))) : null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "contents-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: titleTag,
    className: "title",
    value: title
  }), enableSubTitle ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: subTitleTag,
    className: "subtitle",
    value: subTitle
  }) : null, enableDescription ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "p",
    className: "description",
    value: description
  }) : null, enableButton && !isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-infobox-btn-wrapper"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    className: `infobox-btn  ${btnEffect || " "}`
  }, buttonText)) : null)));
}

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "infoWrapBg": function() { return /* binding */ infoWrapBg; },
/* harmony export */   "infoBtnBg": function() { return /* binding */ infoBtnBg; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
const infoWrapBg = "wrp_";
const infoBtnBg = "btbg_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrpBdShadow": function() { return /* binding */ wrpBdShadow; },
/* harmony export */   "btnBdShd": function() { return /* binding */ btnBdShd; }
/* harmony export */ });
const wrpBdShadow = "wrp_";
const btnBdShd = "btbds_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediaBackground": function() { return /* binding */ mediaBackground; },
/* harmony export */   "mediaBgRadius": function() { return /* binding */ mediaBgRadius; },
/* harmony export */   "mediaBgMargin": function() { return /* binding */ mediaBgMargin; },
/* harmony export */   "buttonPadding": function() { return /* binding */ buttonPadding; },
/* harmony export */   "buttonRadius": function() { return /* binding */ buttonRadius; },
/* harmony export */   "titlePadding": function() { return /* binding */ titlePadding; },
/* harmony export */   "subTitlePadding": function() { return /* binding */ subTitlePadding; },
/* harmony export */   "contentPadding": function() { return /* binding */ contentPadding; },
/* harmony export */   "wrapperMargin": function() { return /* binding */ wrapperMargin; },
/* harmony export */   "wrapperPadding": function() { return /* binding */ wrapperPadding; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
const mediaBackground = "mediaBgSize";
const mediaBgRadius = "mediaBgRadius";
const mediaBgMargin = "mediaBgMargin";
const buttonPadding = "buttonPadding"; // export const buttonRadius = "buttonRadius";
// 

const buttonRadius = "buttonRadius"; // 

const titlePadding = "titlePadding";
const subTitlePadding = "subTitlePadding";
const contentPadding = "contentPadding";
const wrapperMargin = "wrapperMargin";
const wrapperPadding = "wrapperPadding"; // export const wrp_border = "WRPborder";
// export const wrp_radius = "WRPradius";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LAYOUT_TYPES": function() { return /* binding */ LAYOUT_TYPES; },
/* harmony export */   "MEDIA_TYPES": function() { return /* binding */ MEDIA_TYPES; },
/* harmony export */   "CONTENTS_ALIGNMENTS": function() { return /* binding */ CONTENTS_ALIGNMENTS; },
/* harmony export */   "MEDIA_ALIGNMENTS_ON_FLEX_COLUMN": function() { return /* binding */ MEDIA_ALIGNMENTS_ON_FLEX_COLUMN; },
/* harmony export */   "MEDIA_ALIGNMENTS_ON_FLEX_ROW": function() { return /* binding */ MEDIA_ALIGNMENTS_ON_FLEX_ROW; },
/* harmony export */   "ICON_IMAGE_BG_TYPES": function() { return /* binding */ ICON_IMAGE_BG_TYPES; },
/* harmony export */   "sizeUnitTypes": function() { return /* binding */ sizeUnitTypes; },
/* harmony export */   "imgHeightUnits": function() { return /* binding */ imgHeightUnits; },
/* harmony export */   "HEADER_TAGS": function() { return /* binding */ HEADER_TAGS; },
/* harmony export */   "BACKGROUND_TYPES": function() { return /* binding */ BACKGROUND_TYPES; },
/* harmony export */   "BACKGROUND_SIZES": function() { return /* binding */ BACKGROUND_SIZES; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "SHADOW_HOVER_OPTIONS": function() { return /* binding */ SHADOW_HOVER_OPTIONS; },
/* harmony export */   "LETTER_SPACING_LINE_HEIGHT_UNITS": function() { return /* binding */ LETTER_SPACING_LINE_HEIGHT_UNITS; },
/* harmony export */   "HOVER_EFFECT": function() { return /* binding */ HOVER_EFFECT; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

const LAYOUT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "essential-blocks"),
  value: "preset2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "preset3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "preset4"
}]; // export const MEDIA_TYPES = ["image", "icon", "number", "none"];

const MEDIA_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("image", "essential-blocks"),
  value: "image"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("icon", "essential-blocks"),
  value: "icon"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text", "essential-blocks"),
  value: "number"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("none", "essential-blocks"),
  value: "none"
}];
const CONTENTS_ALIGNMENTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
const MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "flex-end"
}];
const MEDIA_ALIGNMENTS_ON_FLEX_ROW = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "flex-end"
}];
const ICON_IMAGE_BG_TYPES = [{
  label: "Fill",
  value: "fill"
}, {
  label: "Gradient",
  value: "gradient"
}];
const sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
const imgHeightUnits = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "vh",
  value: "vh"
}];
const HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];
const BACKGROUND_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
const BACKGROUND_SIZES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "essential-blocks"),
  value: "contain"
}];
const BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
const SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];
const LETTER_SPACING_LINE_HEIGHT_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
const HOVER_EFFECT = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Hover Effect", "essential-blocks"),
  value: ""
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow", "essential-blocks"),
  value: "hvr-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shrink", "essential-blocks"),
  value: "hvr-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse", "essential-blocks"),
  value: "hvr-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Grow", "essential-blocks"),
  value: "hvr-pulse-grow"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pulse Shrink", "essential-blocks"),
  value: "hvr-pulse-shrink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Push", "essential-blocks"),
  value: "hvr-push"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Pop", "essential-blocks"),
  value: "hvr-pop"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce In", "essential-blocks"),
  value: "hvr-bounce-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce Out", "essential-blocks"),
  value: "hvr-bounce-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rotate", "essential-blocks"),
  value: "hvr-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Grow Rotate", "essential-blocks"),
  value: "hvr-grow-rotate"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Float", "essential-blocks"),
  value: "hvr-float"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sink", "essential-blocks"),
  value: "hvr-sink"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bob", "essential-blocks"),
  value: "hvr-bob"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Hang", "essential-blocks"),
  value: "hvr-hang"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew", "essential-blocks"),
  value: "hvr-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Forward", "essential-blocks"),
  value: "hvr-skew-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Skew Backward", "essential-blocks"),
  value: "hvr-skew-backward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Horizontal", "essential-blocks"),
  value: "hvr-wobble-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Vertical", "essential-blocks"),
  value: "hvr-wobble-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Bottom Right", "essential-blocks"),
  value: "hvr-wobble-to-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble To Top Right", "essential-blocks"),
  value: "hvr-wobble-to-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Top", "essential-blocks"),
  value: "hvr-wobble-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Bottom", "essential-blocks"),
  value: "hvr-wobble-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Wobble Skew", "essential-blocks"),
  value: "hvr-wobble-skew"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz", "essential-blocks"),
  value: "hvr-buzz"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Buzz Out", "essential-blocks"),
  value: "hvr-buzz-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Forward", "essential-blocks"),
  value: "hvr-forward"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fade", "essential-blocks"),
  value: "hvr-fade"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Back Pulse", "essential-blocks"),
  value: "hvr-back-pulse"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Right", "essential-blocks"),
  value: "hvr-sweep-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Left", "essential-blocks"),
  value: "hvr-sweep-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Bottom", "essential-blocks"),
  value: "hvr-sweep-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Sweep To Top", "essential-blocks"),
  value: "hvr-sweep-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Right", "essential-blocks"),
  value: "hvr-bounce-to-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Left", "essential-blocks"),
  value: "hvr-bounce-to-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Bottom", "essential-blocks"),
  value: "hvr-bounce-to-bottom"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bounce To Top", "essential-blocks"),
  value: "hvr-bounce-to-top"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial Out", "essential-blocks"),
  value: "hvr-radial-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Radial In", "essential-blocks"),
  value: "hvr-radial-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle In", "essential-blocks"),
  value: "hvr-rectangle-in"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Rectangle Out", "essential-blocks"),
  value: "hvr-rectangle-out"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Horizontal", "essential-blocks"),
  value: "hvr-shutter-in-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Horizontal", "essential-blocks"),
  value: "hvr-shutter-out-horizontal"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter In Vertical", "essential-blocks"),
  value: "hvr-shutter-in-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Shutter Out Vertical", "essential-blocks"),
  value: "hvr-shutter-out-vertical"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Left", "essential-blocks"),
  value: "hvr-curl-top-left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Top Right", "essential-blocks"),
  value: "hvr-curl-top-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Right", "essential-blocks"),
  value: "hvr-curl-bottom-right"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Curl Bottom Left", "essential-blocks"),
  value: "hvr-curl-bottom-left"
}];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mediaIconSize": function() { return /* binding */ mediaIconSize; },
/* harmony export */   "mediaImageWidth": function() { return /* binding */ mediaImageWidth; },
/* harmony export */   "mediaImageHeight": function() { return /* binding */ mediaImageHeight; },
/* harmony export */   "mediaContentGap": function() { return /* binding */ mediaContentGap; }
/* harmony export */ });
const mediaIconSize = "mIconZ";
const mediaImageWidth = "mImgW";
const mediaImageHeight = "mImgH";
const mediaContentGap = "mcSp";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_number": function() { return /* binding */ typoPrefix_number; },
/* harmony export */   "typoPrefix_title": function() { return /* binding */ typoPrefix_title; },
/* harmony export */   "typoPrefix_subTitle": function() { return /* binding */ typoPrefix_subTitle; },
/* harmony export */   "typoPrefix_content": function() { return /* binding */ typoPrefix_content; },
/* harmony export */   "typoPrefix_buttonText": function() { return /* binding */ typoPrefix_buttonText; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
const typoPrefix_number = "number";
const typoPrefix_title = "title";
const typoPrefix_subTitle = "subTitle";
const typoPrefix_content = "content";
const typoPrefix_buttonText = "buttonText";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_infobox_edit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/infobox-edit */ "./src/components/infobox-edit.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

const {
  //
  softMinifyCssStrings,
  generateBackgroundControlStyles,
  generateDimensionsControlStyles,
  generateTypographyStyles,
  generateBorderShadowStyles,
  generateResponsiveRangeStyles,
  // mimmikCssForPreviewBtnClick,
  duplicateBlockIdFix
} = window.EBInfoboxControls;
const editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";
 // import {
// 	softMinifyCssStrings,
// 	generateBackgroundControlStyles,
// 	generateDimensionsControlStyles,
// 	generateTypographyStyles,
// 	generateBorderShadowStyles,
// 	generateResponsiveRangeStyles,
// 	mimmikCssForPreviewBtnClick,
// 	duplicateBlockIdFix,
// } from "../../../util/helpers";









const Edit = _ref => {
  let {
    attributes,
    setAttributes,
    className,
    isSelected,
    clientId
  } = _ref;
  const {
    // responsive control attributes ⬇
    resOption,
    // blockMeta is for keeping all the styles
    blockMeta,
    // blockId attribute for making unique className and other uniqueness
    blockId,
    // isOverlay is to check if a overlay on the block's background should exist
    // isOverlay,
    // selectedIcon,
    media,
    number,
    imageUrl,
    // infoboxLink,
    enableSubTitle,
    enableDescription,
    enableButton,
    //
    isInfoClick,
    // buttonText,
    // title,
    // subTitle,
    // description,
    // //
    // titleTag,
    // subTitleTag,
    // //
    // imageId,
    // //
    // iconSize,
    // TABiconSize,
    // MOBiconSize,
    //
    flexDirection,
    //
    mediaAlignSelf,
    //
    contentAlignment,
    //
    useNumIconBg,
    //
    numIconColor,
    //
    numIconBgType,
    //
    numIconBgColor,
    //
    numIconBgGradient,
    //
    [`${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth}Unit`]: mediaImgWidthUnit,
    [`TAB${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth}Unit`]: TABmediaImgWidthUnit,
    [`MOB${_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth}Unit`]: MOBmediaImgWidthUnit,
    // //
    // mediaImgWidth,
    // //
    // TABmediaImgWidth,
    // //
    // MOBmediaImgWidth,
    //
    isMediaImgHeightAuto,
    // //
    // mediaImgHeightUnit,
    // //
    // mediaImgHeight,
    // //
    // TABmediaImgHeight,
    // //
    // MOBmediaImgHeight,
    //
    buttonTextColor = "#30267A",
    buttonHvrTextColor,
    //
    titleColor = "#fff",
    //
    subTitleColor = "#fff",
    //
    descriptionColor = "#fff",
    // //
    // buttonBgColor = "#E1D8FF",
    //
    mediaAlignment,
    //
    contentsAlignment,
    btnAlignment,
    //
    // btnEffect,
    //
    //
    //
    numberFontSize,
    TABnumberFontSize,
    MOBnumberFontSize,
    //
    mIconZRange,
    TABmIconZRange,
    MOBmIconZRange,
    //
    mIconZUnit,
    TABmIconZUnit,
    MOBmIconZUnit,
    //
    numberSizeUnit,
    TABnumberSizeUnit,
    MOBnumberSizeUnit
  } = attributes;
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    // this codes is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    }); // this codes is for creating a unique blockId for each block's unique className

    const BLOCK_PREFIX = "eb-infobox";
    duplicateBlockIdFix({
      BLOCK_PREFIX,
      blockId,
      setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_3__.select,
      clientId
    }); // // this codes is for mimmiking css when responsive options clicked from wordpress's 'preview' button
    // mimmikCssForPreviewBtnClick({
    // 	domObj: document,
    // 	select,
    // });
    //

    if (number === undefined) {
      setAttributes({
        number: "01"
      });
    }
  }, []);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, `eb-guten-block-main-parent-wrapper`)
  });
  const buttonThakbe = !isInfoClick && enableButton; //
  // styling codes starts from here
  //

  const {
    typoStylesDesktop: titleTypoStylesDesktop,
    typoStylesTab: titleTypoStylesTab,
    typoStylesMobile: titleTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_title,
    defaultFontSize: 26
  });
  const {
    typoStylesDesktop: subTitleTypoStylesDesktop,
    typoStylesTab: subTitleTypoStylesTab,
    typoStylesMobile: subTitleTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_subTitle,
    defaultFontSize: 22
  });
  const {
    typoStylesDesktop: contentTypoStylesDesktop,
    typoStylesTab: contentTypoStylesTab,
    typoStylesMobile: contentTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_content,
    defaultFontSize: 20
  });
  const {
    typoStylesDesktop: buttonTypoStylesDesktop,
    typoStylesTab: buttonTypoStylesTab,
    typoStylesMobile: buttonTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_buttonText,
    defaultFontSize: 20
  });
  const {
    typoStylesDesktop: numTypoStylesDesktop,
    typoStylesTab: numTypoStylesTab,
    typoStylesMobile: numTypoStylesMobile
  } = generateTypographyStyles({
    attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_number,
    defaultFontSize: 28
  });
  const {
    dimensionStylesDesktop: mediaBgPaddingDesktop,
    dimensionStylesTab: mediaBgPaddingTab,
    dimensionStylesMobile: mediaBgPaddingMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBackground,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: mediaRadiusStylesDesktop,
    dimensionStylesTab: mediaRadiusStylesTab,
    dimensionStylesMobile: mediaRadiusStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBgRadius,
    styleFor: "border-radius"
  });
  const {
    dimensionStylesDesktop: mediaBgMarginStylesDesktop,
    dimensionStylesTab: mediaBgMarginStylesTab,
    dimensionStylesMobile: mediaBgMarginStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBgMargin,
    styleFor: "margin"
  });
  const {
    dimensionStylesDesktop: buttonPaddingStylesDesktop,
    dimensionStylesTab: buttonPaddingStylesTab,
    dimensionStylesMobile: buttonPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.buttonPadding,
    styleFor: "padding"
  }); // const {
  // 	dimensionStylesDesktop: buttonRadiusStylesDesktop,
  // 	dimensionStylesTab: buttonRadiusStylesTab,
  // 	dimensionStylesMobile: buttonRadiusStylesMobile,
  // } = generateDimensionsControlStyles({
  // 	attributes,
  // 	controlName: buttonRadius,
  // 	styleFor: "border-radius",
  // });

  const {
    dimensionStylesDesktop: titlePaddingStylesDesktop,
    dimensionStylesTab: titlePaddingStylesTab,
    dimensionStylesMobile: titlePaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.titlePadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: subTitlePaddingStylesDesktop,
    dimensionStylesTab: subTitlePaddingStylesTab,
    dimensionStylesMobile: subTitlePaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.subTitlePadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: contentPaddingStylesDesktop,
    dimensionStylesTab: contentPaddingStylesTab,
    dimensionStylesMobile: contentPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.contentPadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: wrapperPaddingStylesDesktop,
    dimensionStylesTab: wrapperPaddingStylesTab,
    dimensionStylesMobile: wrapperPaddingStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapperPadding,
    styleFor: "padding"
  });
  const {
    dimensionStylesDesktop: wrapperMarginStylesDesktop,
    dimensionStylesTab: wrapperMarginStylesTab,
    dimensionStylesMobile: wrapperMarginStylesMobile
  } = generateDimensionsControlStyles({
    attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapperMargin,
    styleFor: "margin"
  });
  const {
    backgroundStylesDesktop,
    hoverBackgroundStylesDesktop,
    backgroundStylesTab,
    hoverBackgroundStylesTab,
    backgroundStylesMobile,
    hoverBackgroundStylesMobile,
    overlayStylesDesktop,
    hoverOverlayStylesDesktop,
    overlayStylesTab,
    hoverOverlayStylesTab,
    overlayStylesMobile,
    hoverOverlayStylesMobile,
    bgTransitionStyle,
    ovlTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.infoWrapBg // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  });
  const {
    backgroundStylesDesktop: btnBackgroundStylesDesktop,
    hoverBackgroundStylesDesktop: btnHoverBackgroundStylesDesktop,
    bgTransitionStyle: btnBgTransitionStyle
  } = generateBackgroundControlStyles({
    attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.infoBtnBg,
    forButton: true // noOverlay: true,
    // noMainBgi: true,
    // noOverlayBgi: true, // if 'noOverlay : true' is given then there's no need to give 'noOverlayBgi : true'

  });
  const {
    styesDesktop: bdShadowStyesDesktop,
    styesTab: bdShadowStyesTab,
    styesMobile: bdShadowStyesMobile,
    stylesHoverDesktop: bdShadowStylesHoverDesktop,
    stylesHoverTab: bdShadowStylesHoverTab,
    stylesHoverMobile: bdShadowStylesHoverMobile,
    transitionStyle: bdShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.wrpBdShadow,
    attributes // noShadow: true,
    // noBorder: true,

  });
  const {
    styesDesktop: btnBdShadowStyesDesktop,
    styesTab: btnBdShadowStyesTab,
    styesMobile: btnBdShadowStyesMobile,
    stylesHoverDesktop: btnBdShadowStylesHoverDesktop,
    stylesHoverTab: btnBdShadowStylesHoverTab,
    stylesHoverMobile: btnBdShadowStylesHoverMobile,
    transitionStyle: btnBdShadowTransitionStyle
  } = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.btnBdShd,
    attributes // noShadow: true,
    // noBorder: true,

  });
  const {
    rangeStylesDesktop: iconSizeDesktop,
    rangeStylesTab: iconSizeTab,
    rangeStylesMobile: iconSizeMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaIconSize,
    customUnit: "px",
    property: "font-size",
    attributes
  });
  const {
    rangeStylesDesktop: contentMediaGapDesktop,
    rangeStylesTab: contentMediaGapTab,
    rangeStylesMobile: contentMediaGapMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaContentGap,
    customUnit: "px",
    property: "gap",
    attributes
  });
  const {
    rangeStylesDesktop: mediaImgHeightDesktop,
    rangeStylesTab: mediaImgHeightTab,
    rangeStylesMobile: mediaImgHeightMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageHeight,
    property: "height",
    attributes
  });
  const {
    rangeStylesDesktop: mediaImgWidthDesktop,
    rangeStylesTab: mediaImgWidthTab,
    rangeStylesMobile: mediaImgWidthMobile
  } = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth,
    property: "width",
    attributes
  });
  const wrapperStylesDesktop = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesDesktop}
			${wrapperPaddingStylesDesktop}
			${bdShadowStyesDesktop}
			${backgroundStylesDesktop}
			transition: ${bgTransitionStyle}, ${bdShadowTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover{	
			${hoverBackgroundStylesDesktop}
			${bdShadowStylesHoverDesktop}
		}
		
		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesDesktop}
			transition: ${ovlTransitionStyle};
		}

		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesDesktop}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {	
			${flexDirection ? `flex-direction: ${flexDirection};` : " "} 
			${media !== "none" ? `${contentMediaGapDesktop}` : ""}
		}

		${media !== "none" ? `
				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
					${mediaAlignment ? `align-self: ${mediaAlignment};` : `align-self: ${mediaAlignSelf || "center"};`}
	
					${mediaBgMarginStylesDesktop}
	
				}
	
	
				${media === "image" ? `
	
						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
							${mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " "}
						}
						
						.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
							
							${imageUrl ? mediaRadiusStylesDesktop : " "}
							
							${mediaImgWidthUnit === "%" ? `width: 100%;` : mediaImgWidthDesktop}
							${isMediaImgHeightAuto ? `height:auto;` : mediaImgHeightDesktop}
							
						}
	
						.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
							${imageUrl ? " " : mediaRadiusStylesDesktop}
						}
						` : " "}
	
	
	
				${media === "number" || media === "icon" ? `
					
						.eb-infobox-wrapper.${blockId} .number-or-icon {
						
							${mediaBgPaddingDesktop}
							${mediaRadiusStylesDesktop}
			
							${useNumIconBg ? `${numIconBgType === "fill" ? `background-color: ${numIconBgColor};` : numIconBgType === "gradient" ? `background-image: ${numIconBgGradient};` : " "}` : " "}						
							
						}
			
						.eb-infobox-wrapper.${blockId} .number-or-icon > span{
							color: ${numIconColor || "#fff"};
						}
						
						` : " "}
	
			
	
				${media === "number" ? `
	
					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesDesktop}
						height:${numberFontSize || 28}${numberSizeUnit};
						width:${numberFontSize || 28}${numberSizeUnit};
						display:flex;
						justify-content:center;
						align-items:center;
					}				
					
					` : " "}
	
				${media === "icon" ? `
					
						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeDesktop}
							height:${mIconZRange}${mIconZUnit};
							width:${mIconZRange}${mIconZUnit};
							display:flex;
							justify-content:center;
							align-items:center;
						}
	
						` : " "}
	
	
			` : " "}

		.eb-infobox-wrapper.${blockId} .contents-wrapper {
			flex: 1;
			${contentAlignment ? `text-align: ${contentAlignment};` : " "} 

			${contentsAlignment ? `text-align: ${contentsAlignment};` : `text-align: ${contentAlignment};`}
		}

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesDesktop}
			${titlePaddingStylesDesktop}
			${titleColor ? `color: ${titleColor};` : " "}
		}

		${enableSubTitle ? `			
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesDesktop}
					${subTitlePaddingStylesDesktop}
					${subTitleColor ? `color: ${subTitleColor};` : " "}
				}			
				` : " "}
		
		${enableDescription ? `
			
				.eb-infobox-wrapper.${blockId} .description {
					
					${contentTypoStylesDesktop}
					${contentPaddingStylesDesktop}
					${descriptionColor ? `color: ${descriptionColor};` : " "}

				}
				
				` : " "}

		${buttonThakbe ? `
			
				.eb-infobox-wrapper.${blockId} .contents-wrapper .eb-infobox-btn-wrapper{
					${btnAlignment ? `text-align:${btnAlignment};` : ""}
				}

				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesDesktop}
					${buttonPaddingStylesDesktop}
					${btnBackgroundStylesDesktop}
					${btnBdShadowStyesDesktop}
					
					
					${buttonTextColor ? `color: ${buttonTextColor};` : " "}
					
					transition: all 0.5s, ${btnBgTransitionStyle}, ${btnBdShadowTransitionStyle};
				}
				
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${buttonHvrTextColor ? `color: ${buttonHvrTextColor};` : " "}
					${btnBdShadowStylesHoverDesktop}
				}

				
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:before{
					${btnHoverBackgroundStylesDesktop}
				}

				
				` : " "}

		`;
  const wrapperStylesTab = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesTab}
			${wrapperPaddingStylesTab}
			${backgroundStylesTab}
			${bdShadowStyesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover{		
			${hoverBackgroundStylesTab}
			${bdShadowStylesHoverTab}
		}

		
		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesTab}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapTab}` : ""}			
		}

		${media !== "none" ? `
	
				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
	
					${mediaBgMarginStylesTab}				
				}
	
				${media === "number" || media === "icon" ? `
				
						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesTab}
							${mediaBgPaddingTab}				
						}
						
						` : " "}
	
	
				${media === "number" ? `
	
						.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
							${numTypoStylesTab}
							${TABnumberFontSize ? `height:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
							${TABnumberFontSize ? `width:${TABnumberFontSize}${TABnumberSizeUnit};` : ""}
						}				
					
					` : " "}
	
				
				${media === "icon" ? `
					
						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeTab}
							${TABmIconZRange ? `height:${TABmIconZRange}${TABmIconZUnit};` : ""}
							${TABmIconZRange ? `width:${TABmIconZRange}${TABmIconZUnit};` : ""}
						}
					
					` : " "}
	
				
				${media === "image" ? `
							
					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${TABmediaImgWidthUnit === "%" ? mediaImgWidthTab : mediaImgWidthUnit === "%" ? `width: auto;` : " "}
					}
	
					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
						
						${TABmediaImgWidthUnit === "%" ? mediaImgWidthUnit === "%" ? " " : `width: 100%;` : mediaImgWidthTab}
						
						${isMediaImgHeightAuto ? "" : mediaImgHeightTab}
						
					}
	
					
					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesTab}
	
					}
					
					` : " "}
	
	
	
	
			` : " "}
		

		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesTab}
			${titlePaddingStylesTab}

		}
		
		${enableSubTitle ? `			
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesTab}
					${subTitlePaddingStylesTab}
		
				}			
				` : " "}

		${enableDescription ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesTab}
					${contentPaddingStylesTab}
		
				}				
				` : " "}
		
		${buttonThakbe ? `
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesTab}
					${buttonPaddingStylesTab}
					${btnBdShadowStyesTab}
				}
				
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverTab}
				}
				
				` : " "}
	
	`;
  const wrapperStylesMobile = `
		.eb-infobox-wrapper.${blockId} {
			${wrapperMarginStylesMobile}
			${wrapperPaddingStylesMobile}			
			${backgroundStylesMobile}
			${bdShadowStyesMobile}
		}

		.eb-infobox-wrapper.${blockId}:hover{
			${hoverBackgroundStylesMobile}
			${bdShadowStylesHoverMobile}
		}

		.eb-infobox-wrapper.${blockId}:before{
			${overlayStylesMobile}
		}

		
		.eb-infobox-wrapper.${blockId}:hover:before{	
			${hoverOverlayStylesMobile}
		}

		.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner {
			${media !== "none" ? `${contentMediaGapMobile}` : ""}			
		}

		${media !== "none" ? `
	
				.eb-infobox-wrapper.${blockId} .icon-img-wrapper {
					
					${mediaBgMarginStylesMobile}
				}
	
				${media === "number" || media === "icon" ? `
	
						.eb-infobox-wrapper.${blockId} .number-or-icon {
							${mediaRadiusStylesMobile}
							${mediaBgPaddingMobile}				
						}
						
						` : " "}
	
				${media === "number" ? `
	
					.eb-infobox-wrapper.${blockId} span.eb-infobox-number{
						${numTypoStylesMobile}
						${MOBnumberFontSize ? `height:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
						${MOBnumberFontSize ? `width:${MOBnumberFontSize}${MOBnumberSizeUnit};` : ""}
					}				
					
					` : " "}
	
				${media === "icon" ? `
	
						.eb-infobox-wrapper.${blockId} .icon-img-wrapper .eb-infobox-icon-data-selector {
							${iconSizeMobile}
							${MOBmIconZRange ? `height:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
							${MOBmIconZRange ? `width:${MOBmIconZRange}${MOBmIconZUnit};` : ""}
						}			
					
					` : " "}
				
				${media === "image" ? `
	
									
					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner .icon-img-wrapper{
						${MOBmediaImgWidthUnit === "%" ? mediaImgWidthMobile : TABmediaImgWidthUnit === "%" ? `width: auto;` : " "}
					}
	
					
					.eb-infobox-wrapper.${blockId} .infobox-wrapper-inner img {
						
						${MOBmediaImgWidthUnit === "%" ? TABmediaImgWidthUnit === "%" ? " " : `width: 100%;` : mediaImgWidthMobile}
						
						${isMediaImgHeightAuto ? "" : mediaImgHeightMobile}
	
					}
	
					
					.eb-infobox-wrapper.${blockId} .eb-infobox-image-wrapper{
						${mediaRadiusStylesMobile}
					}
					
					` : " "}
	
	
	
			` : " "}
		
		.eb-infobox-wrapper.${blockId} .title {
			${titleTypoStylesMobile}
			${titlePaddingStylesMobile}

		}
		
		${enableSubTitle ? `
				.eb-infobox-wrapper.${blockId} .subtitle {
					${subTitleTypoStylesMobile}
					${subTitlePaddingStylesMobile}
		
				}				
				` : " "}

		${enableDescription ? `
				.eb-infobox-wrapper.${blockId} .description {
					${contentTypoStylesMobile}
					${contentPaddingStylesMobile}
		
				}
				
				` : " "}
		
		${buttonThakbe ? `
			
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn{
					${buttonTypoStylesMobile}
					${btnBdShadowStyesMobile}
				}
				
			
				.eb-infobox-wrapper.${blockId} .contents-wrapper .infobox-btn:hover{
					${btnBdShadowStylesHoverMobile}
				}
				
				` : " "}
		
		

	`; // all css styles for large screen width (desktop/laptop) in strings ⬇

  const desktopAllStyles = softMinifyCssStrings(`		
		${wrapperStylesDesktop}
	`); // all css styles for Tab in strings ⬇

  const tabAllStyles = softMinifyCssStrings(`
		${wrapperStylesTab}
	`); // all css styles for Mobile in strings ⬇

  const mobileAllStyles = softMinifyCssStrings(`
		${wrapperStylesMobile}
	`); // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    const styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]);
  return [isSelected && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), // Edit view
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("style", null, `

				a.info-click-link{
					pointer-events: none;
				}


				${desktopAllStyles}

				/* mimmikcssStart */

				${resOption === "Tablet" ? tabAllStyles : " "}
				${resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " "}

				/* mimmikcssEnd */

				@media all and (max-width: 1024px) {	

					/* tabcssStart */			
					${softMinifyCssStrings(tabAllStyles)}
					/* tabcssEnd */			
				
				}
				
				@media all and (max-width: 767px) {
					
					/* mobcssStart */			
					${softMinifyCssStrings(mobileAllStyles)}
					/* mobcssEnd */			
				
				}
				`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_edit__WEBPACK_IMPORTED_MODULE_4__["default"], {
    setAttributes: setAttributes,
    attributes: attributes
  }))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const example = {
  attributes: {
    layoutPreset: "preset2",
    flexDirection: "column",
    contentAlignment: "center"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoboxIcon": function() { return /* binding */ InfoboxIcon; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const InfoboxIcon = () => {
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-info-box",
    viewBox: "0 0 64 64"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_1__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "19.203",
    x2: "32",
    y2: "45.242",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "43,19 21,19 21,25 29,25 29,45 35,45 35,25 43,25",
    fill: "url(#SVGID_1__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_2__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "9.359",
    x2: "32",
    y2: "55.428",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M54,9H10c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h44c2.757,0,5-2.243,5-5V14 C59,11.243,56.757,9,54,9z M57,50c0,1.654-1.346,3-3,3H10c-1.654,0-3-1.346-3-3V14c0-1.654,1.346-3,3-3h44c1.654,0,3,1.346,3,3V50z",
    fill: "url(#SVGID_2__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_3__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "26.939",
    x2: "58",
    y2: "61.543",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M58,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S60.206,28,58,28z",
    fill: "url(#SVGID_3__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_4__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "30.125",
    x2: "58",
    y2: "33.875",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "58",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_4__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_5__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "26.939",
    x2: "6",
    y2: "61.543",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
    d: "M6,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S8.206,28,6,28z",
    fill: "url(#SVGID_5__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_6__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "30.125",
    x2: "6",
    y2: "33.875",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("circle", {
    cx: "6",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_6__56360)"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("linearGradient", {
    id: "SVGID_7__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "21.172",
    x2: "32",
    y2: "43.205",
    spreadMethod: "reflect"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("polygon", {
    points: "41,21 23,21 23,23 31,23 31,43 33,43 33,23 41,23",
    fill: "url(#SVGID_7__56360)"
  }));
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example */ "./src/example.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */








const {
  ebConditionalRegisterBlockType
} = EBInfoboxControls;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_6__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_2__.InfoboxIcon,
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB infobox", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("info box", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("infobox block", "essential-blocks")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_8__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");


/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */

 // import faIcons from "../../../util/faIcons.js";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import ImageAvatar from "../../../util/image-avatar/";
// import GradientColorControl from "../../../util/gradient-color-controller";
// import ColorControl from "../../../util/color-control";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import BackgroundControl from "../../../util/background-control";



 // import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";

const {
  BackgroundControl,
  BorderShadowControl,
  GradientColorControl,
  ColorControl,
  ImageAvatar,
  ResponsiveRangeController,
  ResponsiveDimensionsControl,
  TypographyDropdown,
  faIcons // mimmikCssForResBtns,
  // mimmikCssOnPreviewBtnClickWhileBlockSelected,

} = window.EBInfoboxControls;
const editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";





function Inspector(props) {
  const {
    attributes,
    setAttributes
  } = props;
  const {
    blockId,
    // responsive control attributes ⬇
    resOption,
    //
    layoutPreset,
    //
    media,
    //
    enableSubTitle,
    //
    number,
    //
    imageUrl,
    //
    selectedIcon,
    //
    flexDirection,
    //
    enableDescription,
    //
    useNumIconBg,
    //
    numIconColor,
    //
    numIconBgType,
    //
    numIconBgColor,
    //
    numIconBgGradient,
    //
    imageId,
    //
    isMediaImgHeightAuto,
    //
    titleTag,
    subTitleTag,
    //
    enableButton,
    isInfoClick,
    //
    buttonText,
    infoboxLink,
    //
    buttonTextColor,
    buttonHvrTextColor,
    //
    titleColor,
    //
    subTitleColor,
    //
    descriptionColor,
    //
    // buttonBgColor,
    //
    mediaAlignment,
    //
    contentsAlignment,
    btnAlignment,
    //
    btnEffect
  } = attributes; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // // this useEffect is for mimmiking css for all the eb blocks on resOption changing
  // useEffect(() => {
  // 	mimmikCssForResBtns({
  // 		domObj: document,
  // 		resOption,
  // 	});
  // }, [resOption]);
  // // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
  // useEffect(() => {
  // 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
  // 		domObj: document,
  // 		select,
  // 		setAttributes,
  // 	});
  // 	return () => {
  // 		cleanUp();
  // 	};
  // }, []);

  const resRequiredProps = {
    setAttributes,
    resOption,
    attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_8__["default"]
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
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
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-panel-control"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, tab => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "eb-tab-controls" + tab.name
  }, tab.name === "general" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Infobox Settings", "essential-blocks") // initialOpen={false}

  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Layout Preset ", "essential-blocks"),
    value: layoutPreset,
    options: _constants__WEBPACK_IMPORTED_MODULE_12__.LAYOUT_TYPES,
    onChange: layoutPreset => setAttributes({
      layoutPreset
    })
  }), media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Media & content spacing", "Infobox"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.mediaContentGap,
    resRequiredProps: resRequiredProps,
    min: 0,
    max: 500,
    step: 1,
    noUnits: true
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Clickable Infobox", "essential-blocks"),
    checked: isInfoClick,
    onChange: () => setAttributes({
      isInfoClick: !isInfoClick
    })
  }), isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl // id={`info-link-input-${blockId}`}
  , {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("URL (use https:// at the beginning)"),
    placeholder: "https://your-link.com",
    value: infoboxLink,
    onChange: infoboxLink => setAttributes({
      infoboxLink
    })
  })), !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show button", "essential-blocks"),
    checked: enableButton,
    onChange: () => setAttributes({
      enableButton: !enableButton
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Alignments", "essential-blocks")
  }, media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (flexDirection === "row" || flexDirection === "row-reverse") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(_ref => {
    let {
      value,
      label
    } = _ref;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isSecondary: mediaAlignment !== value,
      isPrimary: mediaAlignment === value,
      onClick: () => setAttributes({
        mediaAlignment: value
      })
    }, label);
  }))), (flexDirection === "column" || flexDirection === "column-reverse") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Media alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(_ref2 => {
    let {
      value,
      label
    } = _ref2;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isSecondary: mediaAlignment !== value,
      isPrimary: mediaAlignment === value,
      onClick: () => setAttributes({
        mediaAlignment: value
      })
    }, label);
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Contents alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.CONTENTS_ALIGNMENTS.map(_ref3 => {
    let {
      value,
      label
    } = _ref3;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isSecondary: contentsAlignment !== value,
      isPrimary: contentsAlignment === value,
      onClick: () => setAttributes({
        contentsAlignment: value
      })
    }, label);
  }))), enableButton && !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-alignments",
    label: "Button alignments"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-alignments"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.CONTENTS_ALIGNMENTS.map(_ref4 => {
    let {
      value,
      label
    } = _ref4;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isSecondary: btnAlignment !== value,
      isPrimary: btnAlignment === value,
      onClick: () => setAttributes({
        btnAlignment: value
      })
    }, label);
  }))))), tab.name === "styles" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Media", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    id: "eb-infobox-image-icon"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-image-icon"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.MEDIA_TYPES.map(_ref5 => {
    let {
      label,
      value
    } = _ref5;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isSecondary: media !== value,
      isPrimary: media === value,
      onClick: () => setAttributes({
        media: value
      })
    }, label);
  }))), media !== "none" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, media === "icon" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Select Icon", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
    icons: faIcons,
    onChange: icon => setAttributes({
      selectedIcon: icon
    }),
    value: selectedIcon,
    appendTo: "body",
    isMulti: false
  })), media === "icon" && selectedIcon && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Icon Size", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.mediaIconSize,
    resRequiredProps: resRequiredProps,
    min: 8,
    max: 200,
    step: 1
  }), media === "number" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text", "essential-blocks"),
    id: "eb-infobox-number-id"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: `${number}`,
    id: "eb-infobox-number-id",
    onChange: e => setAttributes({
      number: `${e.target.value}`
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Text Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__.typoPrefix_number,
    resRequiredProps: resRequiredProps
  })), (media === "number" || media === "icon") && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: numIconColor,
    onChange: numIconColor => setAttributes({
      numIconColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.mediaBackground,
    baseLabel: "Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Use Background", "essential-blocks"),
    checked: useNumIconBg,
    onChange: () => setAttributes({
      useNumIconBg: !useNumIconBg
    })
  }), useNumIconBg && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Type", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    id: "eb-infobox-infobox-background"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.ICON_IMAGE_BG_TYPES.map(_ref6 => {
    let {
      value,
      label
    } = _ref6;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
    , {
      isPrimary: numIconBgType === value,
      isSecondary: numIconBgType !== value,
      onClick: () => setAttributes({
        numIconBgType: value
      })
    }, label);
  }))), numIconBgType === "fill" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background Color", "essential-blocks"),
    color: numIconBgColor,
    onChange: numIconBgColor => setAttributes({
      numIconBgColor
    })
  }), numIconBgType === "gradient" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Gradient", "essential-blocks") // initialOpen={false}

  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(GradientColorControl, {
    gradientColor: numIconBgGradient,
    onChange: numIconBgGradient => setAttributes({
      numIconBgGradient
    })
  })))), media === "image" && !imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: _ref7 => {
      let {
        id,
        url
      } = _ref7;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: _ref8 => {
      let {
        open
      } = _ref8;
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
        className: "eb-background-control-inspector-panel-img-btn components-button",
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Upload Image", "essential-blocks"),
        icon: "format-image",
        onClick: open
      });
    }
  }), media === "image" && imageUrl && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ImageAvatar, {
    imageUrl: imageUrl,
    onDeleteImage: () => setAttributes({
      imageUrl: null
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Width", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.mediaImageWidth,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_12__.sizeUnitTypes,
    min: 0,
    max: 500,
    step: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Auto Image Height", "essential-blocks"),
    checked: isMediaImgHeightAuto,
    onChange: () => setAttributes({
      isMediaImgHeightAuto: !isMediaImgHeightAuto
    })
  }), !isMediaImgHeightAuto && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveRangeController, {
    baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Image Height", "essential-blocks"),
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_10__.mediaImageHeight,
    resRequiredProps: resRequiredProps,
    units: _constants__WEBPACK_IMPORTED_MODULE_12__.imgHeightUnits,
    min: 0,
    max: 500,
    step: 1
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.mediaBgRadius,
    baseLabel: "Border Radius"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.mediaBgMargin,
    baseLabel: "Margin"
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Title Tag", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.HEADER_TAGS.map(header => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: titleTag !== header,
    isPrimary: titleTag === header,
    onClick: () => setAttributes({
      titleTag: header
    })
  }, header.toUpperCase())))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__.typoPrefix_title,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.titlePadding,
    baseLabel: "Title Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: titleColor,
    onChange: titleColor => setAttributes({
      titleColor
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Enable", "essential-blocks"),
    checked: enableSubTitle,
    onChange: () => setAttributes({
      enableSubTitle: !enableSubTitle
    })
  }), enableSubTitle && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Subtitle Tag", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
    className: "infobox-button-group"
  }, _constants__WEBPACK_IMPORTED_MODULE_12__.HEADER_TAGS.map(header => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    isSecondary: subTitleTag !== header,
    isPrimary: subTitleTag === header,
    onClick: () => setAttributes({
      subTitleTag: header
    })
  }, header.toUpperCase())))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__.typoPrefix_subTitle,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.subTitlePadding,
    baseLabel: "Subtitle Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: subTitleColor,
    onChange: subTitleColor => setAttributes({
      subTitleColor
    })
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Content", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Show content", "essential-blocks"),
    checked: enableDescription,
    onChange: () => setAttributes({
      enableDescription: !enableDescription
    })
  }), enableDescription && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__.typoPrefix_content,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.contentPadding,
    baseLabel: "Content Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Color", "essential-blocks"),
    color: descriptionColor,
    onChange: descriptionColor => setAttributes({
      descriptionColor
    })
  }))), enableButton && !isInfoClick && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Text", "essential-blocks"),
    value: buttonText,
    onChange: buttonText => setAttributes({
      buttonText
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Link URL (use https:// at the beginning)"),
    placeholder: "https://your-site.com",
    value: infoboxLink,
    onChange: infoboxLink => setAttributes({
      infoboxLink
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(TypographyDropdown, {
    baseLabel: "Typography",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_9__.typoPrefix_buttonText,
    resRequiredProps: resRequiredProps
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.buttonPadding,
    baseLabel: "Button Padding"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Text color", "essential-blocks"),
    color: buttonTextColor,
    onChange: buttonTextColor => setAttributes({
      buttonTextColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ColorControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Hover text color", "essential-blocks"),
    color: buttonHvrTextColor,
    onChange: buttonHvrTextColor => setAttributes({
      buttonHvrTextColor
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_6__.infoBtnBg,
    resRequiredProps: resRequiredProps,
    forButton: true // noOverlay
    // noMainBgi
    // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'

  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_7__.btnBdShd,
    resRequiredProps: resRequiredProps // noShadow
    // noBorder

  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("More Effects", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Button Hover Effect", "essential-blocks"),
    value: btnEffect,
    options: _constants__WEBPACK_IMPORTED_MODULE_12__.HOVER_EFFECT // onChange={(preset) => setAttributes({ preset })}
    ,
    onChange: btnEffect => {
      setAttributes({
        btnEffect
      });
    }
  })))), tab.name === "advance" && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Margin Padding", "essential-blocks")
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.wrapperMargin,
    baseLabel: "Margin"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ResponsiveDimensionsControl, {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_11__.wrapperPadding,
    baseLabel: "Padding"
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Background", "essential-blocks"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BackgroundControl, {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_6__.infoWrapBg,
    resRequiredProps: resRequiredProps // noOverlay
    // noMainBgi
    // noOverlayBgi // if U pass 'noOverlay' prop U don't need to pass 'noOverlayBgi'

  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__.__)("Border & Shadow"),
    initialOpen: false
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(BorderShadowControl, {
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_7__.wrpBdShadow,
    resRequiredProps: resRequiredProps // noShadow
    // noBorder

  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_infobox_save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/infobox-save */ "./src/components/infobox-save.js");



function save(_ref) {
  let {
    attributes
  } = _ref;
  const {
    blockId,
    selectedIcon,
    number = 0,
    media,
    imageUrl,
    enableSubTitle,
    enableDescription,
    infoboxLink,
    enableButton,
    //
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    //
    titleTag,
    subTitleTag,
    //
    btnEffect
  } = attributes;
  const requiredProps = {
    selectedIcon,
    blockId,
    number,
    media,
    imageUrl,
    enableSubTitle,
    enableDescription,
    infoboxLink,
    enableButton,
    isInfoClick,
    buttonText,
    title,
    subTitle,
    description,
    titleTag,
    subTitleTag,
    //
    btnEffect
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), isInfoClick ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: infoboxLink,
    rel: "noopener noreferrer",
    className: "info-click-link info-wrap-link"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
    requiredProps: requiredProps
  })) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_infobox_save__WEBPACK_IMPORTED_MODULE_2__["default"], {
    requiredProps: requiredProps
  }));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addClass; }
/* harmony export */ });
/* harmony import */ var _hasClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/esm/hasClass.js");

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0,_hasClass__WEBPACK_IMPORTED_MODULE_0__["default"])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),

/***/ "./node_modules/dom-helpers/esm/hasClass.js":
/*!**************************************************!*\
  !*** ./node_modules/dom-helpers/esm/hasClass.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ hasClass; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ removeClass; }
/* harmony export */ });
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

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

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
    } catch (x) { /**/ }
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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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
    bigint: createPrimitiveTypeChecker('bigint'),
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
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
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
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
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

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
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

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
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
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
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
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-transition-group/esm/CSSTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/CSSTransition.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dom-helpers/addClass */ "./node_modules/dom-helpers/esm/addClass.js");
/* harmony import */ var dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dom-helpers/removeClass */ "./node_modules/dom-helpers/esm/removeClass.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");










var _addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_addClass__WEBPACK_IMPORTED_MODULE_3__["default"])(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0,dom_helpers_removeClass__WEBPACK_IMPORTED_MODULE_4__["default"])(node, c);
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(CSSTransition, _React$Component);

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
    } // This is to force a repaint,
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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Transition__WEBPACK_IMPORTED_MODULE_6__["default"], (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _Transition__WEBPACK_IMPORTED_MODULE_6__["default"].propTypes, {
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
  classNames: _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func),

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func)
}) : 0;
/* harmony default export */ __webpack_exports__["default"] = (CSSTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/ReplaceTransition.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/ReplaceTransition.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");






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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReplaceTransition, _React$Component);

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
    var child = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children)[idx];
    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in"]);

    var _React$Children$toArr = react__WEBPACK_IMPORTED_MODULE_2___default().Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroup__WEBPACK_IMPORTED_MODULE_4__["default"], props, inProp ? react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

ReplaceTransition.propTypes =  true ? {
  in: (prop_types__WEBPACK_IMPORTED_MODULE_5___default().bool.isRequired),
  children: function children(props, propName) {
    if (react__WEBPACK_IMPORTED_MODULE_2___default().Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
/* harmony default export */ __webpack_exports__["default"] = (ReplaceTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/SwitchTransition.js":
/*!*********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/SwitchTransition.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "modes": function() { return /* binding */ modes; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");


var _leaveRenders, _enterRenders;






function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(oldChildren) && react__WEBPACK_IMPORTED_MODULE_1___default().isValidElement(newChildren) && oldChildren.key != null && oldChildren.key === newChildren.key) {
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
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING, null);
    })
  });
}, _leaveRenders[modes.in] = function (_ref2) {
  var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
  return [current, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING);
    })
  })];
}, _leaveRenders);
var enterRenders = (_enterRenders = {}, _enterRenders[modes.out] = function (_ref3) {
  var children = _ref3.children,
      changeState = _ref3.changeState;
  return react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    in: true,
    onEntered: callHook(children, 'onEntered', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  });
}, _enterRenders[modes.in] = function (_ref4) {
  var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
  return [react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(current, {
    in: false,
    onExited: callHook(current, 'onExited', function () {
      changeState(_Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED, react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
        in: true
      }));
    })
  }), react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.state = {
      status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED,
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

    if (state.status === _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING && props.mode === modes.in) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING
      };
    }

    return {
      current: react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(props.children, {
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
      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERING:
        component = enterRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.EXITING:
        component = leaveRenders[mode](data);
        break;

      case _Transition__WEBPACK_IMPORTED_MODULE_2__.ENTERED:
        component = current;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_3__["default"].Provider, {
      value: {
        isMounting: !this.appeared
      }
    }, component);
  };

  return SwitchTransition;
}((react__WEBPACK_IMPORTED_MODULE_1___default().Component));

SwitchTransition.propTypes =  true ? {
  /**
   * Transition modes.
   * `out-in`: Current element transitions out first, then when complete, the new element transitions in.
   * `in-out`: New element transitions in first, then when complete, the current element transitions out.
   *
   * @type {'out-in'|'in-out'}
   */
  mode: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOf([modes.in, modes.out]),

  /**
   * Any `Transition` or `CSSTransition` component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_4___default().element.isRequired)])
} : 0;
SwitchTransition.defaultProps = {
  mode: modes.out
};
/* harmony default export */ __webpack_exports__["default"] = (SwitchTransition);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/Transition.js":
/*!***************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/Transition.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNMOUNTED": function() { return /* binding */ UNMOUNTED; },
/* harmony export */   "EXITED": function() { return /* binding */ EXITED; },
/* harmony export */   "ENTERING": function() { return /* binding */ ENTERING; },
/* harmony export */   "ENTERED": function() { return /* binding */ ENTERED; },
/* harmony export */   "EXITING": function() { return /* binding */ EXITING; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");
/* harmony import */ var _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/esm/utils/PropTypes.js");
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");








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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Transition, _React$Component);

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

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
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
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || _config__WEBPACK_IMPORTED_MODULE_4__["default"].disabled) {
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
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_3___default().findDOMNode(this);
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
        childProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_2___default().cloneElement(react__WEBPACK_IMPORTED_MODULE_2___default().Children.only(children), childProps))
    );
  };

  return Transition;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));

Transition.contextType = _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_5__["default"];
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
  nodeRef: prop_types__WEBPACK_IMPORTED_MODULE_6___default().shape({
    current: typeof Element === 'undefined' ? (prop_types__WEBPACK_IMPORTED_MODULE_6___default().any) : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return prop_types__WEBPACK_IMPORTED_MODULE_6___default().instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
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
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_6___default().func.isRequired), (prop_types__WEBPACK_IMPORTED_MODULE_6___default().element.isRequired)]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

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
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable enter transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

  /**
   * Enable or disable exit transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().bool),

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
    var pt = _utils_PropTypes__WEBPACK_IMPORTED_MODULE_7__.timeoutsShape;
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
  addEndListener: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func),

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_6___default().func)
} : 0; // Name the function so it is clearer in the documentation

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./TransitionGroupContext */ "./node_modules/react-transition-group/esm/TransitionGroupContext.js");
/* harmony import */ var _utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/esm/utils/ChildMapping.js");









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
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_3__["default"])(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind((0,_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this)); // Initial children should all be entering, dependent on appear


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
      children: firstRender ? (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getInitialChildMapping)(nextProps, handleExited) : (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  } // node is `undefined` when user provided `nodeRef` prop
  ;

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0,_utils_ChildMapping__WEBPACK_IMPORTED_MODULE_5__.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, state.children);

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
        props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(_this$props, ["component", "childFactory"]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
        value: contextValue
      }, children);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_TransitionGroupContext__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
      value: contextValue
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(Component, props, children));
  };

  return TransitionGroup;
}((react__WEBPACK_IMPORTED_MODULE_4___default().Component));

TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().any),

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
  children: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().node),

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().bool),

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
  childFactory: (prop_types__WEBPACK_IMPORTED_MODULE_7___default().func)
} : 0;
TransitionGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TransitionGroup);

/***/ }),

/***/ "./node_modules/react-transition-group/esm/TransitionGroupContext.js":
/*!***************************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/TransitionGroupContext.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null));

/***/ }),

/***/ "./node_modules/react-transition-group/esm/config.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/esm/config.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CSSTransition": function() { return /* reexport safe */ _CSSTransition__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "ReplaceTransition": function() { return /* reexport safe */ _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__["default"]; },
/* harmony export */   "SwitchTransition": function() { return /* reexport safe */ _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__["default"]; },
/* harmony export */   "TransitionGroup": function() { return /* reexport safe */ _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__["default"]; },
/* harmony export */   "Transition": function() { return /* reexport safe */ _Transition__WEBPACK_IMPORTED_MODULE_4__["default"]; },
/* harmony export */   "config": function() { return /* reexport safe */ _config__WEBPACK_IMPORTED_MODULE_5__["default"]; }
/* harmony export */ });
/* harmony import */ var _CSSTransition__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/esm/CSSTransition.js");
/* harmony import */ var _ReplaceTransition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/esm/ReplaceTransition.js");
/* harmony import */ var _SwitchTransition__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SwitchTransition */ "./node_modules/react-transition-group/esm/SwitchTransition.js");
/* harmony import */ var _TransitionGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/esm/TransitionGroup.js");
/* harmony import */ var _Transition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/esm/Transition.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ "./node_modules/react-transition-group/esm/config.js");







/***/ }),

/***/ "./node_modules/react-transition-group/esm/utils/ChildMapping.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-transition-group/esm/utils/ChildMapping.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getChildMapping": function() { return /* binding */ getChildMapping; },
/* harmony export */   "mergeChildMappings": function() { return /* binding */ mergeChildMappings; },
/* harmony export */   "getInitialChildMapping": function() { return /* binding */ getInitialChildMapping; },
/* harmony export */   "getNextChildMapping": function() { return /* binding */ getNextChildMapping; }
/* harmony export */ });
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
    return mapFn && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (c) {
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
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
    if (!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(child)) return;
    var hasPrev = (key in prevChildMapping);
    var hasNext = (key in nextChildMapping);
    var prevChild = prevChildMapping[key];
    var isLeaving = (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(child, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "timeoutsShape": function() { return /* binding */ timeoutsShape; },
/* harmony export */   "classNamesShape": function() { return /* binding */ classNamesShape; }
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var timeoutsShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().number), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number),
  appear: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number)
}).isRequired]) : 0;
var classNamesShape =  true ? prop_types__WEBPACK_IMPORTED_MODULE_0___default().oneOfType([(prop_types__WEBPACK_IMPORTED_MODULE_0___default().string), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  active: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
}), prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
  enter: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  enterActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exit: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitDone: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string),
  exitActive: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string)
})]) : 0;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _assertThisInitialized; }
/* harmony export */ });
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _inheritsLoose; }
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _objectWithoutPropertiesLoose; }
/* harmony export */ });
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
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _setPrototypeOf; }
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"name":"infobox/infobox","title":"Infobox","apiVersion":2,"category":"widgets","description":"Deliver your content beautifully to grab attention with an animated Infobox block.","supports":{"html":false,"align":["wide","full"]},"textdomain":"infobox","editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkinfobox"] = self["webpackChunkinfobox"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map