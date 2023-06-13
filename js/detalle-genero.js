let queryString = location.search;
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get('id');

let detalle = document.querySelector('.detalleGenero');
let contenido = '';

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`;

fetch(urlArtistas)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        contenido += `<article class="detalleGenero">
        <p>${data.name}</p>
        </article>`

        detalle.innerHTML = contenido

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


let urlGeneros = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;
    
fetch(urlGeneros)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let nombreGenero= document.querySelector(".tituloDetalleGenero")
        nombreGenero.innerText= data.name

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })