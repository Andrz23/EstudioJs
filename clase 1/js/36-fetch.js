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
    var divUsuario = document.querySelector("#usuario");

    //Realizamos el llamado al api (datos remotos)
    getUsuarios()
        .then(data => data.json()) //-> se captura los datos del json que me devuelve el api y se convierte en json
        .then(data => { //-> promesas 
           ListaUsuarios(data)


           return getUsuario();
        })
        .then(data => data.json())
        .then(usuario =>{

        }); //-> y tomanos el objeto data con el json y se la pasamos al array de usuarios


function getUsuarios(){
   return fetch('https://jsonplaceholder.typicode.com/users')
}

function getUsuario(){
return fetch('https://jsonplaceholder.typicode.com/users/1')
}


    function ListaUsuarios(usuarios) {
        // Se recorre el objeto dato que contiene los datos del json
        usuarios.map((data, i) => {
            // se crea el nuevo elemento donde se colocan los nombre y los usuarios
            let nombre = document.createElement('h3');
            nombre.innerHTML = i + "  " + data.name + " - " + data.username;
            // se agregan los nombre del json en el div 
            divUsuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        });
}




function mostrarUsuario(usuarios) {
        // se crea el nuevo elemento donde se colocan los nombre y los usuarios
        let nombre = document.createElement('h4');
        nombre.innerHTML = i + "  " + data.name + " - " + data.username;
        // se agregan los nombre del json en el div 
        divUsuario.appendChild(nombre);

        document.querySelector(".loading").style.display = 'none';
   
}

});
