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

      let img = document.querySelector(".img");
      img.src = data.cover_medium;

      let title = document.querySelector(".title");
      title.innerText = data.title

      let artista = document.querySelector(".artista")
      artista.innerText = data.artist.name

      let genero = document.querySelector(".genero")
      genero.innerText = data.genres.data[0].name

      let fecha = document.querySelector(".fecha")
      fecha.innerText = data.release_date


      let tracksContainer = document.querySelector(".tracksContainer")
      contenido = []

      for (let i = 0; i < 5; i++) {

         contenido += `<article>${data.tracks.data[i].title}</article>`;

      }

      tracksContainer.innerHTML = contenido

   })
   .catch(function (error) {
      console.log("Error: " + error);
   })

