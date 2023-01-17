// https://codeforces.com/problemset/problem/1783/C

const oponent = 6;
const time = 2;
const timeArr = [1, 3, 2];

function findPosition(o, t, arr) {
  let totalwin = 0;
  let winPossible = 0;
  let index = 0; 
  
  for (let i = 1; i < o; i++) {
    totalwin += i;
  }

  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  let length = sortArr.length;
  
  for (let j = index; j < length; j++) {
    index = j;
    winPossible += sortArr[j];
    debugger
    if (winPossible >= t)
      break


  }

  if (!(index = (length - 1))) {
    winPossible = winPossible - sortArr[index];
  }
  return winPossible;
}

let result = findPosition(oponent, time, timeArr);
console.log('result:', result);