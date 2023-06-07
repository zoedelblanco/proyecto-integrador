//canciones//
let web = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks"
fetch(web)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".canciones");
        let home = [];

        for (let i = 0; i < 5; i++) {
            home += `<ul>
            <img src= "${data.data[i].album.cover}" alt='' />
            <p>Name: ${data.data[i].title} </p>
            <a href="detalle-cancion.html?id=${data.data[i].id}">Ir a detalle </a>
        </ul>`

        }
        contenedor.innerHTML = home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//albums//
let link = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums"
fetch(link)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".albumes");
        let home = [];

        for (let i = 0; i < 5; i++) {
            home += `<ul>
            <img src= "${data.data[i].cover}" alt='' />
            <p>Name: ${data.data[i].title} </p>
            <a href="detalle-album.html?id=${data.data[i].id}">Ir a detalle </a>
        </ul>`

        }
        contenedor.innerHTML = home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//artistas//
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".artistas");
        let home = [];

        for (let i = 0; i < 5; i++) {
            home += `<ul>
            <img src= "${data.data[i].picture}" alt='' />
            <p>Name: ${data.data[i].name} </p>
            <a href="detalle-artista.html?id=${data.data[i].id}">Ir a detalle </a>
        </ul>`

        }
        contenedor.innerHTML = home

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })

//formulario//
let formulario = document.querySelector(".formulario");
let buscar = document.querySelector("name=buscar")

formulario.addEventListener('submit', function(e){
    e.preventDefault()
    if (buscar.value === '') {
        alert("El campo de busqueda no puede estar vacio");
    }else if (buscar.value.length < 3){
        alert("Lo buscado debe tener al menos 3 caracteres");

    } else {
        form.submit()
    }
})