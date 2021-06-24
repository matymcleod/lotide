const assertEqual = require('./assertEqual');

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if(object1Keys.length !== object2Keys.length){
    return false;
  }
  for(let key in object1) {
    // method returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it).
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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); // => false
