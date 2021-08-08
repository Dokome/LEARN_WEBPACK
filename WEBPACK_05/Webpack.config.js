const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 模式 不设置默认情况下为production
  mode: 'development',
  //当mode为development的时候devtool的默认值为eval
  devtool: 'inline-source-map',
  entry: path.resolve(__dirname, './src/main.js'),
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, './build'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'W4',
    }),
  ],
};
