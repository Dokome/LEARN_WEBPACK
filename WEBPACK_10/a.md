### 开发环境和生产环境分离

webpack 中有些配置是开发环境和生产环境特有的我们可以再目录下建立一个 config 的文件夹把三中 webpack 的配置文件放入
然后再 packge.json 中按需求加载

- "build": "webpack --config ./WEBPACK_10/config/webpack.prod.js",
- "serve": "webpack serve --config ./WEBPACK_10/webpack.dev.js",

也可以写入--env 环境名称 后在配置文件中读取环境

- "build": "webpack --config ./WEBPACK_10/config/webpack.common.js --env production",
- "serve": "webpack serve --config ./WEBPACK_10/webpack.common.js --env development",

在根据环境配置的时候可以设置 process.env.production src 外部的配置文件例如 babel.config.js 使用

合并的时候我们可以借助一个插件 webpack-merge

### 代码的分离

把代码分离到不同的文件中按需加载文件
所有文件都被打包到了 bundle.js 中 文件过大需要分离
三种代码分离的方法

1. 入口起点：使用 entry 配置手动分离代码
2. 防止重复：使用 Entry Dependencies 或者 SplitChunksPlugin 去重和分离代码
3. 动态导入：通过模块的内联函数调用来分离代码
