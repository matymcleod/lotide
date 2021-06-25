// this function compares two arrays and returns a Boolean value that indicates whether they are equal or not.
// ie: eqArrays([1], [1]) will return true
// ie: eqArrays([1], [2]) will return false
const eqArrays = require('./eqArrays')

// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = require('./assertArraysEqual')

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    }
  }
  return results;
};

const data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const results1 = takeUntil(data1, x => x > 9); 
// x => x > 9 is the same as: const myFunc = function(x) {if(x < 9){return x;}};
console.log(results1);

const data2 = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const results2 = (takeUntil(data2, x => x === 'monday'));
console.log(results2);

// TESTS
// Fails
assertArraysEqual(results1, [9, 10, 11, 12, 13]);
assertArraysEqual(results2, ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);

// Passes
assertArraysEqual(results1, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
assertArraysEqual(results2, ['sunday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
