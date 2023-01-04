let number = 5.3;

function myRound(num) {
  let num1 = num;
  if (num < 0) {
    num1 = -(num);
  }

  const num2 = parseInt(num1);
  const num3 = (num1 - num2);
  const num4 = num3 * 10;

  if (num4 > 5 && num < 0) {
    return -(num2 + 1);
  } else if (num4 > 5 && num > 0) {
    return num2 + 1;
  } else if (num4 < 5 && num < 0) {
    return -(num1 - num3);
  } else if (num4 < 5 && num > 0) {
    return num1 - num3;
  }

}

const roundVal = myRound(number);
console.log('roundVal:', roundVal);