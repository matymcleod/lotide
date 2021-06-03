const eqArrays = require('./eqArrays');
// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}

module.exports = assertArraysEqual;