function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 2;

    // some code (try to change x to 5)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function(value) { myDisplayer(value); },
    function(error) { myDisplayer(error); }
);

//Wait 3 seconds (3000 milliseconds) for this page to change.
setTimeout(function() { myFunction("I love You !!!"); }, 3000);

function myFunction(value) {
    console.log(value);
}