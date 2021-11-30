//const eqArrays = require('./eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

let result3 = letterPositions("hello");
console.log(result3);
assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual((result3["h"]), ([0]));
assertArraysEqual((result3["e"]), ([1]));
assertArraysEqual((result3["l"]), ([2, 3]));
assertArraysEqual((result3["o"]), ([4]));