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

const flatten = (inputs) => {
  let flattenArray = [];
  for (let input of inputs) {
    if (Array.isArray(input)) {
      for (let nested of input) {
        flattenArray.push(nested);
      }
    } else {
      flattenArray.push(input);
    }
  } return flattenArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]