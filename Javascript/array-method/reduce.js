let arr = [45, 4, 9, 16, 25];

// arr.reduce((previousValue, currentValue, currentIndex, array) => {
//   console.log('previousValue:', previousValue);
//   console.log('currentValue:', currentValue);
//   console.log('currentIndex:', currentIndex);
//   console.log('array:', array);
// });

// let sum = arr.reduce((previousValue, currentValue) => { return previousValue + currentValue }, 100); // 100 initial value, optional parameter
// console.log('sum:', sum);

// let max = arr.reduce((prev, curr) => { return Math.max(prev, curr) });
// console.log('max:', max);

function myReduce(arr, callback, initializer) {

  for (let i = 0; i < arr.length; i++) {
    initializer = callback(initializer, arr[i]);
  }
  return initializer;

}

let minFromMyReduce = myReduce(arr, (previousValue, currentValue) => {
  return Math.min(previousValue, currentValue);
}, arr[0])
console.log('minFromMyReduce:', minFromMyReduce);

let maxFromMyReduce = myReduce(arr, (previousValue, currentValue) => {
  return Math.max(previousValue, currentValue);
}, arr[0])
console.log('maxFromMyReduce:', maxFromMyReduce);