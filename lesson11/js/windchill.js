const temp = document.getElementById('currentTemp').textContent;
const wind = document.getElementById('windSpeed').textContent;

console.log(temp);
console.log(wind);

var t = parseFloat(temp);
var s = parseFloat(wind);

console.log(t);
console.log(s);

var windChill;

if (t>50 || s<3) {
    windChill = "N/A"
    document.getElementById('windChill').innerHTML = windChill;
}
else {
    windChill = 35.74 + 0.6215 * t - 35.75 * Math.pow(s, 0.16) + 0.4275 * t * Math.pow(s, 0.16);
    windChill = Math.round(windChill*10)/10;
    document.getElementById('windChill').innerHTML = windChill + "&deg;";
}

