let comidas = ["Pan", "Arroz", "Huevos", "Carne", "Pescado"]

let lista = document.querySelector('#comida')

let a = 0;
let contenidoLista = ''

for (comida of comidas){
    contenidoLista = contenidoLista + `<ul><il>${comidas[a]}</il></ul>` + " "
    a = a + 1;
}

lista.innerHTML = contenidoLista;
