let arr = [3, 5, 78, 23, 2, 9];

function myMax(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  return maxValue;
}

let max = myMax(arr);
console.log('max:', max);