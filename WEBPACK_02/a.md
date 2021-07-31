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
