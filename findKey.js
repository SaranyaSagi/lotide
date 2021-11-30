const assertEqual = require('./assertEqual');

const findKey = function(object, callback) {
  //scan object, return first key that callback says is truthy
  //if no key is found --> return undefined.
  for (const key of Object.keys(object)) {
    // console.log("key: ", key);
    //console.log("Object_value: ", object[key]);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;