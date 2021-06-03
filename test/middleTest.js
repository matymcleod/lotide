// const middle = require('../middle');
// const assertArraysEqual = require('../assertArraysEqual');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2]);

// const got = middle([1, 2, 3, 4,]);
// const want = [2, 3];

// assertArraysEqual(got, want);
const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.strictEqual(middle([1, 2, 3]), 2);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(middle(['1', '2', '3', '4']), ['2', '3']); 
  });
});