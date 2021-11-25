//for each value of sentence
//find index anywhere it occurs
//push it to [] for that item value

//create array for each character
//then push index values into it
//then add these arrays as key-values to results

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {            //h is not in results
      results[sentence[i]] = [i];        //then the index goes into the array
    } else {
      //console.log(sentence[i])          //for repeating ones it already exists
      results[sentence[i]].push(i); // so pushing that new index in as well.
    }
  }
  return results;
};

const eqArrays = function(arrayA, arrayB) {
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
//console.log(eqArrays([1, 2, 3], [1, 2, 3])) // => true
//assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS

let result3 = letterPositions("hello");
console.log(result3);
assertArraysEqual(letterPositions("hello").e, [1]);

assertArraysEqual((result3["h"]), ([0]));
assertArraysEqual((result3["e"]), ([1]));
assertArraysEqual((result3["l"]), ([2, 3]));
assertArraysEqual((result3["o"]), ([4]));