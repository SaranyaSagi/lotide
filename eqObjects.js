const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


//for 2 objects to be equal
// - they should have same num of keys
// - value of each key in one object is same as key from other object

//1. use Object.keys and compare lengths, if not equal return false
//2. use for..of loop through one of objects
//   inside loop
//   Compare both objects' values
//   use === (to check types are same)
//   if no match -- return false

const eqObjects = function(object1, object2) {
  
  let objKeys1 = Object.keys(object1);
  let objKeys2 = Object.keys(object2);
  if ((objKeys1.length) !== ((objKeys2.length))) {
    return false;
  }

  for (const key of objKeys1) {
    //console.log(key, object1[key], object2[key], Array.isArray(object1[key]), Array.isArray(object2[key]));
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (eqArrays(object1[key], object2[key]) === false) {
        return false; //return that specific key
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

module.exports = eqObjects;
