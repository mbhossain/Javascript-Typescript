//https://www.w3schools.com/js/tryit.asp?filename=tryjs_ajax_first
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xhttp.open("GET", "ajax_info.txt", true);
    xhttp.send();
}