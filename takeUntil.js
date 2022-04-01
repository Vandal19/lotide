// Implement a function that takes return a slice of the array with elements taken from the beginning
const takeUntil = (array, callback) => {
  const results = [];
  for (let item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      break;
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1); // Expected output: [ 1, 2, 5, 7, 2 ]

console.log('---'); // Expected output: --

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2); // Expected output: [ 'I\'ve', 'been', 'to', 'Hollywood' ]

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }
  
  for (let num of array1) {
    if (array1[num] !== array2[num])
      return false;
  }
  return true;
};

const assertArraysEqual = (array1st, array2nd) => {
  if ((eqArrays(array1st, array2nd)) === true) {
    console.log(`Assertion Passed: ${array1st} === ${array2nd} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${array1st} !== ${array2nd} 🛑🛑🛑`);
  }
};
console.log(eqArrays((results1),[ 1, 2, 5, 7, 2 ]));
assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]);

console.log(eqArrays((results2),[ 'I\'ve', 'been', 'to', 'Hollywood' ]));
assertArraysEqual(results2,[ 'I\'ve', 'been', 'to', 'Hollywood' ]);
