const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

//001. Capitalize the first letter of a string
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
console.log(capitalize("hello, you are a cool person!"));
// Result: "Hello, you are a cool person!"

//002. Calculate the number of days between two dates
const diffDays = (date, otherDate) => Math.ceil(Math.abs(date - otherDate) / (1000 * 60 * 60 * 24));
console.log(diffDays(new Date('2014-12-19'), new Date('2020-01-01')));
// Result: 1839

//003. Convert a string to a number implicitly
toNumber = str => +str;
// Convert a string to a number explicitly
toNumber = str => Number(str);
console.log(toNumber("2"));
// Result: 2

//004. Check if an array contains any items
const isNotEmpty = arr => Array.isArray(arr) && arr.length > 0;
isNotEmpty([1, 2, 3]);
// Result: true
console.log(isNotEmpty([]));
// Result: false

//005. Different ways of merging multiple arrays
// Merge but don't remove the duplications
const a = [1, 2, 8];
const b = [5, 7];
const merge01 = (a, b) => a.concat(b);
// Or
const merge02 = (a, b) => [...a, ...b];
// Merge and remove the duplications
const merge03 = [...new Set(a.concat(b))];
// Or
const merge04 = [...new Set([...a, ...b])];

console.log(merge02(a, b));
console.log(merge03);

//006. Generate a random HEX color
const randomColor01 = () => `#${Math.random().toString(16).slice(2, 8).padStart(6, '0')}`;
// Or
const randomColor02 = () => `#${(~~(Math.random() * (1 << 24))).toString(16)}`;
console.log(randomColor02());

//007. Get the text that the user has selected
const getSelectedText = () => window.getSelection().toString();
console.log(getSelectedText());