'use strict'

window.addEventListener('load', () => {
//agregar elemenetos al localstorage
    var formulario = document.querySelector("#formAnime");

    formulario.addEventListener('submit', () => {
        var input = document.querySelector("#addpeliculas").value;
        if (input.length >= 1) {
            localStorage.setItem(input, input);
        }
    });

    //Recorrer y mostrar los elemento de localStorage
    var ul = document.querySelector('#animesLista');
    var i;
    for (i in localStorage) {
        console.log(localStorage[i]);
        if (typeof localStorage[i] == 'string') {
            var li = document.createElement("li");
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

//para borar elementos de localstorage
    var formularioBorrado = document.querySelector("#formBorraAnime");

    formularioBorrado.addEventListener('submit', () => {
        var input = document.querySelector("#borrapeliculas").value;
        if (input.length >= 1) {
            localStorage.removeItem(input, input);
        }
    });


});