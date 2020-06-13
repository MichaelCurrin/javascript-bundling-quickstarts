var sum = require('lodash/sum');

var double = function(number) {
  return number * 2;
}
var addFive = function(number) {
  return sum([number, 5]);
}

module.exports = {
  double: double,
  addFive: addFive
}
