const assertEqual = require('./assertEqual');

const countLetters = function(Sentence) {
  const counts = {};
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
};

module.exports = countLetters; 
