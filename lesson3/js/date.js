try {
    document.getElementById('currentYear').innerHTML = new Date().getFullYear();
}
catch (e) {
    alert ["Your browser does not support this function"]
}