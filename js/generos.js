let url= "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);
        
        let contenedor= document.querySelector(".losGeneros")

        let hola= []

        for (let i = 1; i < 6; i++) {

            hola += `<article>
                <img src= "${data.data[i].picture}" alt='' />
                <p>Name: ${data.data[i].name} </p>
                <a href=""> Ir a detalle </a>
            </article>`

        }

            contenedor.innerHTML= hola

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })