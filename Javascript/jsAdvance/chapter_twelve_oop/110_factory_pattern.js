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

var rect2 = createRect(115, 205)
rect2.draw()