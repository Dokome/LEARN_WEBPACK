// ES6
import { sum, mul } from './js/math.js';

// CommonJS 浏览器默认情况下一定会报错 因为浏览器不支持
// Uncaught ReferenceError: require is not defined
const { dateFormat, priceFormat } = require('./js/format.js');

console.log(sum(20, 30));
console.log(mul(20, 30));

console.log(dateFormat(100));
console.log(priceFormat(100));
