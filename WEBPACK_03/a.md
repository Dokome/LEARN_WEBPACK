### 资源模块类型

- asset module type
  在 webpack5 之前 在家资源我们需要使用各种 loader 如 url-loader file-loader raw-loader
  在 webpack5 之后 我们可以直接使用资源模块类型(asset module type) 来替代上面的 loader

#### 通过添加 4 种新的模块类型来替换这些 loader：

1. asset/resource 发送一个单独的文件并到处 URL 之前用 file-loader 实现
2. asset/inline 导出一个资源的 data URI 之前通过 url-loader 实现
3. asset/source 导出资源源代码 之前通过 raw-loader 实现
4. asset 在导出一个 data URI 和发送一个单独的文件夹之间自动选择。之前通过 url-loader 并且配置资源的体积实现
   这样就不用像之前一样单独安装 file-loader 和 url-loader 了

以上配置的输出文件的统一文件位置可以在 output 下面的 assetModuleFilename 里面配置

### Plugins

plugins 和 loader 有所不同 后者是对不同格式的文件进行转化 而 plugins 是一些拓展业务的实现

-- 实用的 plugins
clean-webpack-plugin 每次打包自动删除以前的 build
html-webpack-plugin 自动生成 html
copy-webpack-plugin 拷贝文件
