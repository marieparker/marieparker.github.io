var day = new Date();
var d = day.getDay();    

if (d !== 5) {
    document.getElementsByClassName("pancakes")[0].classList.toggle("notyet");
}

console.log(d);

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}
