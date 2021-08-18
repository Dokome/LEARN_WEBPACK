// 此处右侧应该为一个函数来接受环境参数
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveApp } = require('./paths');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

const commonConfig = {
  // context: path.resolve(__dirname, '../'),
  // entry: path.resolve(__dirname, '../src/main.js'),
  entry: resolveApp('./src/main.js'),
  // 若不适用path.reslove此时entry相对的路径是相对最外一层的
  // context默认就表示最外层 应该配置一个绝对路径
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'js/bundle.js',
  },
  resolve: {
    extensions: ['.js', '.mjs', '.json', '.jsx', '.ts', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: { plugins: [require('postcss-preset-env')] },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../index.html'),
    }),
  ],
};

module.exports = function(env) {
  const isProduction = env.production;
  process.env.production = isProduction;
  // 返回的对象为我们原来需要配置的对象
  return isProduction
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
};
