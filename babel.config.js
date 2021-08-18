//
const presets = [['@babel/preset-env'], ['@babel/preset-typescript']];
const plugins = [];
console.log(process.env.production);
// 根据环境来放入插件或预设
if (/* isDevelopment */ 1) {
  plugins.push(/* 在开发环境的时候加入 */);
}

module.exports = {
  presets,
};
