### webpack 的核心配置项

#### 更改文件的入口

- webpack --entry "入口所在的路径" 所以入口的名字不一定要为 index.js
- webpack --entry "入口" --output-path "出口" 打包并配置文件的输出位置 (实际项目中在 package.json 中配置)
- 建立 webpack.config.js

### 执行打包的过程

- 在 npm run build 的时候先查找是否有 webpack.config.js 文件
  有 --> 继续配置
  没有 --> 去 src 下按原来的步骤按默认步骤继续查找

  #### 解决方案

  文件默认配置文件为 webpack.config.js, 可以在 package.json 配置中添加--config 文件名

#### css 打包工具有关浏览器兼容性的一些配置

这些参数会给到一些工具使用: babel postcss-preset-env autoprefixer......
Browserlist 工具将查询结果共享给这些工具
Browserlist 是一个在不同的前端工具之间, 共享目标浏览器和 Node.js 版本的配置

##### 以下为他的一些参数

- > 1% 市场占有率 1% 查询网站 caniuse.com -> Site links Browser usage table
- last 2 versions 最后两个版本
- not dead 24 个月之内有更新
- not ie <= 8 ie 版本小于 8

##### 使用 browserslist

1. npx browserslist ">%1, last 2 version, not dead"
2. package.json 里面添加 browserslist 字段 其他插件会自动来这里查询
3. 在目录下直接建一个文件 .browserslistsrc

#### PostCSS

- PostCSS 是一个通过 js 转换样式的工具
- 这个工具可以帮我们进行一些 css 的适配，比如自动添加浏览器前缀，css 重置样式，但是实现这些功能我们需要为 postcss 添加插件

##### 使用

- 查找 PostCSS 在构建工具中的拓展 比如 webpack 中的 postcss-loader
- 选择可以添加的你需要的 PostCSS 相关插件

--
cli 中使用

1. npm 安装 postcss
2. npm 安装 postcss-cli
3. npx postcss -o result.css ./WEBPACK_02/src/css/test.css 但此时他做不了任何事 我们需要给他添加插件
   比如我们需要添加浏览器前缀,我们需要 npm 安装 autoprefixer,在命令行输入的时候也要指明
   npx postcss --use autoprefixer -o result.css ./WEBPACK_02/src/css/test.css

--
webpack 配置 loader

1. npm 安装 postcss
2. npm 安装 postcss-loader

--
插件 postcss-preset-env 可以将一些现代 css 特性兼容到大部分浏览器上

### 其他资源的处理

file-loader
url-loader 转化为 base64 的数据嵌入到 bundle.js 里面

#### 各有利弊

file-loader 将文件夹分开存放可以减少 bundle.js 的文件大小
url-loader 可以减少 http 请求
一般把大图片放在图片文件夹内小图片转化为 base64 处理
