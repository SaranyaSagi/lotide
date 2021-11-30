
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');

const map = require('../map');

//Write test cases using at least 3 different ways of using map
//Think about different scenarios that make sense to test.

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // =>PASSED
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); //Passes
//assertArraysEqual(results1, [ 'g', 'c', 't', 'm']); //Supposed to not pass
assertArraysEqual(words.map(word => word[0]), results1); //Testing built in map with my map function and Passes