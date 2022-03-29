const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};

const countLetters = string => {
  const result = {}

  for(const item of string) {
    if (item !== " ")
    if (result[item]) {
      result[item] += 1
    } else {
      result[item] = 1
    } 
  }
  return result;
};

const result1 = countLetters("Lighthouse in the house")
console.log(result1)
// console.log(countLetters("Lighthouse in the house"))

assertEqual(result1["h"], 4)