const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2){
  let newArr1 = "";
  let newArr2 = "";
  for(let i = 0; i < arr1.length; i++){
    newArr1 += arr1[i];
  }
  console.log(newArr1);
  for(let j = 0; j < arr2.length; j++){
    newArr2 += arr2[j];
  }
  console.log(newArr2);
  return newArr1 === newArr2;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);