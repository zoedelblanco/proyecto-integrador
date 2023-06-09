let busqueda= new URLSearchParams(location.search)
let buscar = busqueda.get('buscar')
let resultados = document.querySelector('.resultados')
let contenido = ''                                      
let titulo = document.querySelector('.busqueda')  
titulo.innerHTML += buscar        

fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${buscar}`)
.then(function (response){
   return response.json()
})
.then(function (data){
   console.log(data);

   let contenedor = document.querySelector(".resultados");
   let contenido = [];
    for(let i=0; i < data.data.length; i++){  
        contenido += `<article class="resultados">
                        <p class="resultados"><a href="detalle-cancion.html?id=${data.data[i].id}"> ${data.data[i].title} </a></p>
                     </article>`
   }
   resultados.innerHTML += contenido
   if(data.data.length == 0){
      alert('La busqueda no trajo resultados')
   }
   contenedor.innerHTML=contenido
})
.catch(function (error) {
   console.log("Error: " + error);
})
