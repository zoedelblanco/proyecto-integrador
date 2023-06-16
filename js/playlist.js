/* 

let play = document.querySelector(".playlist")

let arrayPlay = JSON.parse(localStorage.getItem("playlist"))

let contenido = []

let arrayArtistas = data.data

if (arrayPlay == null){
    alert('La playlist esta vacia')
}else{
    for(i=0 , i<arrayPlay.length , i++)
}

 */

//formulario//
let formulario = document.querySelector('form');
let inputDeBusqueda = document.querySelector('input');

formulario.addEventListener('submit', function (e) {
    e.preventDefault();

    if (inputDeBusqueda.value === "") {
        alert('El campo de busqueda no puede estar vacio')
    }
    else if (inputDeBusqueda.value.length < 3) {
        alert('Lo buscado debe tener al menos 3 caracteres');
    } else {
        this.submit()
    }
})