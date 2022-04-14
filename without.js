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

const without = (array, itemsToRemove) => {
  let filteredArray = [];
  for (let num of array) {
    if (!itemsToRemove.includes(num)) {
        filteredArray.push(num);
      }
    }
  return filteredArray;
};



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);