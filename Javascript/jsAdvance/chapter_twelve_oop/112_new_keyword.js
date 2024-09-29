const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a Rectangle')
        this.printProperties()
        console.log(this)
    }

    this.printProperties = function () {
        console.log('My width is: ' + this.width)
        console.log('My height is: ' + this.height)
    }
}

// var rect = new Rectangle(10, 20)
// rect.draw()

function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))
    return obj
}

var rect = myNew(Rectangle, 10, 15)
rect.draw()