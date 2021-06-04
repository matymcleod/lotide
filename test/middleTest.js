const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2]);

// const got = middle([1, 2, 3, 4,]);
// const want = [2, 3];

// assertArraysEqual(got, want);
// const assert = require('chai').assert;
// const middle   = require('../middle');

// // describe("#middle", () => {
// //   it("returns [] for [1]", () => {
// //     assert.strictEqual(middle([1]), []);
// //   });
//   it("returns [2, 3] for [1, 2, 3, 4]", () => {
//     assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]); 
//   });
// // });
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]