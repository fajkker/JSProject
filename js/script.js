function lanzardados() {
    let dado1 =  getNumRand(1, 9);
    let dado2 =  getNumRand(1, 9);
    let dado3 =  getNumRand(1, 9);
    let dado4 =  getNumRand(1, 9);
    let suma = dado1 + dado2 + dado3 + dado4;

    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 700,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado3').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado4').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 


    document.getElementById("ImgDado1").src="img/dungeon/"+dado1+".svg";
    document.getElementById("ImgDado2").src="img/dungeon/"+dado2+".svg";
    document.getElementById("ImgDado3").src="img/dungeon/"+dado3+".svg";
    document.getElementById("ImgDado4").src="img/dungeon/"+dado4+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;

    if(suma>= 30) {
        alert("Felicitaciones ganaste con una puntuacion de " + suma)
    }
    
    //$('#ImgDado1').attr("src", "../img/dados/"+dado1+".svg");
    //$('#SumaDados').html(suma);
    
}