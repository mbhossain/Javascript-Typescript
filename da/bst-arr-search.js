let value = [];
for (let i = 1; i <= 100000000; i++) { value.push(i) }

const bstStart = performance.now();

let recursiveFunction = function (arr, x, start, end) {

    // Base Condition
    if (start > end) return false;

    // Find the middle index
    let mid = Math.floor((start + end) / 2);

    // Compare mid with given key x
    if (arr[mid] === x) return true;

    // If element at mid is greater than x,
    // search in the left half of mid
    if (arr[mid] > x)
        return recursiveFunction(arr, x, start, mid - 1);
    else

        // If element at mid is smaller than x,
        // search in the right half of mid
        return recursiveFunction(arr, x, mid + 1, end);
}


// Array sort
let arr = [4, 32, 2, 5, 8, 10];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
} 

// Driver code
let x = 23456;
if (recursiveFunction(value, x, 0, value.length - 1))
    document.write("Element found!<br>");
else document.write("Element not found!<br>");

const bstEnd = performance.now();
console.log(`Execution Time: ${bstEnd - bstStart} ms`);

// General Search
const start = performance.now();
let y = 23456;
function findElement() {
    for (let i = 0; i < value.length; i++) {

        if (value[i] === y) {
            document.write("Element found!<br>");
        }
    }
}

findElement();
const end = performance.now();

console.log(`Execution Time direct: ${end - start} ms`);

