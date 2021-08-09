/// <reference types="node" />
/// <reference types="lodash" />
import { sum } from "lodash";

export function double(value: number) {
  return value * 2;
}
export function addFive(value: number) {
  return sum([value, 5]);
}
