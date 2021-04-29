// const alphabet = ['A', 'B', 'C', 'D', 'E', 'F'];
// const number = ['1', '2', '3', '4', '5', '6'];

// const a = alphabet[0];
// const b = alphabet[1];

// const [a, , c] = alphabet; // console.log(a); //console.log(c);
// const [a, , c, ...rest] = alphabet;

// console.log(a);
// console.log(c);
// console.log(rest);

// const newArray = [...alphabet, ...number];
// const newArray = alphabet.concat(number);

// console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b, a / b];
}

// const array = sumAndMultiply(2, 3);
// console.log(array);
const [sum, multiply, division = 'No Division'] = sumAndMultiply(2, 3);
console.log(sum);
console.log(multiply);
console.log(division);