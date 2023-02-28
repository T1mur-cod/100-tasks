// 1 solution
function arr(arr1, arr2) {
  let array = [];

  for (let i = 0; i < arr1.length; i++) {
    for(let j = 0; j < arr2.length; j++) { 
      if (arr1[i] === arr2[j]) {
        array.push(arr1[i]); // push the matched value, not the entire arr1
      }
    }
  }
  
  return array;
}

// 2 solution
const arr = (arr1, arr2) => arr1.filter(i => arr2.includes(i))

// 3 solution
function arr(arr1, arr2) {
  return Array.from(new Set(arr1.filter(x => arr2.includes(x))));
}
