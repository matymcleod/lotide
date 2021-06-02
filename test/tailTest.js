const assertEqual = require('../assertEqual');
const tail = require('../tail');

//The tests can be written below the definition of your function.
// TEST CODE
// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(tail(words), "Lighthouse,Labs"); // original array should still have 3 elements!