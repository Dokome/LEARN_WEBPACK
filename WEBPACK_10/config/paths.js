const path = require('path');
// 传入目录所在的文件夹
//比如 "build": "webpack --config ./WEBPACK_10/config/webpack.prod.js", 为/config
const appDir = path.resolve(__dirname, '../');
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = {
  resolveApp,
};
