let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle = document.querySelector(".detalleCancion");
let contenido = " ";

let url =  `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`

fetch(url)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);
   
   contenido += `<article class="detalleCancion">
   <img src="${data.album.cover}" alt="">
   <p>${data.title}</p>
   <p>${data.artist.name}</p>
   <p>${data.album.title}</p>
   </article>`

   detalle.innerHTML = contenido
})


   .catch(function (error) {
    console.log("Error: " + error);
})