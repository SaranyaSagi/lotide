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

const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

module.exports = letterPositions;
