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

const assertObjectsEqual = function(object1, object2) {
  
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

//console.log(`Example label: ${inspect(actual)}`);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba);