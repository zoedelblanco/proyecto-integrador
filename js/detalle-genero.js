let queryString = location.search;
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get('id');

let detalle = document.querySelector('.detalleGenero');
let contenido = '';

let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`;
let urlGeneros = 

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