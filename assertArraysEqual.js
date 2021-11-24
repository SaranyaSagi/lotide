const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true? "✅" : "🛑");
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
//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

