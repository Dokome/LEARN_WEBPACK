const dateFormat = (time) => {
  return '2021-7-29' + time;
};

const priceFormat = (price) => {
  return price + '$';
};

module.exports = {
  dateFormat,
  priceFormat,
};
