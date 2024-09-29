const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array:" + fruits);

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");
  console.log("New Array:" + fruits);
}

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);

function myFunction() {
  fruits.splice(0, 1);
  console.log(fruits);
}