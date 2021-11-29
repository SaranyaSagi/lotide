const assertEqual = require('./assertEqual');

//.shift changes original
//.slice creates new

const tail = function(array) {
  let newArray = array.slice(1); //here noFirst returns apple or the first item
  return newArray;
};

module.exports = tail;