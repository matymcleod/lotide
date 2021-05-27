const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed: ${actual} !=== ${expected}`);
  }
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function (allItems, itemsToCount) {
  const results = {};
  console.log("This gets passed in as allItems " + allItems);
  console.log("This gets passed in as itemsToCount " + itemsToCount);
  for (const item of allItems) {
    console.log("This is the first for of loop " + item);
    if (itemsToCount[item]) {
      if (results[item]) {
        console.log([item]);
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
}

// this is passed into countOnly as allItems
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// This is passed into countOnly as itemsToCount
const result1 = countOnly(firstNames, { 
  "Jason": true, 
  "Karima": true, 
  "Fang": true, 
  "Agouhanna": false 
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);