//Implement 'without' which will return a subset of given array, removing unwanted elements
//function(sourceArray, itemsToRemoveArray)
//return new array which has itemsToRemove items removed from source array. 
//without([1, 2, 3,], [1]) --> [2,3]
//new array should not modify original array. maybe use slice. 
//so test for that in test cases. 

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
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true

const without = function (source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {   //if I try for (let item of source) { --> final newArray --> [undefined, undef, undef]
    if (!itemsToRemove.includes(source[i])) {   //(.includes is key) here it means if itemstoRemove does not include because of ! 
      newArray.push(source[i])
    }
  }
  return newArray;
}

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// const without = function (source, itemsToRemove) {
//   let newArray = [];
//   for (let items of source) {
//     if (source[items] !== itemsToRemove[items]) {
//       newArray.push(source[items]);
//     }
//   }
//   return newArray;
// }                                   ///this just gives blank for newArray --> []