//formulario//
let formulario = document.querySelector(".formulario");
let buscar = document.querySelector('[name=buscador]')

form.addEventListener('submit', function(e){
    e.preventDefault()
    if (buscar.value == '') {
        alert("El campo de busqueda no puede estar vacio");
    }else if (buscar.value.length < 3){
        alert("El termino buscado debe tener al menos 3 caracteres");

    } else {
        form.submit()
    }
})


//artistas//
let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".articulos3");
        let home = '';
        
        for (let i = 0; i < 5; i++){
            home +=  `<article>
            <img src= "${data.data[i].picture}" alt='' />
            <p>Name: ${data.data[i].name} </p>
            <a href="detalle-artista.html?id=${data.data[i].id}">Ir a detalle </a>
        </article>`

        }
        contenedor.innerHTML=home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })


//canciones//
let url2 = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/track"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".articulos1");
        let home =[];
        
        for (let i=0; i<5; i++){
            home +=  `<ul>
            <img src= "${data.data[i].id}" alt='' />
            <p>Name: ${data.data[i].titel} </p>
            <a href="detalle-artista.html?id=${data.data[i].id}">Ir a detalle </a>
        </ul>`

        }
        contenedor.innerHTML=home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })