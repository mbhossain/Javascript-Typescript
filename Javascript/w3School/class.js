// class Car { //How to use a JavaScript Class.
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }
// }

// myCar = new Car("Ford", 2014);
// console.log(myCar.name + " " + myCar.year);

// class Car { //How to define and use a Class method.
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;

//     }
//     age() {
//         let date = new Date();
//         return date.getFullYear() - this.year;
//     }
// }

// let myCar = new Car("Ford", 2010);
// console.log("My car is " + myCar.age() + " years old.");


//class inheritance

// class Car {
//     constructor(brand) {
//         this.carname = brand;
//     }
//     present() {
//         return 'I have a ' + this.carname;
//     }
// }

// class Model extends Car { //Use the "extends" keyword to inherit all methods from another class.
//     constructor(brand, mod) {
//         super(brand); //Use the "super" method to call the parent's constructor function.
//         this.model = mod;
//     }
//     show() {
//         return this.present() + ', it is a ' + this.model;
//     }
// }

// let myCar = new Model("Ford", "Mustang");
// console.log(myCar.show());

//class static

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello() {
//         return "Hello!!";
//     }
// }

// let myCar = new Car("Ford");

// // You can calll 'hello()' on the Car Class:
// console.log(Car.hello());

// // But NOT on a Car Object:
// // document.getElementById("demo").innerHTML = myCar.hello();
// // this will raise an error.

// class Car {
//     constructor(name) {
//         this.name = name;
//     }
//     static hello(x) {
//         return "Hello " + x.name;
//     }
// }

// let myCar = new Car("Ford");
// console.log(Car.hello(myCar));