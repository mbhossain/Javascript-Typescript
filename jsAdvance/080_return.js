function greet(mgs) {
    function greeting(name) {
        return mgs + ', ' + name + '!'
    }
    return greeting
}
var gm = greet('Good morning')
var gn = greet('Good night')
var msg = gm('Mohammad Belal')
console.log(msg)
console.log(gn('Atri'))

function power(b) {
    return function(n) {
        var result = 1
        for (var i = 1; i <= b; i++) {
            result *= n
        }
        return result
    }
}
var base10 = power(5)
var prwer2 = base10(2)
console.log(prwer2)