//Create a function tail which returns the "tail" of an array: everything except for the first item (head) of the provided array.
//Your function should not modify the array that is passed in. It should return a new array.
// const tail = function(words){
//   let newArr = [];
//   newArr += words.slice(1);
//   return newArr;
// }
const tail = function(array) {
  let answer = array.slice(array.length-1);
  return answer;
};

module.exports = tail;
