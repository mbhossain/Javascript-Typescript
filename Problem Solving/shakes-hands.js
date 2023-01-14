let number = 4;

function handshake(n) {
  let totalShaksHands = 0;

  // while (n > 0) {
  //   totalShaksHands += (n - 1);
  //   --n;
  // }

  for (let i = 1; i < n; i++) {
    totalShaksHands += i;
  }

  return totalShaksHands;
}

let result = handshake(number);
console.log('result:', result);