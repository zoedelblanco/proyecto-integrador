let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle = document.querySelector(".detalleArtista");
let contenido = "";

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        contenido += `<article class="detalleArtista">
            <img class="imgArtista"src="${data.picture_medium}" alt="">
            <p>${data.name}</p>
            </article>`

        detalle.innerHTML = contenido

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


//lista album

let queryStringLista = window.location.search
let objetoIdLista = new URLSearchParams(queryStringLista);
let idLista = objetoId.get("id");

let api = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums`

fetch(api)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let listaAlbums = document.querySelector(".content");
        console.log(listaAlbums);
        contenidoAlbum = "";

        for (i = 0; i < 5; i++) {

            contenidoAlbum += `<li>
            <h3><a href="detalle-album.html?id=${data.data[i].id}">${data.data[i].title}</h3>
            </li>`;

        }

        listaAlbums.innerHTML = contenidoAlbum
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

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