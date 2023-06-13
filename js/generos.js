let url = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);

        let contenedor = document.querySelector(".losGeneros")

        let hola = []

        for (let i = 1; i < 7; i++) {

            hola += `<article>
                <a href="detalle-genero.html">
                <img src= "${data.data[i].picture_medium}" alt='' />
                <p>${data.data[i].name} </p>
                </a>
            </article>`

        }

        contenedor.innerHTML = hola

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })