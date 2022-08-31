$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('#returnBtn').click(function() {
    location.href="index.html";
});

function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

var clase = ["Mago", "Guerrero", "Bardo", "Paladin"];

document.getElementById("titulo").innerHTML = "Tienes " + clase.length + " clases para elegir";
