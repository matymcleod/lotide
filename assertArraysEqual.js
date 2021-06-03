const eqArrays = require('./eqArrays');
// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2], [1, 2, 3]);
module.exports = assertArraysEqual;