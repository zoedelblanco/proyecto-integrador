let objetoId = new URLSearchParams(location.search);
let id =  objetoId.get('id');


let url= "https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}"
