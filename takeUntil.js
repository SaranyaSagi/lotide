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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);
//[ 1, 2, 5, 7, 2 ]

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);
assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]);
//[ 'I\'ve', 'been', 'to', 'Hollywood' ]