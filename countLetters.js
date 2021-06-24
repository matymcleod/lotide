const assertEqual = require('./assertEqual');

const string = "hel lo";
const countLetters = function(string) {
  const obj = {};
  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    if (ch !== ' ') {
      if (!obj[ch]) {
        obj[ch] = 0;
      }
      obj[ch]++;
    }
  }
  console.log('function call of obj: ', obj);
  return obj;
};

const var1 = countLetters(string);
assertEqual(var1["h"],1);
assertEqual(var1["e"],1);
assertEqual(var1["l"],2);
assertEqual(var1["o"],1);


