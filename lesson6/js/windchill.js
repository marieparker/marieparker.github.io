var temp = document.getElementById('Temp').value;
var wind = document.getElementById('windSpeed').value;

var t = parseInt(temp);
var s = parseInt(wind);

var windChill = t*s;

document.getElementById("windChill").innerHTML = temp;