const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
    //console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== '  + expected);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  }
};

const eqArrays = function(arrayA, arrayB) {
  for (let i=0; i< arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// console.log(eqArrays([1, 2, 3], [3, 2, 1])) // => false

// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])) // => true
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false) // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true) // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false) // => false
