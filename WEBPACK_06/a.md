### babel 深入解析

Babel 是一个工具链，主要用于旧浏览器或者缓解中将 ECMAScript 2015+代码转换为向后兼容版本的
JavaScrip; 包括：语法转换、源代码转换、Polyfill 实现目标缓解缺少的功能等；

#### babel 入门

命令行使用安装 @babel/cli 在 webpack gulp 等打包工具中不需要安装
打包配置中使用 npm 安装 @babel/core babel 核心

比如我们需要转换箭头函数，那么我们就可以使用箭头函数转换相关的插件：
npm install @babel/plugin-transform-arrow-functions -D
npx babel src --out-dir dist --plugins=@babel/plugin-transform-arrow-functions
查看转换后的结果：我们会发现 const 并没有转成 var
这是因为 plugin-transform-arrow-functions，并没有提供这样的功能；
我们需要使用 plugin-transform-block-scoping 来完成这样的功能；
npm install @babel/plugin-transform-block-scoping -D
npx babel src --out-dir dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions

-
-
-
- 但是如果要转换的内容过多，一个个设置是比较麻烦的，我们可以使用预设（preset）：
  后面我们再具体来讲预设代表的含义； 安装@babel/preset-env 预设：
  npm install @babel/preset-env -D
  命令行使用 npx babel 要转换的文件/文件夹 --out-dir 输出文件夹 --preset=@babel/preset-env

#### babel 的 preset 配置

和 postcss-preset-env 类似，可以将 loader 的配置文件放在外部
babel 的配置文件命名

- babel.congig.json/.js/.cjs/.mjs 推荐
- .babelrc.json/.js/.cjs/.mjs /babelrc

#### polyfill

通俗的来说是一些新特性的补丁，因为有些旧的浏览器不一定会支持新的语法
在 babel7 里面这个包已经不推荐使用了
应该用 core-js 和 regenerator-runtime 来代替
此处 install 的时候不应该使用-D 而是--save 因为生产环境的时候也需要用上不只是在开发环境之中
但是写成-D 也不影响正常使用，只是规范性的问题

#### ts-loader

此时需要安装 ts-loader 和 typescript 当进行打包的时候需要 tsconfig.json 我们可以不用手动创建
而通过 tsc --init
