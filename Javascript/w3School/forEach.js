const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

var number = [10, 20, 30, 40];
//general for loop
// for (x = 0; x < number.length; x++) {
//     console.log(number[x]);
// }

//forEach:01
// number.forEach(getNumber)

// function getNumber(x) {
//     console.log(x);
// }

//forEach:02
// number.forEach(function(x) {
//     console.log(x)
// })

//forEach:03
// var squareNumber = [];
// number.forEach(function(x) {
//     squareNumber.push(x * x);
// })
// console.log(squareNumber);

//forEach:04
// number.forEach(function(x, index, arr) {
//     arr[index] = x + 5;
// })
// console.log(number);

//forEach:05
// number.forEach(function(item, index) {
//     console.log('a[' + index + '] = ' + item);
// })

//forEach:06
// number.forEach(arr => {
//     console.log(arr);
// })

//forEach:07
// let sum = 0;
// number.forEach(item => {
//     sum += item;
// })
// console.log(sum);

//forEach:08
const letters = ['a', 'b', 'a', 'b', 'c', 'd', 'a', 'm', 'k', 'm'];
let count = {};
letters.forEach(item => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
})
console.log(count);