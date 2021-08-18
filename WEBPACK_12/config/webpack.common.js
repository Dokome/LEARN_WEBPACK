// 此处右侧应该为一个函数来接受环境参数
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolveApp } = require('./paths');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const commonConfig = (isProduction) => {
  return {
    // entry: resolveApp('./src/main.js'),
    // 多入口
    entry: {
      main: resolveApp('./src/main.js'),
      index: resolveApp('./src/index.js'),
      // main 和 index 同时需要lodash 但如果直接配置的以上两个文件会重复生成lodash的代码
      // main: { import: "./src/main.js", dependOn: "lodash" }
      // index: { import: "./src/index/js", depenOn: [share, lodash] }
      // lodash: "loadash"
      // share: [dayJs, animaiteJS]
    },
    output: {
      path: resolveApp('./build'),
      // 这里配置的name的值实际上就是entry中key的值
      filename: 'js/[name].bundle.js',
      // 抽离出来的代码的名字(异步导入)
      chunkFilename: 'js/[name].[hash:6].chunk.js',
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
            // 'style-loader',
            isProduction ? MiniCssExtractPlugin.loader : 'style-loader',
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
    optimization: {
      // 模块的id生成采用什么算法
      // 使用自然数 (不推荐：当中间某个包删除之后可能会导致其他包的引入错误)
      // named 使用包所在的目录名称 (开发环境推荐使用)
      // deterministic 针对相同的文件生成的id是不变的 (生产环境推荐使用)
      // chunkIds: 'deterministic', 会给我们自动配置无需手动设置
      splitChunks: {
        // async 对异步的导入进行分离 initial对同步的导入进行分离 all 都会处理
        chunks: 'all',
        // minSize 最小尺寸: 如果拆分出来一个 那么拆分出来的这个包的大小为minSize 默认为20000
        minSize: 20000,
        // maxSize 将大于maxSize的包拆分成不小于minSize 的包 所以一般情况下maxSize是大于等于minSize的
        maxSize: 20000,
        // minChunks表示引入的包至少被导入几次
        minChunks: 1,
        // cacheGroups
        cacheGroups: {
          // 将第三方模块放入一个缓存里面
          // key value
          vender: {
            // test 匹配
            test: /[\\/]node_modules[\\/]/,
            filename: 'js/[id]_venders.js',
          },
        },
      },
      runtimeChunk: true,
    },
    externals: {
      vue: 'Vue',
    },
  };
};

module.exports = function(env) {
  const isProduction = env.production;
  process.env.production = isProduction;
  // 返回的对象为我们原来需要配置的对象
  return isProduction
    ? merge(commonConfig(isProduction), prodConfig)
    : merge(commonConfig(isProduction), devConfig);
};
