### 邂逅 webpack 以及初体验

#### 打包启动的方法

- 在命令行直接调用 node_modeules 中.bin/webpack
- 全局安装 webpack 直接调用
- 在 package-json 中的 script 文件夹中添加指令 "webpack"
- 用 npx webpack 是对 1 的另一种写法

#### 其他有关事项

- 在命令行执行打包的时候会在当前的路径下寻找 src 文件夹并将其打包
- 会在当前 src 所在的目录上生成一个 dist 文件夹来存放输出文件
- 打包时会查找 src 的 index.js 为入口 并查找他依赖图的结构
