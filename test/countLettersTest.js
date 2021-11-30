const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters')
// const result1 = (countLetters("lighthouse in the house"));
// console.log(result1);
// assertEqual(result1["h"], 4);
// assertEqual(result1["w"], undefined);
// assertEqual(result1["l"], 1);
// assertEqual(result1[" "], undefined);

console.log(countLetters("hello out there"));
const result2 = countLetters("hello out there");
assertEqual(result2["h"], 2);
assertEqual(result2["w"], undefined);
assertEqual(result2["r"], 1);
assertEqual(result2[" "], undefined);