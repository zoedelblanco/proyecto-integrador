let url = "https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre"

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {

        console.log(data);

        let contenedor = document.querySelector(".losGeneros")

        let contenido = []

        for (let i = 1; i < 13; i++) {

            contenido += `<article>
                <a href="detalle-genero.html?id=${data.data[i].id}">
                <img src= "${data.data[i].picture_medium}" alt='' />
                <p>${data.data[i].name} </p>
                </a>
            </article>`

        }

        contenedor.innerHTML = contenido

    })
    .catch(function (error) {
        console.log("Error: " + error);
    })