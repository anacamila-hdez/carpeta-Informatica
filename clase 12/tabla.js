// Lista de planetas y sus imágenes
let planetas = [
    {nombre:"Mercurio", diametro:4879,imagen:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/1200px-Mercury_in_color_-_Prockter07_centered.jpg "},
    {nombre:"Venus", diametro:12104,imagen:"https://ichef.bbci.co.uk/news/640/cpsprodpb/CEAA/production/_114360925_jaxa-isas-akatsuki-project-team.jpg"},
    {nombre:"Tierra", diametro:12756,imagen:"https://dam.ngenespanol.com/wp-content/uploads/2019/05/Tierra-Espacio.png"},
    {nombre:"Marte", diametro:6792,imagen:"https://i.blogs.es/0585c9/marte8k/1366_2000.jpg "},
    {nombre:"Júpiter", diametro:142984,imagen:"https://www.ecestaticos.com/image/clipping/d0d127b5b80c69905e744d76a836d4c8/un-planeta-doble-que-no-se-ve-desde-la-edad-media-el-fenomeno-unico-de-jupiter-y-saturno.jpg"},
    {nombre:"Saturno", diametro:120536,imagen: "https://www.rcinet.ca/es/wp-content/uploads/sites/4/2020/12/saturno-635x357.jpg"},
    {nombre:"Urano", diametro:51118,imagen:"https://www.astrobio.net/images/galleryimages_images/Gallery_Image_8386.jpg"},
    {nombre:"Neptuno", diametro: 49528, imagen:"https://upload.wikimedia.org/wikipedia/commons/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"}
]
// Creo una variable que haga referencia a la tabla
let tabla = document.querySelector('#planetas')
// console.log(tabla)

// Voy a llenar la tabla añadiendo las filas necesarias
let contenidoTabla = '<tr><th>Nombre</th><th>Diámetro</th><th>Imagen</th></tr>'
for (planeta of planetas){
    contenidoTabla = contenidoTabla + `<tr><td>${planeta.nombre}</td><td>${planeta.diametro}</td>
    <td><img width="500px" src="${planeta.imagen}" alt=""></td></tr>`
}
// A la tabla le asigno el contenido que creamos
tabla.innerHTML = contenidoTabla;