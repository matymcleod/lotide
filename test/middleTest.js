const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2]);

const got = middle([1, 2, 3, 4,]);
const want = [2, 3];

assertArraysEqual(got, want);