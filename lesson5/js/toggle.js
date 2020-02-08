var day = new Date();
var d = day.getDay();    
d=2;
if (d != 5) {
    document.getElementById("pancakes").style.display = 'none';
}

console.log(d);


function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("hide");
}
