// (function() { //Self-Invoking Functions
//     console.log("Hi...I can invoke me!!");
// })();

function myFunction(arg1, arg2) { //myFunction is a function constructor
    this.firstName = arg1;
    this.lastName = arg2;
}

var x = new myFunction("John", "Doe")
console.log(x.firstName);