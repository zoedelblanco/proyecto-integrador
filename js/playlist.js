let playlist = document.querySelector(".cancionesPlaylist");
let arrayPlaylist = JSON.parse(localStorage.getItem("playlist"))
let contenido = [];

localStorage.setItem("playlist", JSON.stringify(arrayPlaylist));

if (arrayPlaylist == null) {
    alert('La playlist esta vacia')
} else {
    for (let i = 0; i < arrayPlaylist.length; i++) {

        let song = JSON.parse(arrayPlaylist[i])
        contenido += `<li class="cancionesPlaylist">
        <a href="detalle-cancion.html?id=${song.id}"><p>${song.title}</p></a>
        </li>`
    }

    playlist.innerHTML = contenido
}

console.log(arrayPlaylist);

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