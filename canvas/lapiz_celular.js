let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

ctx.fillStyle = "black"
ctx.lineWidth= 1

ctx.strokeStyle = "black"
ctx.beginPath()
ctx.strokeRect(0,0,120,200)
ctx.fillRect(10,20,100,145)
ctx.arc(60, 180, 7, -Math.PI/2, 3*Math.PI/2)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "white"
ctx.beginPath()
ctx.moveTo(100, 250)
ctx.lineTo(50, 275)
ctx.lineTo(100, 300)
ctx.strokeRect(100,250,270,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "yellow"
ctx.beginPath()
ctx.strokeRect(100,250,270,50)
ctx.fillRect(100,250,270,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "black"
ctx.beginPath()
ctx.moveTo(50, 275)
ctx.lineTo(60, 270)
ctx.lineTo(60, 280)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "grey"
ctx.beginPath()
ctx.rect(370,250,30,50)
ctx.stroke()
ctx.fill()

ctx.fillStyle = "pink"
ctx.beginPath()
ctx.moveTo(400,250)
ctx.arc(400,275, 25, -Math.PI/2, Math.PI/2)
ctx.stroke()
ctx.fill()