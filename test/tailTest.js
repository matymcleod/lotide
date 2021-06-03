// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// //The tests can be written below the definition of your function.
// // TEST CODE
// // Test Case: Check the original array 
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(tail(words), "Lighthouse,Labs"); // original array should still have 3 elements!
// const assert = require('chai').assert;
// const tail   = require('../tail');

// describe("#tail", () => {
//   it("returns 1 for [1, 2, 3]", () => {
//     assert.strictEqual(tail([1, 2, 3]), [2, 3]);
//   });
//   it("returns '5' for ['5']", () => {
//     assert.strictEqual(tail(['5']), []); 
//   });
// });

const assert = require('chai').assert;
const tail = require('../tail');
describe("#tail", () => {
  it("should return 'Labs' from ['Hello', 'Lighthouse', 'Labs']" , () =>{
  assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Labs"])
});
});