// this function compares two arrays and returns a Boolean value that indicates whether they are equal or not.
// ie: eqArrays([1], [1]) will return true
// ie: eqArrays([1], [2]) will return false
const eqArrays = function(actual, expected) {
  if(actual.length !== expected.length){
    return false;
  }
  for(let i = 0; i < actual.length; i++) {
    if(actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}

// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}
assertArraysEqual([1, 2], [1, 2, 3]);
