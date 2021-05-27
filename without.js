// assertArraysEqual compares two arrays and prints a Boolean value to the console indicating whether the two arrays are equal.
const assertArraysEqual = function(arr1, arr2){
  console.log(eqArrays(arr1, arr2));
}
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
// without takes an array returns an array excluding any number of given values
const without = function (source, itemsToRemove){
  let wantedItems = [];
  for(let i = 0; i < source.length; i++){
    // i need to be able to keep track of whether ANY of
    // the itemsToRemove are equal to THIS iteration of source.
    // if an y of the itemsToRemove match this source[i], i need
    // to NOT include them in wantedItems.
    // if there is NO match for source[i] by the END of]
    // the second loop (itemsToRemove loop, with j), then i need to
    // include it in the wantedItems.
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

  // now I have just an array of items that i want. i can return them.
  return wantedItems;
};

const sourceArray = [1,2,3,4];
const itemsToRemoveArray = [2, 1, 0, 5, 7];

console.log(without(sourceArray, itemsToRemoveArray));


const words = ["hi", "how", "are", "you"];
assertArraysEqual(without(words, ["are"]), ["hi", "how", "you"]);

const numbers = [1, 2, 3, 4];
const got = without(numbers, 1);
const want = [2,3,4];
assertArraysEqual(got, want);

