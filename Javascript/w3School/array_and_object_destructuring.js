const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

//Array Destructuring

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

// function sumAndMultiply(a, b) {
//     return [a + b, a * b, a / b];
// }

// const array = sumAndMultiply(2, 3);
// console.log(array);
// const [sum, multiply, division = 'No Division'] = sumAndMultiply(2, 3);
// console.log(sum);
// console.log(multiply);
// console.log(division);

// Object Destructuring

const personOne = {
  name: "Mohammad Belal",
  age: 32,
  favoriteFood: "Benana",
  address: {
    thana: "Kumarkhaly",
    district: "Kushtia"
  }
}
const personTwo = {
  name: "Sadia",
  age: 26,
  fevoriteFood: "Watermelon",
  address: {
    thana: "Solokupa",
    district: "Jenaidah"
  }
}

// const { name: firstName = 'Tonny', age, fevoriteFood = 'Rice' } = personTwo;
// console.log(firstName);
// console.log(age);
// console.log(fevoriteFood);

// const { name, age, ...rest } = personTwo;
// console.log(age);
// console.log(rest);

// const { name, age, address: { thana } } = personTwo;
// console.log(thana);

const personThree = {
  name: "Sadia",
  age: 26,
  fevoriteFood: "Watermelon",
}

// const personFour = {...personOne, ...personThree }
// console.log(personFour);

function printUser({ name, age, favoriteFood = 'Orange' }) {
  // console.log(user);
  // console.log(`Name is: ${user.name} and Age is: ${user.age}`);
  console.log(`Name is: ${name}, Age is: ${age} and Favorite food is: ${favoriteFood}`);
}
printUser(personOne);