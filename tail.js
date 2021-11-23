const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//.shift changes original
//.slice creates new

const tail = function(array) {
  let newArray = array.slice(1); //here noFirst returns apple or the first item
  return newArray;
};
//console.log(tail(["apple", "banana", "cream", "pie", "chips"]));

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

//Test case 2
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

//Test case 3
const emptyArray = tail([]);  //empty array should yield empty array for its tail?
const oneItem = tail(["one element"]);  //an array with only one element should yield an empty array for its tail
assertEqual((emptyArray.length), 0);
assertEqual((oneItem.length), 0);