// Works with and without `.js` extension.
import { addFive, double } from "./es6-lib.js";
// Note explict `.ts` extension to avoid error.
import { addFive as addFiveTS, double as doubleTS } from "./ts-lib.ts";

console.log(double(2));
console.log(addFive(2));

console.log(doubleTS(2));
console.log(addFiveTS(2));
