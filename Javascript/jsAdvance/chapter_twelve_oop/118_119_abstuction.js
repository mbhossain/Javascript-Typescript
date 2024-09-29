const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

var Rectangle = function (width, height) {

    var position = {
        x: 50,
        y: -100
    }
    this.width = width
    this.height = height

    var printproperties = function () {
        console.log('My Width is ' + this.width)
        console.log('My Height is ' + this.height)
    }.bind(this)

    this.draw = function () {
        console.log('I am a Rectangle')
        printproperties()
        console.log('Position: X = ' + position.x + ' Y = ' + position.y)
    }

}

var rec = new Rectangle(10, 20)
rec.draw()