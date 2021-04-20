let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


function dibujarPeon(xC, yC, r){
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'black'

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

for(let x = 30; x < 280; x= x+35){
    dibujarPeon(x, 30, 10)
}

for(let x = 30; x < 280; x= x+35){
    dibujarPeon(x, 170, 10)
}