var lib = require('./lib.js');
var lib = require('./external-import.js');

console.log('Lib test');
console.log(lib.double(2));

console.log('Lodash tests');
console.log(lib.double(2));
console.log(lib.addFive(2));

