let queryString = location.search;
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get('id');

let detalle = document.querySelector('.generoArtista');
let contenido = '';

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}/artists`;

fetch(urlArtistas)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        let arrayArtistas = data.data

        for (i = 0; i < arrayArtistas.length; i++)
            contenido += `<article class="detalleGenero">
            <a href="detalle-artista.html?id=${arrayArtistas[i].id}">
            <img src="${arrayArtistas[i].picture_medium}" alt="">
            <p>${arrayArtistas[i].name}</p>

            </article>`

        detalle.innerHTML = contenido

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


let urlGeneros = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/${id}`;

let titulo= document.querySelector(".tituloDetalleGenero")

fetch(urlGeneros)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        titulo.innerText= data.name

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