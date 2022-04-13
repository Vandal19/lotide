const eqArrays = require('./eqArrays')

const assertArraysEqual = (array1st, array2nd) => {
  if((eqArrays(array1st, array2nd)) === true) {
    console.log(`Assertion Passed: ${array1st} === ${array2nd} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${array1st} !== ${array2nd} 🛑🛑🛑`);
  }
};

module.exports = assertArraysEqual
