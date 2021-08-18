console.log('hello Index');
import Vue from 'vue';
new Vue({
  el: '#app',
}).$mount('#app');

// 魔法字符串可以被webpack解析并在配置中被使用
import(/* webpackChunkName: "foo_" */ './_foo').then((res) => {
  console.log('----------------------------------------------');
  console.log(res);
  console.log('----------------------------------------------');
});
// 异步加载一定会被分离
// import('./element').then((res) => {
//   document.body.appendChild(res.default);
// });
const button = document.createElement('button');
button.innerText = '加载';
button.onclick = function() {
  // prefetch -> 在页面空闲的时候加载
  import(
    /*webpackPrefetch: true*/

    /*webpackChunkName: "element"*/

    './element'
  ).then((res) => {
    document.body.appendChild(res.default);
  });
};
document.body.appendChild(button);
