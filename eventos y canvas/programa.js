let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


let y = 0;
let x = 275;
let dT = 30;
let vY = 10;// en px/s
let r = 20
let color = 'red'

function dibujarCirculo(x, y, r, color){
    ctx.strokeStyle = color
    ctx.fillStyle = color;

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()
}

function moverCirculo(){ //10px
    if (0>y){
        vY = Math.abs(vY)
    }
    if (550<y){
        vY = -Math.abs(vY)
    }
    ctx.clearRect(0,0, 550, 550);
    let dY = (dT/1000) * vY;
    y = y + dY;
    dibujarCirculo(x, y, r, color);
}

window.setInterval(moverCirculo, dT);


function arrancarOParar(){
    if (vY > 0){
        vY = 0;
    }
    else{
        vY = 10;
    }
}

function agrandarRadio(){
    r = r + 1
}

function disminuirRadio(){
    r = r - 1
}

window.onkeyup = function(event){
    if (event.code == "Space")
    {
        arrancarOParar();
    } if (event.code == "NumpadAdd") //NumpadAdd: es el nombre de la tecla "+"
    {
        agrandarRadio()
    } if (event.code == "NumpadSubtract") //NumpadSubtract: es el nombre de la tecla "-"
    {
        disminuirRadio()
    } 
}



function cambiarColorPelota(){
    color = "#" + Math.floor(Math.random()*16777215).toString(16);
}

window.onclick = function(event){
    let clickX = event.offsetX;
    let clickY = event.offsetY;

    let distancia = Math.sqrt(Math.pow((x - clickX), 2) + Math.pow((y - clickY), 2))
    
    if (distancia <= r)
    {
        cambiarColorPelota();
    } else {
        if (vY = +vY)
        {
            vY = -vY
        }      
    }
        
    console.log(`Se hizo click en las coordenadas ${event.offsetX}, ${event.offsetX}`);
    console.log(`Las coordenadas de la pelota son ${x}, ${y}, y el radio es ${r}`)
    console.log(`La distancia es: ${distancia}`)
    
}