let busqueda = new URLSearchParams(location.search)
let buscar = busqueda.get('buscar')
let resultados = document.querySelector('.resultados')
let contenido = ''
let titulo = document.querySelector('.busqueda')
titulo.innerHTML += buscar

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
   .then(function (response) {
      return response.json()
   })
   .then(function (data) {
      console.log(data);

      for (let i = 0; i < data.data.length; i++) {
         contenido += `<article class="resultados">
                        <img src="${data.data[i].album.cover_medium}" alt="">
                        <p class="resultados"><a href="detalle-cancion.html?id=${data.data[i].id}"> ${data.data[i].title} </a></p>
                     </article>`
      }
      resultados.innerHTML += contenido
      if (data.data.length == 0) {
         alert('La busqueda no trajo resultados')
      }
      contenido.innerHTML = contenido
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