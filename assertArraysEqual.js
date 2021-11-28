const eqArrays = require('./eqArrays');
// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`✅✅✅  Assertion Passed: ${actual} IS EQUAL TO ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} IS NOT EQUAL TO ${expected}`);
  }
}
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2], [1, 2, 3]);
// assertArraysEqual(["word", "to", "your", "mother"], ["word", "to", "your", "mother"]);
// assertArraysEqual(["word", "to", "your", "mother"], ["word", "to", "your", "father"]);
// assertArraysEqual(["word", "to", "your", "mother"], ["word", "to", "your"]);

// exports assertArraysEqual function for global use
module.exports = assertArraysEqual;