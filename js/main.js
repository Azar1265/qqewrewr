(function(modules) {
var installedModules = {};
function __webpack_require__(moduleId) {
if(installedModules[moduleId]) {
return installedModules[moduleId].exports;
}
var module = installedModules[moduleId] = {
i: moduleId,
		l: false,
			exports: {}
};
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
module.l = true;
return module.exports;
}
__webpack_require__.m = modules;
__webpack_require__.c = installedModules;
__webpack_require__.d = function(exports, name, getter) {
if(!__webpack_require__.o(exports, name)) {
		}
	};
__webpack_require__.r = function(exports) {
if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
}
Object.defineProperty(exports, '__esModule', { value: true });
  };

__webpack_require__.t = function(value, mode) {
	if(mode & 1) value = __webpack_require__(value);
if(mode & 8) return value;
if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
var ns = Object.create(null);
__webpack_require__.r(ns);
Object.defineProperty(ns, 'default', { enumerable: true, value: value });
		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
		return ns;
	};
__webpack_require__.n = function(module) {
var getter = module && module.__esModule ?
function getDefault() { return module['default']; } :
function getModuleExports() { return module; };
__webpack_require__.d(getter, 'a', getter);
return getter;
 	};
__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
__webpack_require__.p = "/";
return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
 })
({
"./src/blocks/modules/footer/footer.js":
(function(module, exports) {
}),
"./src/blocks/modules/header/header.js":
(function(module, exports) {
}),
"./src/js/import/modules.js":
(function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/blocks/modules/header/header.js");
var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( "./src/blocks/modules/footer/footer.js");
var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default =__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
}),
"./src/js/index.js":
(function(module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./src/js/import/modules.js");
 })
});
