/// <reference types="node" />
/// <reference types="lodash" />
var _ = require('lodash');

const double = (value: number) => value * 2
const addFive = (value: number) => _.sum([value, 5])

export = {
  double,
  addFive
}
