const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([8]));
// console.log(middle([8, 2]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([8]), []); // => should PASS
assertArraysEqual(middle([8, 2]), []); // => should PASS