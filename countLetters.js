const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// Still need to remove spaces!
const string = "hello";

const countLetters = function(string) {
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    // Not 100% sure how this if statement works
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
  }
  return obj;
};

console.log(countLetters(string));

// Need to learn how to properly run this test! 
// keep getting: Assertion Failed: [object Object] !=== undefined
assertEqual(countLetters(string), ({ h: 1, e: 1, l: 2, o: 1 }))

