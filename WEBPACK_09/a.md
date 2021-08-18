#### DevServer 和 HMR

引出问题:

- 每次修改源代码的时候我们都需要通过 npm run build 进行打包

1. 通过 watch 指令来进行命令的监听
   在 package.json 里面修改 npm run build 在 webpack 的命令之后添加 --watch
2. 通过 webpack 配置文件添加 watch: true 字段
3. 通过 VScode 的 live-server 插件

效率并不是特别高

1. 所有的源代码都进行了重新的编译
2. 编译成功之后都会生成新的文件
3. liveServer 属于 vscode 的插件 不属于 webpack 的解决方案 而且 live-Server 会刷新整个页面

webpack-dev-server WDS hot module replacement(HMR：模块热替换)
他可以不进行文件的生成操作(直接将编译的结果放到内存之中)
默认情况下 wds 会进行 live reloading 对浏览器进行刷新

我们可以在 webpack.config.js 里面增加 devserver 字段但此时热模块更新启用了浏览器还是会刷新整个页面
这是因为我们需要去指定具体的模块
比如在 main.js 中写上

```javascript
if (module.hot) {
  module.hot.accept('模块名称' /*模块名称可以是数组*/, () => {
    //   回调函数
  });
}
```

output 的 publicPath: 默认为空字符串 在运行的服务的引用路径中 src = publicPath + "文件路径/文件"
在一些脚手架工具中默认会把他设置成一个斜杠防止某些浏览器不会自动加上斜杠导致 url 错误
当我们访问一些静态资源文件的时候也可以通过配置这个选项来指定路径

devServer 一些属性的配置
publicPath: 与 output 类似, 官方建议与 output 一致
contentBase 默认指向的是最外层的目录 是静态页面直接引入静态资源时查找的目标
watchContentBase 监听 contentBase 中文件的变化
hot 是否开启热更新
hotOnly 编译出错的时候一般我们修复完 bug 页面会自动刷新,开启这个属性后可以不让页面进行刷新
host 设置一些服务器可以被外部访问的参数
port 端口
compress 是否开启静态文件压缩 gzip compression 浏览器会自动对 gzip 进行解压的
open 是否打开浏览器
proxy 解决跨域问题 把路径映射成其他地址

### resolve 模块解析

modules 默认值为 node_modules 默认会从 node_modules 里面查找

- 如果是一个文件 如果改文件具有拓展名，则直接打包文件 否则将使用 extensions 选项作为文件名拓展解析
  当我们用 vue,react 等文件时不写后缀名得再 extensions 里面加上
- 如果是一个文件夹，会根据 mainFiles 配置选项中指定的文件顺序进行查找 默认值是 index 再根据 extensions 解析

alias 配置文件的别名, 当我们的目录比较深的时候，比如../../../ac.js，我们可以给这个路径起一个别名
