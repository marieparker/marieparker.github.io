var day = new Date();
var d = day.getDay();    

if (d !== 5) {
    document.getElementsByClassName("notyet")[0].classList.toggle("pancakes");
}

console.log(d);

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}
