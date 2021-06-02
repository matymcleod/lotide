const assertEqual = require('./assertEqual');

const head = function(numbers){
  return numbers[0];
}


module.exports = head;

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);