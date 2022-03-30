
const letterPositions = sentence => {
  const results = {};

  for(let x = 0; x < sentence.length; x++) {
    if(sentence[x] !== " ") {
    if(results[sentence[x]]) {
    results[sentence[x]].push(x)
  } else {
    results[sentence[x]] = [x] 
   }
  // console.log(x);
  // console.log(sentence[x])
  }
}
return results;
}
const results1 = letterPositions("Lighthouse in the house")
console.log(results1)

const eqArrays = (array1, array2) => {
  if (array1.length[1] !== array2.length[2]){
    return false;
  }
  
  for (let num of array1) {
    if (array1[num] !== array2[num])
    return false; 
  }
return true;
};


const assertArraysEqual = (array1st, array2nd) => {
  if((eqArrays(array1st, array2nd)) === true) {
    console.log(`Assertion Passed: ${array1st} === ${array2nd} ✅✅✅`);
  } else {
    console.log(`Assertion Failed: ${array1st} !== ${array2nd} 🛑🛑🛑`);
  }
};

assertArraysEqual(letterPositions("hello").e,[1])
console.log(letterPositions("hello"))
