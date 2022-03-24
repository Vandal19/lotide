const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed: ${actual} === ${expected} ✅✅✅`);
  } else {
    console.log(`ssertion Failed: ${actual} !== ${expected} 🛑🛑🛑`);
  }
};
const head = (array) => {
  return array[0];
}



assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello")

