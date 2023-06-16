//canciones//
let urlCanciones = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"
fetch(urlCanciones)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".canciones");
        let home = [];

        for (let i = 0; i < 8; i++) {
            home += `<ul>
            <a href="detalle-cancion.html?id=${data.data[i].id}">
            <img src= "${data.data[i].album.cover_medium}" alt=''>
            <p>${data.data[i].title} </p>
            <h5>${data.data[i].artist.name}</h5>
            </a>
        </ul>`

        }
        contenedor.innerHTML = home

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


//albums//
let urlAlbums = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"
fetch(urlAlbums)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".albumes");
        let home = [];

        for (let i = 4; i < 10; i++) {
            home += `<ul>
            <a href="detalle-album.html?id=${data.data[i].id}">
            <img src= "${data.data[i].cover_medium}" alt=''>
            <p>${data.data[i].title} </p>
            </a>
        </ul>`

        }
        contenedor.innerHTML = home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//artistas//
let urlArtistas = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
fetch(urlArtistas)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".artistas");
        let home = [];

        for (let i = 0; i < 8; i++) {
            home += `<ul>
            <a href="detalle-artista.html?id=${data.data[i].id}">
            <img src= "${data.data[i].picture_medium}" alt=''>
            <p>${data.data[i].name} </p>
            </a>
        </ul>`

        }
        contenedor.innerHTML = home

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