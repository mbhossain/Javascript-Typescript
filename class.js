// class Car { //How to use a JavaScript Class.
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// myCar = new Car("Ford", 2014);
// console.log(myCar.name + " " + myCar.year);

class Car { //How to define and use a Class method.
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myCar = new Car("Ford", 2010);
console.log("My car is " + myCar.age() + " years old.");