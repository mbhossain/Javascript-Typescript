const number = 704;

function findExcelIndex(n) {
  const arr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let index = '';

  if (n > 26) {
    let newArr = [];

    while (n > 26) {
      let childN = Math.trunc(n / 26);
      let nextN = n % 26;

      if (nextN == 0) {
        childN = childN - 1;
        nextN = 26
      }

      // debugger
      if (childN < 27) {
        newArr.push(childN);
      }

      newArr.push(nextN);
      // newArr.reverse();
      n = childN;

    }

    const length = newArr.length;
    for (let i = 0; i < length; i++) {
      index += arr[newArr[i] - 1];
    }

    return index;

  } else {
    return arr[n - 1];
  }

}

let result = findExcelIndex(number);
console.log('result:', result);