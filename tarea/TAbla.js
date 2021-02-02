let albumes = [
    {nombre:"ALICIA",artista:"Alicia Keys", año:2020, imagen:"https://blogmistermusic.files.wordpress.com/2020/09/alicia.jpg"},
    {nombre:"Fine Line",artista:"Harry Styles", año:2019, imagen:"https://www.lahiguera.net/musicalia/artistas/harry_styles/disco/10250/harry_styles_fine_line-portada.jpg"},
    {nombre:"Shawn Mendez",artista:"Shawn Mendez", año:2018, imagen:"https://images-na.ssl-images-amazon.com/images/I/71Iw18bODyL._SX466_.jpg"},
    {nombre:"25",artista:"Adele", año:2015, imagen:"https://upload.wikimedia.org/wikipedia/en/9/96/Adele_-_25_%28Official_Album_Cover%29.png"},
    {nombre:"When We All Fall Asleep, Where Do We Go?",artista:"Billie Eilish", año:2019, imagen:"https://upload.wikimedia.org/wikipedia/en/3/38/When_We_All_Fall_Asleep%2C_Where_Do_We_Go%3F.png"},
    {nombre:"Bad",artista:"Michael Jackson", año:1987, imagen: "https://images-na.ssl-images-amazon.com/images/I/71rWMh8QHnL._SX355_.jpg"}
]

let tabla = document.querySelector('#albumes')

let contenidoTabla = '<tr><th>Nombre</th><th>Artista</th><th>Año</th><th>Imagen</th></tr>'
for (album of albumes){
    contenidoTabla = contenidoTabla + `<tr><td>${album.nombre}</td><td>${album.artista}</td><td>${album.año}</td>
    <td><img width="500px" src="${album.imagen}" alt=""></td></tr>`
}

tabla.innerHTML = contenidoTabla;