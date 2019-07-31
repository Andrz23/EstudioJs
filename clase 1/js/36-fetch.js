'use strict'

/*
Datos importantes 

apiRESt -> es un servicio o un backend que nos devuelve datos
en json, puede recibir peticione por post, put, get,delete
Recibe un json y devuelve un Json

fetch -> es como un sustituto de ajax, metodo que hace peticiones de ajax


*/


//fetch (ajax) y peticiones a servicios / apis rest 


window.addEventListener('load', () => {

    var divUsuarios = document.querySelector("#usuarios");

    var usuarios = [];
    //Realizamos el llamado al api (datos remotos)
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(data => data.json()) //-> se captura los datos del json que me devuelve el api y se convierte en json
        .then(data => {
            usuarios = data;
            console.log(usuarios);
            // Se recorre el objeto dato que contiene los datos del json
            usuarios.map((data, i) => {
                // se crea el nuevo elemento donde se colocan los nombre y los usuarios
                let nombre = document.createElement('h3');
                nombre.innerHTML = i + "  " + data.name + " - " + data.username;
                // se agregan los nombre del json en el div 
                divUsuarios.appendChild(nombre);

                document.querySelector(".loading").style.display ='none';
            });

        }); //-> y tomanos el objeto data con el json y se la pasamos al array de usuarios



});
