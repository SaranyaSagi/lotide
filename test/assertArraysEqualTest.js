const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS