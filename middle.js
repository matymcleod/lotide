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
// check length of input to see if length is odd or even
const middle = function (arr){
  let theMiddle;
  if(arr.length === 1 || arr.length === 2){
    return [];
  }
  // this code works if the array length is odd.
  theMiddle = Math.floor(arr.length / 2);
  if(arr.length % 2 !== 0 ){
    return [arr[theMiddle]];
  } else {
    return [arr[theMiddle -1], arr[theMiddle]];
  }
}

const got = middle([1, 2, 3, 4,]);
const want = [2, 3];

assertArraysEqual(got, want);