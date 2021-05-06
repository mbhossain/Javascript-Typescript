person = {
        fname: "Mohammad",
        lname: "Belal",
        age: 32,
        language: "Bangla",
        // fullName: function() {
        //     return this.fname + " " + this.lname
        // }
    }
    // console.log(person.fullName());

// var detail = "";

// for (x in person) { // for...in loop
//     detail += person[x] + " ";
// }
// console.log(detail);

// person.nationality = "Banglaseshi"; //Adding new properties

// delete person.age; //Deleting Properties

// var message = "Hello world!";
// var x = message.toUpperCase();  //Using Built-In Methods
// console.log(x);

// person.name = function() {          //Adding a Method to an Object
//     return this.fname + " " + this.lname;
// }
// console.log(person.name());

// var myArray = Object.values(person);  //JavaScript object can be converted to an array

// var myString = JSON.stringify(person); //converted to a string

// person2 = {
//     fname: "Mohammad",
//     lname: "Belal",
//     age: 32,
//     language: "Bangla",           //Getter
//     get useGetter() {
//             return this.language;
//         }
// }
// console.log(person.useGetter);

// person3 = {
//     fname: "Mohammad",
//     lname: "Belal",
//     age: 32,
//     language: "Bangla",
//     set useSetter(lang) {
//         this.language = lang;
//     }
// }
// person3.useSetter = "English";
// console.log(person3.language);

// object constructors

function person_constructors(fname, lname, age, nationality) {
    this.firstName = fname;
    this.lastName = lname;
    this.age = age;
    this.nationality = nationality;
    this.weight = "56 KG";
    this.fullName = function() {
        return this.firstName + " " + this.lastName
    };
    this.changeName = function(name) {
        this.lastName = name;
    };
}

var myFather = new person_constructors("Motaleb", "Mridha", 56, "Bangladeshi");
var myMother = new person_constructors("Khadeja", "Khatun", 51, "Bangladeshi");

console.log(myMother.weight);
console.log(myFather.weight);

myFather.height = "5 fit 6 inch"; //Adding a Property to an Object

// console.log("My father name is " + myFather.firstName + " " + myFather.lastName + "." +
//     " He is " + myFather.age + " years old " + myFather.nationality + " and There height is " + myFather.height);

// myFather.fullName = function() {                                  //Adding a Method to an Object rule_01
//     return myFather.firstName + " " + myFather.lastName;
// }

// myFather.fullName = function() { //Adding a Method to an Object rule_02
//     return this.firstName + " " + this.lastName;
// }

// console.log(myFather.fullName());
// console.log(myMother.fullName());

myMother.changeName("Poly");

console.log(myMother.lastName);

person_constructors.prototype.eyeColor = " Black"; //object prototype
console.log(myFather.eyeColor);

person_constructors.prototype.realName = function() {
    return this.firstName + " " + this.lastName;
};

console.log(myMother.realName());