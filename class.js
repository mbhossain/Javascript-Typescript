class Car { //How to use a JavaScript Class.
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

myCar = new Car("Ford", 2014);
console.log(myCar.name + " " + myCar.year);