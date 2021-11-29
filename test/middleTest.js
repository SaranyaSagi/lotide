const assert = require('chai').assert;
//const assertArraysEqual = require('../assertArraysEqual')
const middle = require('../middle');

describe("#middle", () => {
  it("returns the 2 middle numbers for even lists [1, 2, 3, 4, 5, 5, 6,]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

  it("returns 1 middle number [3] for odd lists [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]); 
  });
  
  it("returns empty array [] for array with single number ", () => {
    assert.deepEqual(middle([8]), []); 
  });

  it("returns empty array [] for array with two numbers", () => {
    assert.deepEqual(middle([8, 2]), []); 
  });
});