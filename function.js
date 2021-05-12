// (function() { //Self-Invoking Functions
//     console.log("Hi...I can invoke me!!");
// })();

// function myFunction(arg1, arg2) { //myFunction is a function constructor
//     this.firstName = arg1;
//     this.lastName = arg2;
// }

// var x = new myFunction("John", "Doe")
// console.log(x.firstName);

var add = (function() { //JavaScript Closures, Counting with a local variable.
    var counter = 0;
    return function() { counter += 1; return counter; }
})();

function myFunction() {
    console.log(add());
}