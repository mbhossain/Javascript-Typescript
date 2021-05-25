async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
        myResolve("I love You !!");
    });
    console.log(await myPromise);
}

myDisplay();