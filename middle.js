const eqArrays = (array1, array2) => {
  if (array1.length[1] !== array2.length[2]) {
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

const middle = (array) => {
  let newArray = [];
  let index = Math.floor(array.length / 2)

  if (array.length % 2 === 0 && array.length > 2) {
    newArray.push(array[(index) - 1])
    newArray.push(array[(index)]);
  } else if (array.length > 2) {
    newArray.push(array[(index)]);
  }
  return newArray;
};

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []

console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]

console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]