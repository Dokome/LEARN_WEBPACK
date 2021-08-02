const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// 当前学习的文件夹
// const MYStudyFilePath = 'WEBPACK_04';
const MYStudyFilePath = '';
// 配置webpack的一些参数
module.exports = {
  // 输入 此处可以使用相对路径
  entry: path.resolve(__dirname, `./${MYStudyFilePath}/src/main.js`),
  // 输出
  output: {
    // 输出后的文件名字 默认为入口js的名字
    filename: 'bundle.js',
    // 输出到哪一个地方 此处要写[绝对]路径不然会报错
    path: path.resolve(__dirname, `./${MYStudyFilePath}/build`),
    // 通过assetModule打包的属性输出的位置
    // 但是此处[ext]前面是不需要.的 此处对应的是所有,但实际情况我们要分开写,所以写道下面的模块之中
    // assetModuleFilename: 'img/[name].[hash:10][ext]',
  },
  // 配置loader
  module: {
    // 规则对象
    rules: [
      {
        // 匹配资源，匹配到的资源就会使用这个loader 使用正则表达式
        test: /\.css$/i,
        // loader名称 一般不这么写 是下面只有一个loader写法的简写
        // loader: 'css-loader',
        // use: [useEntry]
        use: [
          // webpack是从后向前解析的, 所以要把style-loader放在css-loader前面
          {
            loader: 'style-loader',
          },
          // 直接写字符串"css-loader"作为参数最终还是会被转换成对象{ loader: "css-loader" }
          {
            // 注意css-loader只负责解析 插入还需要style-loader
            loader: 'css-loader',
            // options: 可选属性,值是一个对象或者字符串 值会被传入到loader之中
            options: {
              // importLoaders 选项允许你配置在 css-loader 之前有多少 loader 应用于 @imported 资源与 CSS 模块/ICSS 导入
              importLoaders: 1, //下面还有postcss-loader故选1
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        // type: 'asset/inline', 相当于url-loader的效果 但不能限制大小
        // type: 'asset/source' 导出资源的源代码
        // type: 'asset/resource', file-loader的效果
        // generator: {
        //   filename: 'img/[name].[hash:10][ext]',
        // }, 配合 asset/resource 使用
        type: 'asset', //相当于url-loader能判断大小是否64编码的效果
        generator: {
          filename: 'img/[name].[hash:6][ext]',
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024,
          },
        },
      },
      {
        test: /\.(ttf|eot|woff2?)$/i,
        type: 'asset/resource',
        // 同理 MP3 MP4等文件也能使用此工具
        generator: {
          filename: 'font/[name].[hash:6][ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Dokom Webpack',
      // htmlWebpackplugin有自带的html模板,我们可以在配置中指定自己的模板
      template: './WEBPACK_04/public/index.html',
    }),
  ],
};
