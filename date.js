try {
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
}
catch (e) {
    alert ["Your browser does not support this function"]
}

try {
    document.getElementById('lastUpdated').innerHTML = new Date().toLocaleDateString("en-US") + " " + new Date().toLocaleTimeString("en-US");
}
catch (e) {
    alert ["Your browser does not support this function"]
}
