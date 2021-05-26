// this function compares two arrays and returns a Boolean value that indicates whether they are equal or not.
// ie: eqArrays([1], [1]) will return true
// ie: eqArrays([1], [2]) will return false
const eqArrays = function(arr1, arr2) {
  let isEqual = true;
  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      isEqual = false;
      break;
    }
  }
  return isEqual;
}

// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(arr1, arr2){
  console.log(eqArrays(arr1, arr2));
}
assertArraysEqual([1, 2, 3], [1, 2, 3]);
