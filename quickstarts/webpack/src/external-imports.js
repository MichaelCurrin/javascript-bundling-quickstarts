const sum = require("lodash/sum");

function double(number) {
  return number * 2;
}

function addFive(number) {
  return sum([number, 5]);
}

module.exports = {
  double,
  addFive,
};
