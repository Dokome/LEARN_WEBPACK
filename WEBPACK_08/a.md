### ts 和 eslint

babel 对 ts 进行编译的时候不需要依赖其他 ts 相关的插件
ts 配置预设 @babel/preset-typescript
ts 配置文件初始化 tsc --init

#### ts-loader 和 babel-loader的对比
- babel-loader: 优点 polyfill 缺点 不会对代码进行类型的校验
最佳实践: 当需要进行polyfill操作的时候我们用babel-loeader时可以先用tsc指令对类型进行检测后再打包
--- tsc进行检测的时候会生成相应的js文件,此时我们可以用tsc --noEmit
完整写法: 再packge.json里面配置script: npm run ....(检验指令) & webpack ...config.js(webpack配置指令)
但这样写只有在每次打包的时候才能进行编译，如果我们希望在页面修改的时候进行编译的话可以使用
'xxx'：tsc --noEmit --watch

#### eslint
初始化eslint的配置文件
npx eslint --init
当某一类型报错的时候如 "no-unused-vars" (有变量定义了没有使用) 我们可以在eslint的配置文件里面配置rule
"no-unused-vars" : "off"


- 配置"eslint-loader"在打包的 时候对代码进行编译