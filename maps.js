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

const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(function(word){
//   return word[0];
// });
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);
console.log(eqArrays((results1),["g", "c", "t", "m", "t"]));
assertArraysEqual(results1,["g", "c", "t", "m", "t"]);
