const assert = require('chai').assert;
//const assertEqual = require('../assertEqual');
const tail = require('../tail')

// //Test case 2                                
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words);
// assertEqual(words.length, 3);


describe("#tail", () => {
  it("returns 2 elements for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']).length, 2);
  });

  it("returns 1st element as 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[0], 'Lighthouse');
  });

  it("returns 2nd element is 'Labs' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], 'Labs'); 
  });

  it("returns empty array as tail of an empty array []", () => {
    assert.strictEqual(tail([]).length, 0); 
  });

  it("returns empty array as tail of an array with single item ['one element']", () => {
    assert.strictEqual(tail(['one element']).length, 0); 
  });
});