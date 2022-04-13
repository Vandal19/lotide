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

module.exports = eqArrays
