const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

// 001. Shuffle Array
const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

// Testing
const arr001 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shuffleArray(arr001));

// 002. Copy to Clipboard
// const copyToClipboard = (text) => navigator.clipboard?.writeText && navigator.clipboard.writeText(text);

// Testing
// copyToClipboard("Text value");

// 003. Unique Elements
const getUnique = (arr) => [...new Set(arr)];

// Testing
const arr002 = [1, 1, 2, 3, 3, 4, 4, 4, 5, 5];
console.log(getUnique(arr002));

//004. Detect Dark Mode
const isDarkMode = () =>
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

// Testing
console.log(isDarkMode());

//005. Scroll To Top
const scrollToTop = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "start" });

//006. Scroll To Bottom
const scrollToBottom = (element) =>
  element.scrollIntoView({ behavior: "smooth", block: "end" });

//007. Generate Random Color
const generateRandomHexColor = () =>
  `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;

document.querySelector("h3").style.color = generateRandomHexColor();