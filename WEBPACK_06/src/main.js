// stable 标准库
require('core-js/stable');
require('regenerator-runtime/runtime');
require('./ts/01.ts');
const { sum, mul } = require('./js/math');
console.log(sum(1, 2));
console.log(mul(1, 2));
