$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// BOTON REGRESAR INDEX
$('#returnBtn').click(function() {
    location.href="index.html";
});


// BOTON REGRESAR DUNGEON
//$('#returnBtn').click(function() {
//    location.href="dungeon.html";
//});

// BOTON CLASES
$('#classBtn').click(function() {
    location.href="class.html";
});

function getNumRand(min, max) {       
    return Math.round(Math.random()*(max-min)+parseInt(min));
}

// IMPORTO SCRIPT.JS

//TRAIGO MAGO
function mostrarM(input) {
    var mage=document.getElementById("mage")
    if(input.value=="Mago") {
        mage.style.display = "block";
        input.value="Ocultar"
    } else {
        mage.style.display = "none"
        input.value="Mago"
    }

    //document.getElementById("mage").style.display = 'block';
    //alert("Magos usan " + clase.arma)

};


// TRAIGO WARRIOR

function mostrarW(input) {
    var warrior=document.getElementById("warrior")
    if(input.value=="Warrior") {
        warrior.style.display = "block";
        input.value="Ocultar"
    } else {
        warrior.style.display = "none"
        input.value="Warrior"
    }

    //function warrior() {
    //    document.getElementById("warrior").style.display = 'block';
};


// TRAIGO PALADIN

function mostrarP(input) {
    var paladin=document.getElementById("paladin")
    if(input.value=="Paladin") {
        paladin.style.display = "block";
        input.value="Ocultar"
    } else {
        paladin.style.display = "none"
        input.value="Paladin"
    }

    //function paladin() {
    //     document.getElementById("paladin").style.display = 'block';
};


// TRAIGO BARDO

function mostrarB(input) {
    var bardo=document.getElementById("bardo")
    if(input.value=="Bardo") {
        bardo.style.display = "block";
        input.value="Ocultar"
    } else {
        bardo.style.display = "none"
        input.value="Bardo"
    }

    //function bardo() {
    //     document.getElementById("bardo").style.display = 'block';
};


// TRAIGO ARQUERO
function mostrarA(input) {
    var arquero=document.getElementById("arquero")
    if(input.value=="Arquero") {
        arquero.style.display = "block";
        input.value="Ocultar"
    } else {
        arquero.style.display = "none"
        input.value="Arquero"
    }

    //function arquero() {
    //     document.getElementById("arquero").style.display = 'block';
};


var clase = [" Guerrero", " Paladin", " Bardo"];
clase.unshift("Mago")
clase.push(" Arquero")
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

//function mostrar() {
//    alert("Magos usan " + clase(nombre("Mago")).arma)
//};



//for (let i = 0; i < 3; i++) {
//    const newPerson = document.createElement("div");
//    document.querySelector("")
// }


document.getElementById("agregar").innerHTML = suma;