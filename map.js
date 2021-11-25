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

const results1 = map(words, word => word[0]);
console.log(results1);

const eqArrays = function(arrayA, arrayB) {
  if (arrayA.length !== arrayB.length) {
    return false;
  }
  
  for (let i = 0; i < arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  console.log(eqArrays(arrayA, arrayB) === true ? "✅" : "🛑");
};

//Write test cases using at least 3 different ways of using map
//Think about different scenarios that make sense to test.

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]); // =>PASSED
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]); //Passes
//assertArraysEqual(results1, [ 'g', 'c', 't', 'm']); //Supposed to not pass
assertArraysEqual(words.map(word => word[0]), results1); //Testing built in map with my map function and Passes