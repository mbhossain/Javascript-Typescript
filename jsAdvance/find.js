var arr = [1, 3, 4, 5, 7, 12, 17, 18, 30, 65]

// var result = arr.find(function(val) {
//     return val == 18
// })
// console.log(result)

// var result = arr.findIndex(function(val) {
//     return val == 18
// })
// console.log(result)

function myFind(arr, cb) {
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // return arr[i]
            return i
        }
    }
}
var result = myFind(arr, function(val) {
    return val == 12
})
console.log(result)