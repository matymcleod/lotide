// ----- eqArrays -----
// this function compares two arrays and returns a Boolean value that indicates whether they are equal or not.
// ie: eqArrays([1], [1]) will return true
// ie: eqArrays([1], [2]) will return false -----
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

// ----- assertArraysEqual ----- 
// compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal. -----
const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}

// ----- Map function -----
// This is a Map function that  has been called by 'const results1' variable. 'const results1 is passing in the 'words' array and an arrow function. The arrow function is then is called within the for loop and passed (i) of the words array as its parameter. The arrow function returns (i)'s [0] index which in this case is the first letter of each string in the array.



// Is called by results1 and passed the 'words' array for the first parameter then, 'word => word[0]' for the callback parameter.
const map = function(array, callback) {
  const results = [];
  // Loops through the 'array === words array' and i is the iterator that stops at every element in the words array
  for(let i of array){ // for(let i = 0; i < words.length; i++)
    results.push(callback(i)) // (word => word) === (i => i) === (function(i){return i;}) 
  }
  return results;
}
//////////////////////////////////////////////////////////////
const words = ["ground", "control", "to", "major", "tom"];

// results1 CALLS the MAP funciton above and passes in (array === words, callback === (word => word[0]) 
const results1 = map(words, word => word[0]);
/////////////////////////////////////////////////////////////


// Test code:
assertArraysEqual(words, map(words, word => word));
assertArraysEqual(words, map(words, word => word[0]));
console.log(map(words, x => x));