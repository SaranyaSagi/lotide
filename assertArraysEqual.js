const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  console.log(eqArrays(arrayA, arrayB) === true ? "✅" : "🛑");
};

module.exports = assertArraysEqual;

//NOTE - THESE HAVE SIDE EFFECTS

// console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

