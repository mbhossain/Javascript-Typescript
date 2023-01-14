//https://www.hackerrank.com/challenges/game-with-cells/problem?isFullScreen=true&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

function gameWithCells(n, m) {
  const countPackageLineRow = Math.ceil(n / 2);
  const countPackageLineColumn = Math.ceil(m / 2);

  return countPackageLineRow * countPackageLineColumn;
}

let result = gameWithCells(1, 3);
console.log('result:', result);