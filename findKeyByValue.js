const assertEqual = require('./assertEqual')

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = function (object, value){
  for(let key of Object.keys(object)){
    if(object[key] === value){
      return key;
    }
  }
};


assertEqual(findKeyByValue(bestTVShowsByGenre,"The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);