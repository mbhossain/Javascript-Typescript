var rect = {
    width: 20,
    height: 35,

    draw: function() {
        console.log('I am a Rectangle')
        console.log('My width is: ' + this.width)
        console.log('My height is: ' + this.height)
    }
}

rect.draw()

rect.height = 100
rect.draw()