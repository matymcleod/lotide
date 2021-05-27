
const string = "hello world";

const countLetters = function(string) {
  const obj = {};

  for (let i = 0; i < string.length; i++) {
    const ch = string[i];
    if (!obj[ch]) {
      obj[ch] = 0;
    }
    obj[ch]++;
  }
  return obj;
};

console.log(countLetters(string));

