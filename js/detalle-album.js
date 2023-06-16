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