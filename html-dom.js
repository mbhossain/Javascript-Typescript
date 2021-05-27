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