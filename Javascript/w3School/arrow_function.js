const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

students = [{
  id: 1,
  name: "Mohammad Belal",
  age: 32
}, {
  id: 2,
  name: "Sadia",
  age: 25
}, {
  id: 3,
  name: "Atri",
  age: 1
}, {
  id: 1,
  name: "Saif",
  age: 17
}];
const results = students.filter(r => r.age > 20).map(x => x.name);

console.log(results);