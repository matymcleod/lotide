const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual')

const middle = function(array) {
  let output = [];
  let middle =  array.length / 2 - 1;
  if (array.length > 2 && array.length % 2 === 0) {
    output.splice(0, 0, array[middle]);
    output.splice(1, 0, array[middle + 1]);
  } else if (array.length > 2) {
    output.splice(0, 0, array[middle + 0.5]);
  } else if (array.length <= 1) {
    return [];
  }
  return output;
};

console.log('middle with 0 elements: ', middle([]));
console.log('middle with 1 elements: ', middle([1]));
// console.log('middle with 2 elements: ', middle([1, 2]));
// console.log('middle with 3 elements: ', middle([1, 2, 3]));
console.log('middle with 4 elements: ', middle([1, 2, 3, 4]));
// console.log('middle with 5 elements: ', middle([1, 2, 3, 4, 5]));

// assertArraysEqual(middle([1]), []); // => []
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4,]), [2, 3]); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]

module.exports = middle;