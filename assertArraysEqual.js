const eqArrays = require('./eqArrays');

const assertArraysEqual = function(arrayA, arrayB) {
  console.log(eqArrays(arrayA, arrayB) === true ? "✅" : "🛑");
};

module.exports = assertArraysEqual;


