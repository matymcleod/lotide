
//Use assertEqual to write test cases for various scenarios.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Create a function head which returns the first item in the array.
//The head function should not return the first element as an array. It should simply return the element itself.
const head = function(numbers){
  return numbers[0];
}

//The tests can be written below the definition of your function.
// TEST CODE
// Note below: 2 functions are being called
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);