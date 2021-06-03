const assertEqual = require('./assertEqual');
const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i] || arr1.length !== arr2.length) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays([1, 2], [1, 2, 3]), true);
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [1, 2]);
module.exports = eqArrays;