let url = "https://api.deezer.com/artist/27/related"

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