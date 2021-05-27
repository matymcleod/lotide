//Use assertEqual to write test cases for various scenarios.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
//Your function should not modify the array that is passed in. It should return a new array.
const tail = function(words){
  let newArr = [];
  newArr += words.slice(1);
  return newArr;
}

//The tests can be written below the definition of your function.
// TEST CODE
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!