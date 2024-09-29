var x = 10

function test() {
    var x = 20
    // console.log(x)
    function nested() {
        var y = 30
        console.log(x)
    }
    // console.log(y)  //This will happen on the line ReferenceError: y is not defined
    nested()
}

test()