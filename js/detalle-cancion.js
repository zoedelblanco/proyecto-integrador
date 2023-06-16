let queryString = location.search
let objetoId = new URLSearchParams(queryString);
let id = objetoId.get("id");

let detalle = document.querySelector(".detalleCancion");
let contenido = " ";

let detalleAudio = document.querySelector(".audio");
let contenidoAudio = " ";

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(url)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);

      contenido += `<article class="detalleCancion">
         <img src="${data.album.cover_medium}" alt="">
         <p>${data.title}</p>
         <p>${data.artist.name}</p>
         <p>${data.album.title}</p>
      </article>`

      detalle.innerHTML = contenido

      contenidoAudio += `<article>
      <audio controls>
          <source src="${data.preview}" type="audio/ogg">
       </audio>
      </article>`

      detalleAudio.innerHTML = contenidoAudio

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