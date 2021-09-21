let canvas = document.querySelector("#miCanvas")

// escoger el contexto, en este caso el contexto 2d
let ctx = canvas.getContext("2d")

function dibujarBoton(xC, yC, r){
    // dibujo el circulo
    ctx.beginPath();
    ctx.strokeStyle = 'blue';
    ctx.fillStyle = 'blue';
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke();
    ctx.fill();
    
    // dibujo el cuadrado
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.strokeRect(xC-r, yC-r, 2*r, 2*r);
}

let x = 0;
let y = 200;

let vX = 10;// en px/s
let dT = 30;

function moverYDibujar(){
    ctx.clearRect(0,0, 600, 400);
    let dX = dT/1000 *vX
    x = x + dX;
    dibujarBoton(x, y, 10);
}

function arrancarOParar(){
    if (vX > 0){
        vX = 0;
    }
    else{
        vX = 10;
    }
}

window.setInterval(moverYDibujar, dT);

// Quiero que arranque o pare cuando presiones la tecla espacio.
// Para hacer esto se debe usar un event listener.

function teclaPresionada(event){
    if (event.keyCode == '32'){
        arrancarOParar()//acción a ejecutar
    }
    console.log (event);
}

window.onkeyup = teclaPresionada;

