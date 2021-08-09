import { sum } from "lodash";

export function double(value) {
  return value * 2;
}
export function addFive(value) {
  return sum([value, 5]);
}
