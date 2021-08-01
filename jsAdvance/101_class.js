class Rect {
    constructor(width, height) {
        this.width = width
        this.height = height
    }


    calculateArea() {
        return this.width * this.height
    }

    calculateRange() {
        return 2 * (this.width + this.height)
    }
}

var rect1 = new Rect(10, 20)
var rect2 = new Rect(50, 60)
var rect3 = new Rect(6, 9)