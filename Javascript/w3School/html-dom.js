const outputElement = document.getElementById('output');
console.log = function (message) {
    if (typeof message === 'object') {
        outputElement.innerHTML += JSON.stringify(message, null, 2) + '\n';
    } else {
        outputElement.innerHTML += message + '\n';
    }
};

//w3school link:    https://www.w3schools.com/js/tryit.asp?filename=tryjs_dom_form_elements
function myFunction() {
    var x = document.forms["frm1"];
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    console.log(text);
}

function mOver(obj) {
    obj.innerHTML = "Thank You"
}

function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
}


//https://www.w3schools.com/js/tryit.asp?filename=tryjs_addeventlistener_usecapture
alert(("myP1").addEventListener("click", function () {
    alert("You clicked the white element!");
}, false));

alert(("myDiv1").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, false));

alert(("myP2").addEventListener("click", function () {
    alert("You clicked the white element!");
}, true));

alert(("myDiv2").addEventListener("click", function () {
    alert("You clicked the orange element!");
}, true));