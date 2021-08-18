require('./js/math');
console.log('Hello World');
console.log('abe');

if (module.hot) {
  module.hot.accept('./js/math', () => {
    console.log('math发生了更新');
  });
}
