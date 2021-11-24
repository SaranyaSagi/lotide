const eqArrays = function(arrayA, arrayB) {
  for (let i=0; i< arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  console.log(eqArrays(arrayA, arrayB) === true? "✅" : "🛑");
};

console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

