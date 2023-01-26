let number = 5;

function facNum(num) {
    if (num >= 1) {
        return num * facNum(num - 1);
    } else {
        return 1;
    }


}

// let result = facNum(number);
// console.log('result:', result);

function fibNum(num) {
    if (num >= 3) {
        return fibNum(num - 1) + fibNum(num - 2);
    } else {
        return 1;
    }


}

// let result = fibNum(number);
// console.log('result:', result);

let trackingArr = [];
function hapNum(num) {
    // const initialValue = num;
    let sum = 0;
    let flag = false;
    if (num >= 1) {
        //Convert number into array
        let numArr = Array.from(String(num), n => Number(n));
        
        numArr.map(res => {
            sum += res * res;
        });

        trackingArr.push(sum);
        let length = trackingArr.length;

        if (sum == 1) {
            return number + ' is an Happy number';
        } else if (sum > 1) {
            if (length > 0) {
                
                trackingArr.map(element => {
                    if (element == sum) {
                        flag = false;
                        return number + ' is an Unhappy number';
                        
                    }

                })
                flag = true;
            }
            // if (sum == number) {
            //     return number + ' is an Unhappy number';
            // } else {
            //     return hapNum(sum);
            // }

        } else {
            return hapNum(sum);
        }
    } else {
        return 'Please input an number >= 1';
    }

    if (flag) {
        return hapNum(sum);
    }


}

let result = hapNum(number);
console.log('result:', result);


//Convert number into array
// Method:1
let myArr1 = Array.from(String(number), n => Number(n));
// console.log(myArr1);

// Method:2
let myArr2 = String(number).split("").map((num) => {
    return Number(num)
});
//   console.log(myArr2)

// Method:3
let myArr3 = [...String(number)].reduce((acc, n) => acc.concat(+n), []);
// console.log(myArr3)

