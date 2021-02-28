/// <reference types="node" />
/// <reference types="lodash" />
var _ = require("lodash");

function double(value: number) {
  return value * 2;
}

function addFive(value: number) {
  return _.sum([value, 5]);
}

export = {
  double,
  addFive,
};
