require('../css/index.css');
require('../css/component.scss');
/*
   import 'css-loader!../css/index.css';可以在css的位置前加xxx-loader为了和路径和其他loader分开需要加入！
   但是import不能和CommonJS的语法一起使用，否则运行会报错
  引入css 否则css也不在关系图里面 但是需要专门配置 否则无法使用 需要对应的loader
*/

const createElement = (name) => {
  let div = document.createElement(name);
  div.style.width = 100 + 'px';
  div.style.height = 100 + 'px';
  div.style.backgroundColor = 'red';
  div.className = 'myDiv';
  div.innerHTML = 'hello world';
  if (name === 'img') {
    div.src =
      require('../img/34b70b4101964d38d098384bb035f6d07ab5a5a5f281d2976.jpg').default;
  }
  return div;
};

module.exports = {
  createElement,
};
