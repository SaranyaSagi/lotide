
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

//map - 2 arguments (array, callback)
//return new array based on callback results

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  //console.log('array: ', array);
  //console.log('callback: ', callback);
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    //console.log('---');
    results.push(callback(item));
  }
  return results;
};

module.exports = map;