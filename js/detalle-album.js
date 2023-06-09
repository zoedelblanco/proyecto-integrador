let  objetoId = new URLSearchParams(location.search)
let id = objetoId.get("id")

let contenedor = document.querySelector('.detalleAlbum')
let contenido = ''                                      
  

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/albums${id}`)
.then(function (response){
   return response.json()
})
.then(function (data){
   console.log(data);

   let contenedor = document.querySelector(".detalleAlbum");
   let contenido = [];
   
   for(let i=0; i < contenido.length; i++){
    contenido += `<article class="detalleAlbum">
    <img src="${data.data[i].cover_medium} alt="">
    <p>${data.data[i].title}</p>
    <p>${data.data[i].artist.name}</p>
    <p>${data.data[i].genres.name}</p>
    <p>${data.data[i].release_date}</p>
    </article>`
   }
   contenedor.innerHTML = contenido

})
.catch(function (error) {
    console.log("Error: " + error);
})
