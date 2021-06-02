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


module.exports = eqArrays;