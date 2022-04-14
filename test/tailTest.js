const tail = require('../tail.js')
const assert = require('chai').assert

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// //// no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("#tail", () => {
  it("returns 2 for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs'])
  });

  it("returns 1 for ['Hello', 'World']", () => {
    assert.deepEqual(tail(['Hello', 'World']), ['World'] )
  });
});