const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

//01 - Get a random boolean
const getRandomBoolean = () => Math.random() >= 0.5;
console.log(getRandomBoolean());
// a 50/50 chance of returning true or false

// 02 - Check if the date is Weekend
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
console.log(isWeekend(new Date(2021, 4, 14)));
// false (Friday)
console.log(isWeekend(new Date(2021, 4, 15)));
// true (Saturday)

// 03 - Check if a number is even or odd
const isEven = (num) => num % 2 === 0;
console.log(isEven(5));
// false
console.log(isEven(4));
// true

// 04 - Generate a random number between two numbers
const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
console.log(random(1, 50));
// could be anything from 1 - 50

//05 - Generate a random string (unique id?)
const randomString = () => Math.random().toString(36).slice(2);
console.log(randomString());
// could be anything!!!

// 06 - Toggle boolean
const toggleBool = () => (bool = !bool);

// 07 - Swapping Two Variables
var foo = 1;
var bar = 6;
[foo, bar] = [bar, foo];
console.log(foo, bar);

// 08 - Get the actual type of javascript primitives
const trueTypeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
};

console.log(trueTypeOf(''));
// string
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf());
// undefined
console.log(trueTypeOf(null));
// null
console.log(trueTypeOf({}));
// object
console.log(trueTypeOf([]));
// array
console.log(trueTypeOf(0));
// number
console.log(trueTypeOf(() => { }));
// function