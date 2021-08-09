### devtool 的相关配置值

1. false：不使用 source-map
2. none：producution mode 下的默认值 也不适用 source-map 但只能在 production 模式下使用
3. eval development 的默认值 不生成 source-map 会把模块化的过程都放进 eval 里面
   其尾部的注释在 eval 会被浏览器解析定位文件的位置(与 sourcemap 类似) 但是没有 source-map 精确
   优点：eval 的打包速度非常快
4. eval-source-map 会生成 source-map 但生成的 source-map 是以 data-url 的形式添加到 eval 函数的后面的, 把 source-map 生成到 eval 函数里面去了
5. inline-source-map 把生成的 source-map 文件以 base-64 的形式放在了 bundle.js 的最后
6. cheap-source-map 会生成 source-map，但是会更高效一些，因为他没有生成散列映射, 在开发的时候我们通常只需要知道行就能定位错误了
7. cheap-module—source-map 在使用了一些编译 loader 的时候如 babel 将 ES6 转化为 ES5 会使一些代码的位置发生变化，而 cheap-module-会对这一情况进行优化
8. hidden-source-map 测试的时候不用这个因为我们需要定位错误信息的位置，但放到线上环境的时候可以使用这个让 source-map 失效
9. nosources-source-map 会生成 source-map,但是生成的 source-map 只有错误信息的提示，并不会生成源代码文件

#### 组合规则如下

- inline-|hidden-|eval：三个值三选一放在最前面
- nosources 可选值
- cheap 可选值，并且可以跟随 module

#### 最佳实践

- 开发阶段推荐 source-map 或者 cheap-module-source-map
- 测试阶段依然如上
- 发布阶段 false 缺省值(不写)
