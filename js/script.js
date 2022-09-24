function lanzardados() {
    let numero1 = getNumRand(1, 9);
    let numero2 = getNumRand(1, 9);
    let numero3 = getNumRand(1, 9);
    let numero4 = getNumRand(1, 9);
    let suma = numero1 + numero2 + numero3 + numero4;

    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 700,
        step: function (now) {
            var scale = (0.7 * now / 360);
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


    document.getElementById("ImgNum1").src = "img/dungeon/" + numero1 + ".svg";
    document.getElementById("ImgNum2").src = "img/dungeon/" + numero2 + ".svg";
    document.getElementById("ImgNum3").src = "img/dungeon/" + numero3 + ".svg";
    document.getElementById("ImgNum4").src = "img/dungeon/" + numero4 + ".svg";
    document.getElementById("SumaNumeros").innerHTML = suma;
    
    $('#int').click(function () {
        swal({
            title: "Inteligencia",
            text: "Sumaste " + suma + " puntos a Inteligencia",
            icon: "success",
          });
        document.getElementById("int").innerHTML = suma;
    });

    $('#str').click(function () {
        swal({
            title: "Fuerza",
            text: "Sumaste " + suma + " puntos a Fuerza",
            icon: "success",
          });
        document.getElementById("str").innerHTML = suma;
    });

    $('#const').click(function () {
        swal({
            title: "Constitucion",
            text: "Sumaste " + suma + " puntos a Constitucion",
            icon: "success",
          });
        document.getElementById("const").innerHTML = suma;
    });

    $('#sab').click(function () {
        swal({
            title: "Sabiduria",
            text: "Sumaste " + suma + " puntos a Sabiduria",
            icon: "success",
          });
        document.getElementById("sab").innerHTML = suma;
    });
}


