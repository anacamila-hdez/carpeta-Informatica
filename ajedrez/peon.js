let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")


function dibujarPeon(x, y, r, color){
    ctx.strokeStyle = color
    ctx.fillStyle = color

    ctx.beginPath()
    ctx.moveTo(x,y)
    ctx.lineTo(x-r, y+r*2.5)
    ctx.lineTo(x+r, y+r*2.5)
    ctx.lineTo(x,y)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.arc(x, y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()

    ctx.beginPath()
    ctx.rect(x-1.1*r, y+r*2.5, r*2.2, r/3)
    ctx.stroke()
    ctx.fill()
}

for(let x = 30; x < 260; x= x+30){
    dibujarPeon(x, 30, 10, "blue")
}

for(let x = 30; x < 420; x= x+55){
    dibujarPeon(x, 120, 20, "green")
}

for(let x = 55; x < 1020; x= x+135){
    dibujarPeon(x, 270, 50, "pink")
}

for(let x = 10; x < 160; x= x+20){
    dibujarPeon(x, 450, 5, "gray")
}