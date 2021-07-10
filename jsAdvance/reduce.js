var arr = [20, 1, 2, 45, 3, 4, 5]

var sum = arr.reduce(function myFunction(prev, curr) {
    return prev + curr
}, 100)
console.log(sum)

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
}, 100)
console.log(max)

var max = arr.reduce(function (prev, curr) {
    return Math.max(prev, curr)
})
console.log(max)

function myReduce(arr, cb, acc) {
    for (i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }
    return acc
}

var sum = myReduce(arr, function (prev, curr) {
    return prev + curr
}, 0)
console.log(sum)

console.log(myReduce(arr, function (prev, curr) {
    return Math.max(prev, curr)
}, 0))

console.log(myReduce(arr, function (prev, curr) {
    return Math.min(prev, curr)
}, arr[0]))