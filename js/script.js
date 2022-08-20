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
            $('#ImgNum1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgNum2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgNum3').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgNum4').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 


    document.getElementById("ImgNum1").src="img/dungeon/"+dado1+".svg";
    document.getElementById("ImgNum2").src="img/dungeon/"+dado2+".svg";
    document.getElementById("ImgNum3").src="img/dungeon/"+dado3+".svg";
    document.getElementById("ImgNum4").src="img/dungeon/"+dado4+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;

    if(suma>= 22) {
        alert("Felicitaciones ganaste con una puntuacion de " + suma + " puntos!")    
    }


    
    //$('#ImgDado1').attr("src", "../img/dados/"+dado1+".svg");
    //$('#SumaDados').html(suma);
    
}