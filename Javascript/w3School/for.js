const outputElement = document.getElementById('output');
console.log = function (message) {
  if (typeof message === 'object') {
    outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
  } else {
    outputElement.innerHTML += message + '\n';
  }
};

sum = 0;
for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log('sum ' + '+' + i + '=' + (sum + i))
    sum += i

  }
}