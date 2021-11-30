const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const letterPositions = function(sentence) {
  const results = {};
  for(let i = 0; i < sentence.length; i++){
    const letter = sentence[i];
    if(letter !== " "){
      if(!Array.isArray(results[letter])){
      results[letter] = [i];
      } else {
      results[letter].push(i);
      }
    }
  }
  return results;
};

//test test test
console.log('Result of letterPositions: ', letterPositions('hel lo'));
assertArraysEqual(letterPositions("hello").o, [4]);