const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

// Array.prototype.sort()
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
// console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array1 = [1, 30, 4, 21, 100000];
array1.sort();
// console.log(array1);
// Expected output: Array [1, 100000, 21, 30, 4]

const stringArray = ["Blue", "Humpback", "Beluga"];
const numberArray = [40, 1, 5, 200];
const numericStringArray = ["80", "9", "700"];
const mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b) {
  return a - b;
}

stringArray.join(); // 'Blue,Humpback,Beluga'
stringArray.sort(); // ['Beluga', 'Blue', 'Humpback']
// console.log(stringArray.sort());

numberArray.join(); // '40,1,5,200'
numberArray.sort(); // [1, 200, 40, 5]
numberArray.sort(compareNumbers); // [1, 5, 40, 200]
// console.log(numberArray.sort(compareNumbers));

numericStringArray.join(); // '80,9,700'
numericStringArray.sort(); // ['700', '80', '9']
numericStringArray.sort(compareNumbers); // ['9', '80', '700']
// console.log(numericStringArray.sort(compareNumbers));

mixedNumericArray.join(); // '80,9,700,40,1,5,200'
mixedNumericArray.sort(); // [1, 200, 40, 5, '700', '80', '9']
mixedNumericArray.sort(compareNumbers); // [1, 5, '9', 40, '80', 200, '700']
// console.log(mixedNumericArray.sort(compareNumbers));

const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
//   console.log(items);  
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });
// console.log(items);  

// Sorting non-ASCII characters
const itemsNon_ASCII = ["réservé", "premier", "communiqué", "café", "adieu", "éclair"];
itemsNon_ASCII.sort((a, b) => a.localeCompare(b)); // items is ['adieu', 'café', 'communiqué', 'éclair', 'premier', 'réservé']
// console.log(itemsNon_ASCII);