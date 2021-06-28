// Returns all elements of an array except for the first element at index 0.

const tail = function(array) {
  let end = array.slice(-1, array.length);
  return end;
};

module.exports = tail;
