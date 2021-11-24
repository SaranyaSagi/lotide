const eqArrays = function(arrayA, arrayB) {
  // if (arrayA.length !== arrayB.length) {
  //   return false;
  // }

  for (let i=0; i< arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(arrayA, arrayB) {
  console.log(eqArrays(arrayA, arrayB) === true? `✅ Assertion passed: ${arrayA} === ${arrayB}` : `🛑 Assertion failed: check`);
};

// console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
// assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

//implement middle which will take in an array and return middle most.
//if only 2 items --return empty array
//if array has odd number of elements --> return 1 middle
//if array has even number of elements --> return two middles in array format/

const middle = function(array) {
  let midArr = []
  if (array.length === 1 || array.length === 2) {
    //let mid0Arr = []
    return midArr;
  }

  if (array.length > 2) {

   if (array.length % 2 === 0) {
    //let mid2Arr = ["a", "b"]
    midArr[0] = array[(array.length/2) - 1];
    midArr[1] = array[(array.length/2)];
    return midArr;
  } 

  if (array.length % 1 === 0) {
    //let mid1Arr = ["s"]
    midArr[0] = array[(array.length - 1)/2];
    return midArr;
  }
}
};

// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5]));
// console.log(middle([8]));
// console.log(middle([8, 2]));

assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([8]), []); // => should PASS
assertArraysEqual(middle([8, 2]), []); // => should PASS

