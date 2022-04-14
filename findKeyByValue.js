const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`ssertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

const findKeyByValue = (object, value) => {
  let result = Object.keys(object);
  for(let key of result) {
    if (object[key] === value) {
      return key;
    }   
  }
  return undefined;
}


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);