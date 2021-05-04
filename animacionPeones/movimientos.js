let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

let x = 0;
let y = 0;
let x2 = 550;
let y2 = 0;
let dT = 30;

function peonHorizontal(){ //40 px
    let dX = (dT/1000) * 40;
    x = x + dX;
    dibujarPeon(x, 275, 10, 'black');
}

function peonVertical(){ //200px
    let dX = (dT/1000) * 200;
    y = y + dX;
    dibujarPeon(275, y, 10, 'black');
}

function moverDiagonal(){ //100 px
    let dX = (dT/1000) * 100;
    x2 = x2 - dX;
    y2 = y2 + dX;
    dibujarPeon(x2, y2, 10, 'black');
}


function mover(){
    ctx.clearRect(0,0, 550, 550);
    peonHorizontal()
    peonVertical()
    moverDiagonal()
}

window.setInterval(mover, dT);




function dibujarPeon(xC, yC, r, color){
    ctx.strokeStyle = 'black'
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(xC,yC)
    ctx.lineTo(xC-8, yC+25)
    ctx.lineTo(xC+8, yC+25)
    ctx.lineTo(xC,yC)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(xC, yC, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.rect(xC-10,yC+25,r*2,5)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.rect(xC-r/1.7,yC+r,r*1.2,2)
    ctx.stroke()
    ctx.fill()
}