function forward() {
    
    var trip = document.getElementsByClassName("show")[0].getAttribute('id');
    console.log(trip);
    document.getElementById(trip).classList.toggle("show");
    trip = parseFloat(trip);
    trip = trip + 1;

    if (trip > 3) {
        trip = trip - 3;
    }
    console.log(trip);
    document.getElementById(trip).classList.toggle("show");
}

function backward() {
    var trip = document.getElementsByClassName("show")[0].getAttribute('id');
    console.log(trip);
    document.getElementById(trip).classList.toggle("show");
    trip = parseFloat(trip);
    trip = trip - 1;

    if (trip == 0) {
        trip = trip + 3;
    }
    console.log(trip);
    document.getElementById(trip).classList.toggle("show");
}