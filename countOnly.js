const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
    //console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== '  + expected);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  }
};
//test code
//assertEqual(1, 1);

//allItems: an array of strings to look through --> array
//itemsToCount: an object for what to count --> this will be an object

//Final function, pseudo function with notes in comments
const countOnly = function(allItems, itemsToCount) {
    const results = {};
  
    for (const item of allItems) {
      if (itemsToCount[item]) {
        if (results[item]) {
          results[item] += 1;
        } else {
        results[item] = 1
      }
    }
    return results;
  }
  };

// Function with notes
// const countOnly = function(allItems, itemsToCount) {
// //should give me count of item in allItems in an object
//   const results = {};

//   for (const item of allItems) {
//     //console.log(item);
//     // if (results[item]) {
//     //   results[item] += 1; //this creates count of each
//     if (itemsToCount[item]) {
//       if (results[item]) {
//         results[item] += 1;
//       } else {
//       results[item] = 1
//     }
//   }
//   return results;
// }
// };

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
//console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);