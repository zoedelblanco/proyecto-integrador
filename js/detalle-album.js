let queryString = location.search;
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get('id');

let detalle = document.querySelector('.detalleAlbum');
let contenido = '';

let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;

fetch(url)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);
      
      contenido += `<article class="detalleAlbum">
         <img src="${data.cover_medium}" alt="">
         <p>${data.title}</p>
         <p>${data.artist.name}</p>
         <p>${data.genres.name}</p>
         <p>${data.release_date}</p>
         </article>`

      detalle.innerHTML = contenido

   })
   .catch(function (error) {
    console.log("Error: " + error);
})