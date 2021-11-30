//Implement 'without' which will return a subset of given array, removing unwanted elements
//function(sourceArray, itemsToRemoveArray)
//return new array which has itemsToRemove items removed from source array.
//without([1, 2, 3,], [1]) --> [2,3]
//new array should not modify original array, maybe use slice.
//so test for that in test cases.

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {  //if I try for (let item of source) { --> final newArray --> [undefined, undef, undef]
    if (!itemsToRemove.includes(source[i])) {   //(.includes is key) here it means if itemstoRemove does not include because of !
      newArray.push(source[i]);
    }
  }
  return newArray;
};

module.exports = without; 