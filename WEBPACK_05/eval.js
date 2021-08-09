/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ './WEBPACK_05/src/js/math.js':
      /*!***********************************!*\
  !*** ./WEBPACK_05/src/js/math.js ***!
  \***********************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        'use strict';
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "sum": function() { return /* binding */ sum; },\n/* harmony export */   "mul": function() { return /* binding */ mul; }\n/* harmony export */ });\n//加法运算\r\nconst sum = (num1, num2) => {\r\n  return num1 + num2;\r\n};\r\n\r\n//乘法运算\r\nconst mul = (num1, num2) => {\r\n  return num1 * num2;\r\n};\r\n\n\n//# sourceURL=webpack://learn_webpack/./WEBPACK_05/src/js/math.js?'
        );
        // 其尾部的注释在eval会被浏览器解析定位文件的位置
        /***/
      },

    /***/ './WEBPACK_05/src/main.js':
      /*!********************************!*\
  !*** ./WEBPACK_05/src/main.js ***!
  \********************************/
      /***/ function (
        __unused_webpack_module,
        __unused_webpack_exports,
        __webpack_require__
      ) {
        eval(
          'const { sum, mul } = __webpack_require__(/*! ./js/math */ "./WEBPACK_05/src/js/math.js");\r\nconsole.log(sum(1, 2));\r\nconsole.log(mul(1, 2));\r\n\n\n//# sourceURL=webpack://learn_webpack/./WEBPACK_05/src/main.js?'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: 'Module',
        });
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = __webpack_require__(
    './WEBPACK_05/src/main.js'
  );
  /******/
  /******/
})();
