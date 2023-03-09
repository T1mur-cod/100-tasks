function tractorDrive(arr, targetValue) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === targetValue) {
      sum += arr[i];
      count++;

      if (count === 2) {
        return sum;
      }
    }
  }

  return 0;
}

console.log(tractorDrive([150, 111, 151, 112, 133, 150, 123], 150))
