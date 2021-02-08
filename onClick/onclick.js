let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");

let parrafo1 = document.querySelector("#parrafo1");
let parrafo2 = document.querySelector("#parrafo2");
let parrafo3 = document.querySelector("#parrafo3");

boton1.onclick = cambiarColor;
boton2.onclick = ocultarYmostrar;
boton3.onclick = ocultarParrafo;

function cambiarColor(){
    if (parrafo1.style.color = "black")
    {
        parrafo1.style.color = `rgb(${randomNumber(0,255)},${randomNumber(0,255)},${randomNumber(0,255)})`;
        // parrafo1.style.color = colorAleatorio();
    }
    
    console.log("Boton 1 clickeado");
}

function colorAleatorio() {
    // esta función define un color aleatorio por medio del numero hexadecimal
    let letra = '0123456789ABCDEF';
    let color = '#';
    let i = 0
    while (i < 6) {
      color = color + letra[Math.floor(Math.random() * 16)];
      i = i + 1;
    }
    return color;
}

function randomNumber (min,max){
    // Quise intentar que el color aleatorio sea dado por el rgb, 
    //entonces cree una variable que elija un numero aleatorio para luego ponerlo en el lugar de g, r y b.
    min = Math.round(min)
    max = Math.round(max)

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ocultarYmostrar(){
    if (parrafo2.textContent == "Hola, soy el parrafo 2.")
    {
        parrafo2.innerHTML = ""
    }
    else
    {
        parrafo2.innerHTML = "Hola, soy el parrafo 2."
    }
    console.log("Boton 2 clickeado");
}

function ocultarParrafo(){
    if (parrafo3.textContent == "Hola, soy el parrafo 3.")
    {
        parrafo3.innerHTML = ""
        setTimeout(mostrarParrafo, 3000);
    }

    console.log("Boton 3 clickeado");
}

function mostrarParrafo(){
    parrafo3.textContent = "Hola, soy el parrafo 3."
}