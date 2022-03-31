const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

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

const eqObjects = (object1, object2) => {
  let obj1keys = Object.keys(object1);
  let obj2keys = Object.keys(object2);
  if (obj1keys.length !== obj2keys.length) {
    return false;
  }

  for (let key of obj1keys) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if (object1[key] !== object2[key]) {
      return false;
    } else {
      return true;
    }
  }
};




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2)); // => false