// let arr = [3, 5, 78, 23, 2, 9];

// max() implementation


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

//Second max implementation Case: 01


// function mySecondMax(array) {
//   let maxValue = 0;
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > maxValue) {
//       maxValue = array[i];
//     }
//   }
//   let index = array.indexOf(maxValue);
//   array.splice(index, 1);
//   let newArr = array;

//   let secondMaxValue = 0;
//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > secondMaxValue) {
//       secondMaxValue = newArr[i];
//     }
//   }

//   return secondMaxValue;
// }


// let secondMax = mySecondMax(arr);
// console.log('secondMax:', secondMax);


//Second max implementation Case: 02

let number = [2, 45, 67, 12, 100, 6, 4];

// function secondMaxCase02(arr) {
//   let maxNumner = 0;
//   let secondMaxNumber = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > maxNumner) {
//       maxNumner = arr[i];
//     }
//   }

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > secondMaxNumber && arr[i] < maxNumner) {
//       secondMaxNumber = arr[i];
//     }
//   }
//   console.log('maxNumner:', maxNumner);
//   console.log('secondMaxNumber:', secondMaxNumber);
// }

// secondMaxCase02(number);

function arrayDestucturing(arr) {
  let newArr = [];
  const length = arr.length;
  const traversNo = Math.ceil(length / 3);
 
  // for (let j = 1; j = traversNo; j++) {
    let sum = 0;
    for (let i = 0; i < length; i++) {
      if (i == 3) {
        break
      } else {
        sum += arr[i];
      }
    }
    debugger
    let value= newArr.push(sum);
    return value;
  // }
}

let newArr = arrayDestucturing(number);
console.log('newArr:', newArr);
