/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/about.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/about.js":
/*!*************************************!*\
  !*** ./src/assets/scripts/about.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./modules/blur.js */ \"./src/assets/scripts/modules/blur.js\");\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYWJvdXQuanM/ZDdmNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2Fib3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9tb2R1bGVzL2JsdXIuanNcIjtcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/scripts/about.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/blur.js":
/*!********************************************!*\
  !*** ./src/assets/scripts/modules/blur.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar blur = function () {\n  var wrapper = document.querySelector('.blur__form-wrapper'),\n      form = document.querySelector('.blur__form');\n\n  return {\n    set: function set() {\n      var imgWidth = document.querySelector('.blur__background').offsetWidth,\n          posLeft = -wrapper.offsetLeft,\n          posTop = -wrapper.offsetTop,\n          blurCSS = form.style;\n      blurCSS.backgroundSize = imgWidth + 'px' + ' ' + 'auto';\n      blurCSS.backgroundPosition = posLeft + 'px' + ' ' + posTop + 'px';\n    }\n  };\n}();\n\nblur.set();\n\nwindow.onresize = function () {\n  blur.set();\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibHVyLmpzPzU3NDYiXSwibmFtZXMiOlsiYmx1ciIsIndyYXBwZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJmb3JtIiwic2V0IiwiaW1nV2lkdGgiLCJvZmZzZXRXaWR0aCIsInBvc0xlZnQiLCJvZmZzZXRMZWZ0IiwicG9zVG9wIiwib2Zmc2V0VG9wIiwiYmx1ckNTUyIsInN0eWxlIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJ3aW5kb3ciLCJvbnJlc2l6ZSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFRLFlBQVk7QUFDdEIsTUFBSUMsVUFBVUMsU0FBU0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBZDtBQUFBLE1BQ0VDLE9BQU9GLFNBQVNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FEVDs7QUFHQSxTQUFPO0FBQ0xFLFNBQUssZUFBWTtBQUNmLFVBQUlDLFdBQVdKLFNBQVNDLGFBQVQsQ0FBdUIsbUJBQXZCLEVBQTRDSSxXQUEzRDtBQUFBLFVBQ0lDLFVBQVUsQ0FBQ1AsUUFBUVEsVUFEdkI7QUFBQSxVQUVJQyxTQUFTLENBQUNULFFBQVFVLFNBRnRCO0FBQUEsVUFHSUMsVUFBVVIsS0FBS1MsS0FIbkI7QUFJQUQsY0FBUUUsY0FBUixHQUF5QlIsV0FBVyxJQUFYLEdBQWtCLEdBQWxCLEdBQXdCLE1BQWpEO0FBQ0FNLGNBQVFHLGtCQUFSLEdBQTZCUCxVQUFVLElBQVYsR0FBaUIsR0FBakIsR0FBdUJFLE1BQXZCLEdBQWdDLElBQTdEO0FBRUQ7QUFUSSxHQUFQO0FBV0QsQ0FmVyxFQUFaOztBQWlCQVYsS0FBS0ssR0FBTDs7QUFFQVcsT0FBT0MsUUFBUCxHQUFrQixZQUFZO0FBQzVCakIsT0FBS0ssR0FBTDtBQUNELENBRkQiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy9ibHVyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGJsdXIgPSAoZnVuY3Rpb24gKCkge1xyXG4gIHZhciB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJfX2Zvcm0td3JhcHBlcicpLFxyXG4gICAgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ibHVyX19mb3JtJyk7XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIGltZ1dpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJsdXJfX2JhY2tncm91bmQnKS5vZmZzZXRXaWR0aCwgXHJcbiAgICAgICAgICBwb3NMZWZ0ID0gLXdyYXBwZXIub2Zmc2V0TGVmdCxcclxuICAgICAgICAgIHBvc1RvcCA9IC13cmFwcGVyLm9mZnNldFRvcCxcclxuICAgICAgICAgIGJsdXJDU1MgPSBmb3JtLnN0eWxlO1xyXG4gICAgICBibHVyQ1NTLmJhY2tncm91bmRTaXplID0gaW1nV2lkdGggKyAncHgnICsgJyAnICsgJ2F1dG8nO1xyXG4gICAgICBibHVyQ1NTLmJhY2tncm91bmRQb3NpdGlvbiA9IHBvc0xlZnQgKyAncHgnICsgJyAnICsgcG9zVG9wICsgJ3B4JztcclxuXHJcbiAgICB9IFxyXG4gIH1cclxufSgpKTtcclxuXHJcbmJsdXIuc2V0KCk7XHJcblxyXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XHJcbiAgYmx1ci5zZXQoKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/blur.js\n");

/***/ })

/******/ });