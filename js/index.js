let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists"
//Punto 1//

/*let formulario = document.querySelector(".formulario");
if (  == " ") {
    alert("El campo de busqueda no puede estar vacio");
}

if ( < 3){
    alert("El termino buscado debe tener al menos 3 caracteres");
} */

//Punto 2//

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        let contenedor = document.querySelector(".articulos3");
        let home =[];
        
        for (let i=0; i<5; i++){
            home +=  `<ul>
            <img src= "${data.data[i].picture}" alt='' />
            <p>Name: ${data.data[i].name} </p>
            <a href=""> Ir a detalle </a>
        </ul>`

        }
        contenedor.innerHTML=home
    })
    .catch(function (error) {
        console.log("Error: " + error);
    })