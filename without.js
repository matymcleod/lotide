// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = require('./assertArraysEqual');
const eqArrays = require('./eqArrays');

// without takes in 2 arrays returns an array excluding any number of given values in 'itemsToRemove' array
const without = function (source, itemsToRemove){
  let wantedItems = [];
  for(let i = 0; i < source.length; i++){
    let matchedItems = false;
    for(let j = 0; j < itemsToRemove.length; j++){
      if(source[i] === itemsToRemove[j]){
        matchedItems = true;
        break;
      }
    }
    if(matchedItems === false){
      wantedItems.push(source[i]);
    }
  }
  return wantedItems;
};

const sourceArray = [1, 2, 3, 4];
const itemsToRemoveArray = [2, 1, 0, 5, 7];
console.log(without(sourceArray, itemsToRemoveArray));


const words = ["hi", "how", "are", "you"];
assertArraysEqual(without(words, ["are"]), ["hi", "how", "you"]);

const numbers = [1, 2, 3, 4];
const got = without(numbers, 1);
const want = [2,3,4];
assertArraysEqual(got, want);

