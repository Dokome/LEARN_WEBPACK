const autoprefixer = require('autoprefixer');
const path = require('path');
// 当前学习的文件夹
// const MYStudyFilePath = 'WEBPACK_02';
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
                // postCss依赖的插件
                // require.resolve()括号内的为相对路径
                plugins: [
                  // require('autoprefixer'),
                  // postcss-preset-env已经包含了autoprefixer的特性,所以用了后者可以不用前者
                  // 接受字符串参数
                  require('postcss-preset-env'),
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // 将 JS 字符串生成为 style 节点
          'style-loader',
          // 将 CSS 转化成 CommonJS 模块
          {
            // 注意css-loader只负责解析 插入还需要style-loader
            loader: 'css-loader',
            // options: 可选属性,值是一个对象或者字符串 值会被传入到loader之中
            options: {
              // importLoaders 选项允许你配置在 css-loader 之前有多少 loader 应用于 @imported 资源与 CSS 模块/ICSS 导入
              importLoaders: 2, //下面还有postcss-loader sass-loader故选2
            },
          },
          // 由于在外面做了postcss的配置，此处可以直接调用字符
          'postcss-loader',
          // 将 Sass 编译成 CSS
          'sass-loader',
        ],
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         // name: '[placeholder].png',
      //         // 生成文件名, 默认是32位16进制名称
      //         // 以下表示[原来的拓展名].[生成的哈希值截取6位].[原来的拓展名]
      //         name: '[name].[hash:6].[ext]',
      //         // outputpath 输出路径 此处为生成一个img文件夹 或者在上面的name改为
      //         // name: 'img/[name].[hash:6].[ext]',
      //         outputPath: 'img',
      //       },
      //     },
      //   ],
      // },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: 'img/[name].[hash:6].[ext]',
              // 小于limit的以64位编码
              limit: 100 * 1024,
            },
          },
        ],
      },
    ],
  },
};
