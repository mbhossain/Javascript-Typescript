// var x = 10

function a() {
    // console.log(x)
    var y = 5
    return function() {
        console.log(y)
    }
}

var z = a()
console.dir(z)