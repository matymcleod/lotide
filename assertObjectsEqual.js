const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if(object1Keys.length !== object2Keys.length){
    return false;
  }
  for(let key in object1) {
    if(object2.hasOwnProperty(key)) {
      if(object2[key] !== object1[key]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`Assertion passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`Assertion failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 2 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1', b: 3 });
assertObjectsEqual({ a: '1', b: 2 }, { a: '1'});