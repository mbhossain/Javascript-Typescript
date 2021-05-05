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

person3 = {
    fname: "Mohammad",
    lname: "Belal",
    age: 32,
    language: "Bangla",
    set useSetter(lang) {
        this.language = lang;
    }
}
person3.useSetter = "English";
console.log(person3.language);