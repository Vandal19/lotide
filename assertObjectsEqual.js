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

const assertObjectsEqual = (actual, expected) => {
  const inspect = require('util').inspect;
if(eqObjects(actual,expected)) {
  console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${inspect(actual)} === ${inspect(expected)} 🛑🛑🛑`);
}
};



const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); 

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); 