var __webpack_modules__ = {
  // 以模块路径作为方法名字
  './WEBPACK_04/src/js/math.js': function (
    __unused_webpack_module,
    __webpack_exports__,
    __webpack_require__
  ) {
    'use strict';
    __webpack_require__.r(__webpack_exports__);
    __webpack_require__.d(__webpack_exports__, {
      sum: function () {
        return sum;
      },
      mul: function () {
        return mul;
      },
    });
    //加法运算
    const sum = (num1, num2) => {
      return num1 + num2;
    };

    //乘法运算
    const mul = (num1, num2) => {
      return num1 * num2;
    };
  },
};

// 定义一个对象作为加载模块的缓存
var __webpack_module_cache__ = {};

// 通过这个函数来加载模块
function __webpack_require__(moduleId) {
  var cachedModule = __webpack_module_cache__[moduleId];
  // 判断是否加载过
  if (cachedModule !== undefined) {
    return cachedModule.exports;
  }
  // 定义新的模块
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  return module.exports;
}

!(function () {
  __webpack_require__.d = function (exports, definition) {
    for (var key in definition) {
      if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
      }
    }
  };
})();

!(function () {
  __webpack_require__.o = function (obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  };
})();

!(function () {
  __webpack_require__.r = function (exports) {
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
    }
    Object.defineProperty(exports, '__esModule', { value: true });
  };
})();

var __webpack_exports__ = {};
// 具体执行代码逻辑的地方
!(function () {
  // 加载模块
  const { sum, mul } = __webpack_require__('./WEBPACK_04/src/js/math.js');
  console.log(sum(1, 2));
  console.log(mul(1, 2));
})();
