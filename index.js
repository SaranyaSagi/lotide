const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');


// module.exports = {
//   head:   head,
//   tail:   tail,
//   middle: middle,
//   assertEqual: assertEqual,
//   eqArrays: eqArrays,
//   assertArraysEqual: assertArraysEqual
// };


module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  without,
  takeUntil,
  map,
  letterPositions,
  findKey,
  eqObjects,
  countOnly,
  countLetters
};