let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle = document.querySelector(".detalleArtista");
let contenido = " ";

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data);

        contenido += `<article class="detalleArtista">
            <img class="imgArtista"src="${data.picture}" alt="">
            <p>${data.name}</p>
            
            </article>`

        detalle.innerHTML = contenido
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })
