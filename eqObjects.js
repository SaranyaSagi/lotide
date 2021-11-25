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
  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (let i=0; i< arrayA.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

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
  
  let objKeys1 = Object.keys(object1)
  let objKeys2 = Object.keys(object2)
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true
console.log(eqObjects(ab, ba));

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true


const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false