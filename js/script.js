function lanzardados() {
    let numero1 =  getNumRand(1, 9);
    let numero2 =  getNumRand(1, 9);
    let numero3 =  getNumRand(1, 9);
    let numero4 =  getNumRand(1, 9);
    let suma = numero1 + numero2 + numero3 + numero4;

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


    document.getElementById("ImgNum1").src="img/dungeon/"+numero1+".svg";
    document.getElementById("ImgNum2").src="img/dungeon/"+numero2+".svg";
    document.getElementById("ImgNum3").src="img/dungeon/"+numero3+".svg";
    document.getElementById("ImgNum4").src="img/dungeon/"+numero4+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;



    if(suma >= 22) {
        alert("Felicitaciones ganaste con una puntuacion de " + suma + " puntos!")   
    }
    
}

