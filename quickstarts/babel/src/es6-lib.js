import sum from 'lodash/sum';

const double = (number) => number * 2;
const addFive = (number) => sum([number, 5]);

export {
  double,
  addFive
};
