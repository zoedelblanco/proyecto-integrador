let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle = document.querySelector(".detalleArtista");
let contenido = " ";

let url =  `https://api.allorigins.win/raw?url=https://api.deezer.com/artists/${id}`

fetch(url)
    .then(function (response) {
    return response.json()
    })
    .then(function (data) {
    console.log(data);

    contenido += `<article class="detalleArtista">
    <img src="${data.picture}" alt="">
    <p>${data.name}</p>
    <ul>${data.nb_album}</ul>
    </article>`

    detalle.innerHTML = contenido
})
.catch(function (error) {
    console.log("Error: " + error);
})
