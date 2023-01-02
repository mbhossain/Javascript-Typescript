let arr = [3, 5, 78, 23, 2, 9];

// function myMax(array) {
//   let maxValue = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxValue) {
//       maxValue = array[i];
//     }
//   }
//   return maxValue;
// }

// let max = myMax(arr);
// console.log('max:', max);

function mySecondMax(array) {
  let maxValue = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }
  let index = array.indexOf(maxValue);
  array.splice(index, 1);
  let newArr = array;

  let secondMaxValue = 0;
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] > secondMaxValue) {
      secondMaxValue = newArr[i];
    }
  }

  return secondMaxValue;
}


let secondMax = mySecondMax(arr);
console.log('secondMax:', secondMax);