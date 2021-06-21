const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion Passed: ${actual} IS EQUAL TO ${expected}`);
  } else if (actual !== expected) {
    console.log(`🛑🛑🛑  Assertion Failed: ${actual} IS NOT EQUAL TO ${expected}`);
  }
};

module.exports = assertEqual;