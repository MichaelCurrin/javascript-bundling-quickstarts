// Note `ts-lib` with no extension, as using `.ts` breaks in the `.js` output directory.
const { addFive } = require('./ts-lib')

console.log("addFive");

const input = 2
const result = addFive(input)
console.log(input, ' => ', result);
