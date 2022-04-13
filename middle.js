const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const middle = (array) => {
  let newArray = [];
  let index = Math.floor(array.length / 2);

  if (array.length % 2 === 0 && array.length > 2) {
    newArray.push(array[(index) - 1]);
    newArray.push(array[(index)]);
  } else if (array.length > 2) {
    newArray.push(array[(index)]);
  }
  return newArray;
};

// const middleCustom = (arr) => {
//   if (arr.length <= 2) return [];
//   const output = [arr[Math.floor(arr.length / 2)]];
//   if (arr.length % 2 === 0) output.unshift(arr[arr.length / 2 - 1]);
//   return output;
// };

module.exports = middle





