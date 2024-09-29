const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

var createRect = function (width, height) {
    return {
        width: width,
        height: height,

        draw: function () {
            console.log('I am a Rectangle')
            this.printProperties()
            console.log(this)
        },
        printProperties: function () {
            console.log('My width is: ' + this.width)
            console.log('My height is: ' + this.height)
        }
    }
}

var rect1 = createRect(10, 20)
rect1.draw()

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

var rect2 = new Rectangle(10, 20)
rect2.draw()

// console command
console.log(rect1.constructor)
console.log(rect2.constructor)

var obj = new Object()
console.log(obj.constructor)

var str = new String('str')
console.log(str.constructor)
console.log(str)
console.log('My String is ' + str)