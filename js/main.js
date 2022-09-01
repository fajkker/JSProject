$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$('#returnBtn').click(function() {
    location.href="index.html";
});

$('#classBtn').click(function() {
    location.href="class.html";
});

$('#mage').click(function() {
    location.href="#";
});

$('#warrior').click(function() {
    location.href="#";
});

$('#paladin').click(function() {
    location.href="#";
});

$('#bardo').click(function() {
    location.href="#";
});

$('#arquero').click(function() {
    location.href="#";
});

function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

var clase = ["Guerrero", "Paladin", "Bardo"];
clase.unshift("Mago")
clase.push("Arquero")
<<<<<<< HEAD
document.getElementById("clase").innerHTML = "Tienes " + clase.length + " clases para elegir" + ": " + clase.map((el) => el);

var clase = [
    {nombre: 'Guerrero', arma: 'maza'},
    {nombre: 'Bardo', arma: 'musica'},
    {nombre: 'Paladin', arma: 'espada'},
    {nombre: 'Mago', arma: 'magia'},
    {nombre: 'Arquero', arma: 'arco'},
]

clase.forEach( (clase) => {
    console.log(clase)
})

var nombres = clase.map((el => el.nombre))
console.log(nombres)

var armas = clase.map((el => el.arma))
console.log(armas)
=======
document.getElementById("titulo").innerHTML = "Tienes " + clase.length + " clases para elegir"+ ": " + clase.map((el) => el);
>>>>>>> 2ff835940329873148dc6762d422d80c28fa3d9f
