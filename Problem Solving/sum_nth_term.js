let num = 3888311265122983;

function summingSeries(n) {
  // Write your code here
  return (BigInt(n) * BigInt(n)) % BigInt(1000000007);

}

let res = summingSeries(num);
console.log('res', res);