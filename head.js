const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

//test code
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const head = function (array) {
  let first = array[0];
  return first;
}

assertEqual(head([5, ,6, 7]), 5); 
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5, 6, 7]), 8); 
assertEqual(head([1]), 1); 
assertEqual(head([]), undefined); 