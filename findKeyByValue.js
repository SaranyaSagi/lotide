const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
    //console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== '  + expected);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  }
};
  //find and return first key that matches someValue
  //if no match -- return undefined.
  //hint use Object.keys(someObject)
  //hint use for..of to loop over the keys returned by Object.keys

//     for ..of method
const findKeyByValue = function(someObject, someValue) {
  //let allKeys = Object.keys(someObject);
  //console.log(allKeys);
  
  for (const key of Object.keys(someObject)) {
    if (someObject[key] === someValue) {
      return key; //return that specific key
    } 
  }
  return undefined;  //put this outside for loop not in else
};

//            for..in method - even simpler
// const findKeyByValue = function(someObject, someValue) {
//   for (const key in someObject) {
//     //console.log(keys);
//     //console.log(someObject[key])
//     if (someObject[key] === someValue) {
//       return key;
//     }
//   }
//   return undefined;
// }

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

// let result4 = findKeyByValue(bestTVShowsByGenre, "The Wire") //return drama
// console.log(result4);

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);