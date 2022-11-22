// async function myDisplay() {
//     let myPromise = new Promise(function(myResolve, myReject) {
//         myResolve("I love You !!");
//     });
//     console.log(await myPromise);
// }

// myDisplay();


//Waiting for a Timeout
async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        setTimeout(function() { myResolve("I hate You !!"); }, 3000);
    });
    console.log(await myPromise);
}

myDisplay();