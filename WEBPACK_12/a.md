### WEBPACK 性能优化之代码分包

代码的懒加载

```JAVASCRIPT
button.onclick = function() {
  // prefetch -> 在页面空闲的时候加载
  import(
    /*webpackPrefetch: true*/
  //给异步加载的文件起别名
    /*webpackChunkName: "element"*/

    './element'
  ).then((res) => {
    document.body.appendChild(res.default);
  });
};
```

optimization.runtimeChunk 配置 runtime 相关的代码是否抽取到一个单独的 chunk 之中
runtime 相关代码指的是在 **运行环境** 中对模块进行解析,加载,模块信息相关代码
直接设置 true 是没有问题的 相当于 “multiple” 分开打包到多个文件 single 打包到一个文件
设置对象

runtimeChunk：{
name："runtime-why"
}

### CDN 配置

如果是加载 CDN 的资源的话可以用上之前使用过的 publicPath
一般是把第三方库放在 CDN 上,自己的源代码放在普通服务器

此时我们配置 externals 对象来取消库的本地引入(key: value) => (第三方库：第三方库暴露出来的对象)

### css 文件代码抽取到独立的文件夹中

在生产环境中我们需要抽离 css 代码的时候可以下载 webpakc 提供的 MiniCssExtractPlugin 插件,然后配置 filename
此时需要替换原来的 style-loader
