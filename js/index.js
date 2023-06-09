//canciones//
let web = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks"
fetch(web)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".canciones");
        let home = [];
        
        for (let i=0; i<8; i++){
            home +=  `<ul>
            <img src= "${data.data[i].album.cover_medium}" alt='' />
            <p>${data.data[i].title} </p>
            <a href="detalle-cancion.html?id=${data.data[i].id}">Ver mas</a>
        </ul>`

        }
        contenedor.innerHTML = home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//albums//
let link = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums"
fetch(link)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".albumes");
        let home = [];

        for (let i = 4; i > 4 && i < 8; i++) {
            home += `<ul>
            <img src= "${data.data[i].cover_medium}" alt='' />
            <p>${data.data[i].title} </p>
            <a href="detalle-album.html?id=${data.data[i].id}">Ver mas</a>
        </ul>`

        }
        contenedor.innerHTML = home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//artistas//
let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists"
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".artistas");
        let home = [];

        for (let i = 0; i < 8; i++) {
            home += `<ul>
            <img src= "${data.data[i].picture_medium}" alt='' />
            <p>${data.data[i].name} </p>
            <a href="detalle-artista.html?id=${data.data[i].id}">Ver mas</a>
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

formulario.addEventListener('submit', function(e){
    e.preventDefault();

    if (inputDeBusqueda.value === "") {
        alert('El campo de busqueda no puede estar vacio')
    } 
    else if (inputDeBusqueda.value.length < 3){
        alert('Lo buscado debe tener al menos 3 caracteres');
    } else {
        this.submit()
    }
})