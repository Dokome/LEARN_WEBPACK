const sum = function (num1: number, num2: number): number {
  return num1 + num2;
};

const mul = function (num1: number, num2: number): number {
  return num1 * num2;
};

const p = new Promise((resolve, reject) => {});

module.exports = {
  sum,
  mul,
  p,
};
