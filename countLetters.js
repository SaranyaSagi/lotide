const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(` 🛑 Assertion Failed: ${actual} !== ${expected}`);
    //console.log('🛑🛑🛑 Assertion Failed: ' + actual + ' !== '  + expected);
  } else {
    console.log(` ✅ Assertion Passed: ${actual} === ${expected}`);
    //console.log('✅✅✅ Assertion Passed: ' + actual + ' === ' + expected);
  }
};
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);

const countLetters = function (Sentence) {
  const counts = {}
  const newString = Sentence.replaceAll(" ", "");
  //console.log(newString);
  for (const letter of newString) {
    //console.log(letter);
    if (counts[letter]) {
      counts[letter] += 1; 
    } else {
      counts[letter] = 1;
    }
  }
  return counts;
}

console.log(countLetters("hello out there"));
const result2 = countLetters("hello out there");
assertEqual(result2["h"], 2);
assertEqual(result2["w"], undefined);
assertEqual(result2["r"], 1);
assertEqual(result2[" "], undefined);