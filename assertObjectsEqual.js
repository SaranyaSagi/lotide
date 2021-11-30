const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(object1, object2) {
  
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)) {
    console.log(`✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};


//NOTE - these have side effect

//console.log(`Example label: ${inspect(actual)}`);

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(ab, ba);