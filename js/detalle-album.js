let queryString = location.search;
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get('id');

let detalle = document.querySelector('.detalleAlbum');
let contenido = '';

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`;

fetch(url)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);
      
      // contenido += `<article class="detalleAlbum">
      //    <img src="${data.cover_medium}" alt="">
      //    <p>${data.title}</p>
      //    <p>${data.artist.name}</p>
      //    <p>${data.genres.data[0].name}</p>
      //    <p>${data.release_date}</p>
      //    <p>${data.tracks.data.title}</p>
      //    </article>`

      // detalle.innerHTML = contenido

      //1) capturar cada uno de los elementos del detalle y ponerles info desde js
      let img = document.querySelector(".img");
      img.src = data.cover_medium;
      let title = document.querySelector(".title");
      title.innerText = data.title

      //2) Armar la lista de tracks


   })
   .catch(function (error) {
    console.log("Error: " + error);
})