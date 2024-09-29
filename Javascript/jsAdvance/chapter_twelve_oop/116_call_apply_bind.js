const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

function myFunc() {
    console.log(this)
    console.log(this.a + this.b)
}

myFunc.call({ a: 10, b: 20 })
myFunc.call({ a: 100, b: 201 })

function myFunc2(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc2.call({ a: 10, b: 20 }, 30, 40)
myFunc2.apply({ a: 100, b: 201 }, [99, 50])

function myFunc3(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

// var testBind = myFunc3.bind({ a: 11, b: 14 }, 30, 40)
// testBind()

var testBind = myFunc3.bind({ a: 11, b: 14 })
testBind(5, 10)