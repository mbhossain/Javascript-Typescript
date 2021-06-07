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
number.forEach(function(x, index, arr) {
    arr[index] = x + 5;
})
console.log(number);