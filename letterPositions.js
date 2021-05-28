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

const assertArraysEqual = function(actual, expected){
  if(eqArrays(actual, expected)){
    console.log(`Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`Assertion failed: ${actual} !== ${expected}`);
  }
}

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    console.log(sentence[i]);
    if(letter !== " "){
      if(!Array.isArray(results[letter])){
      results[letter] = [i];
    } else {
      results[letter].push(i);
    }
    //results[letter].push(i);
    console.log(i);
  }
}
  console.log(results);
  return results;
};
letterPositions('hel lo');
assertArraysEqual(letterPositions("hello").o, [4]);