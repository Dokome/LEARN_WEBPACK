const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  module: {
    rules: [{ test: /\.vue$/, use: ['vue-loader'] }],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './WEBPACK_08/index.html',
      // title: 'MYVUE',
    }),
    new VueLoaderPlugin(),
  ],
};
