var arr = [2, 5, 7, 10, 11, 15, 18, 28, 31]

// step_01
// var newArr = arr.filter(function myFunction(val) {
//     // return val % 2 === 0
//     return val % 2 === 1
// })
// console.log(newArr)

// step_02
// function myFilter(arr) {
//     var newArr = []
//     for (i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(myFilter(arr))

// step_03
function myFilter(arr, cb) {
    var newArr = []
    for (i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(myFilter(arr, function (val) {
    return val % 2 === 0
}))

console.log(myFilter(arr, x => x % 2 === 1))

console.log(myFilter(arr, x => x > 10))

