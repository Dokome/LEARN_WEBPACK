const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
  entry: path.resolve(__dirname, './src/main.js'),
  mode: 'development',
  output: {
    // 打包后文件的输出目录
    path: path.resolve(__dirname, './build'),
    filename: 'js/bundle.js',
    publicPath: '/',
  },
  // 不加这个浏览器不会自动刷新
  target: 'web',
  devServer: {
    // 热模块更新
    hot: true,
    publicPath: '/',
    // contentBase:
  },
  plugins: [new HtmlWebpackPlugin(), new CleanWebpackPlugin()],
};
