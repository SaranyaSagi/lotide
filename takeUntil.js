const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//should return slice of array with elements taken from begininng.
//It should keep going until the callback/predicate returns a truthy value.
//callback - provided only one value - the item in the array.

//hint - we don't need to loop through entire array once we get truthy value.
const takeUntil = function(array, callback) {
  let resultArray = [];
  for (let item of array) {
    if (callback(item)) {
      break;
    } else {
      resultArray.push(item);
    }
  }
  return resultArray;
};

//ADD assertArraysEqual and eqArrays function.
//compare return value with expected array.

module.exports = takeUntil;