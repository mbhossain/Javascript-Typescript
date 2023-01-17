// https://codeforces.com/problemset/problem/1783/C

const oponent = 6;
const time = 7;
const timeArr = [1, 3, 2];

function findPosition(o, t, arr) {
  let totalwin = 0;
  let winPossible = 0;
  for (let i = 1; i < o; i++) {
    totalwin += i;
  }

  let sortArr = arr.sort(function (a, b) {
    return a - b;
  });

  let length = sortArr.length;
  let index = 0;
  for (let j = index; j < length; j++) {
    index = j;
    winPossible += sortArr[j];
    if (winPossible > t) {
      break
    }
  }
  winPossible = winPossible - sortArr[index];
  return winPossible;
}

let result = findPosition(oponent, time, timeArr);
console.log('result:', result);