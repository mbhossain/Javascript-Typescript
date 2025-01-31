const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

// console.log(Array.from('foo'));
// console.log(Array.from([1, 2, 3], (x) => x + x));

// Array.from(arrayLike)
// Array.from(arrayLike, mapFn)
// Array.from(arrayLike, mapFn, thisArg)

const letters = {
  length: 4,
  0: 'a',
  1: 'b',
  2: 'c',
  3: 'd'
};

const formatter = {
  prefix: 'Letter: '
};

const result = Array.from(letters, function(letter) {
  return this.prefix + letter.toUpperCase();
}, formatter);

console.log(result);
// Output: ['Letter: A', 'Letter: B', 'Letter: C', 'Letter: D']

const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set); // ['foo', 'bar', 'baz']

const map = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
]);
Array.from(map);
// [[1, 2], [2, 4], [4, 8]]

const mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);
Array.from(mapper.values());
// ['a', 'b'];

Array.from(mapper.keys());
// ['1', '2'];

// Create an array based on a property of DOM Elements
const images = document.querySelectorAll("img");
const sources = Array.from(images, (image) => image.src);
const insecureSources = sources.filter((link) => link.startsWith("http://"));
