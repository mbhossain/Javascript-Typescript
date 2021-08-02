function test() {
    console.log('something')
}

// We can also give console command
console.log(test)
console.log(typeof test)
console.log(test.constructor)

var Rect = new Function('width', 'height', `this.width = width
this.height = height

this.draw = function() {
    console.log('I am a Rectangle')
    this.printProperties()
    console.log(this)
}

this.printProperties = function() {
    console.log('My width is: ' + this.width)
    console.log('My height is: ' + this.height)
}`)

var rect = new Rect(4, 5)
console.log(rect)
rect.draw()

console.log(test.name, test.length)