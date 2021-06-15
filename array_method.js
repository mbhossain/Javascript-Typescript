const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Original Array:" + fruits);

function myFunction() {
    fruits.splice(2, 0, "Lemon", "Kiwi");
    console.log("New Array:" + fruits);
}