const assertEqual = require('../assertEqual');
const tail = require('../tail')

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
