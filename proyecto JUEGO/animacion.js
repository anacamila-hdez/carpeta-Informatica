let canvas = document.querySelector("#miCanvas")
let ctx = canvas.getContext("2d")

let score = 5;
document.getElementById('lbScore').innerHTML = score

let nivel = "01";
document.getElementById('lbNivel').innerHTML = nivel

let dT = 10;
let RandomColor = "#" + Math.floor(Math.random()*16777215).toString(16);



//inicio del juego en el nivel 01
Nivel01();

function Nivel01(){

    //MOLDE para crear meteoritos
    class Meteorito{
        constructor(xM, yM, vX, vY, rM){
            this.xM = xM;// la coordenada x del centro de ESTA pelota
            this.yM = yM;
            this.vX = vX;
            this.vY = vY;
            this.rM  = rM;
        }
        moverse(){
            if (10 > this.yM){
                this.vY = Math.abs(this.vY)
            }
            if (400 < this.yM){
                this.vY = -Math.abs(this.vY)
            } 
            if (10 > this.xM){
                this.vX = Math.abs(this.vX)
            }
            if (1300 < this.xM){
                this.vX = -Math.abs(this.vX)
            }
            
            let dX = dT/1000 *this.vX;
            let dY = dT/1000 *this.vY;
            this.xM = this.xM + dX;
            this.yM = this.yM + dY;
        }
        dibujarse(){
            ctx.strokeStyle = '#441F02'
            ctx.fillStyle = '#441F02'

            ctx.beginPath()
            ctx.arc(this.xM,this.yM, this.rM, 0, 2*Math.PI);
            ctx.stroke()
            ctx.fill()
        }
        
    }

    let meteoritos = [] //Array de meteoritos

    let xN = 275;
    let yN = 580;
    let dTB = 10;
    let r = 5

    let x = 375;
    let y = 534;


    dibujarNave(xN, yN)
    dibujarBala(x, y, r, RandomColor)
    //MovimientoMeteorito()

    console.log (`score: ${score}`)

    function crearMeteorito01(){
        //meteoritos.splice(0, 1);

        let xM = 30;
        let yM = 200;
        let vX = 200;
        let vY = 300*Math.random() - 100;

        let meteoritoNuevo01 = new Meteorito(xM, yM, vX, vY, 40);
    
        //añado la nueva pelota al array de pelotas
        meteoritos.push(meteoritoNuevo01);
    }

    let setIntervalCrear01 = window.setInterval(crearMeteorito01(), dT);

    function moverYDibujarMeteorito(){
        ctx.clearRect(0,0, 1300, 529);
        for (Meteorito of meteoritos){
            Meteorito.moverse();
            Meteorito.dibujarse();
        }
    }

    let setIntervalMyD01 =window.setInterval(moverYDibujarMeteorito, dT);



    function Victoria(){
        alert(`Has salvado la tierra! Los meteoritos que acechaban el planeta han sido destruídos pero si quieres volver a ser un éroe oprime aceptar y comenzaremos de nuevo.`)
        
        score = 5;
        document.getElementById('lbScore').innerHTML = score
        nivel = "01"
        document.getElementById('lbNivel').innerHTML = nivel
        Nivel01();
        
    }

    function AlertaEncuentro() {
        //Alertar que el jugador ha logrado destruir el meteorito
        //Ingresamos un mensaje a mostrar
        var mensaje = confirm("Has destruido un meteorito! Deseas pasar al siguiente nivel?");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            document.getElementById('lbScore').innerHTML = score
            nivel = "02"
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel02()
        }
        //Detectamos si el usuario denegó el mensaje
        else {
            alert(`Tu puntaje final fue ${score}`);
            score = 5;
            document.getElementById('lbScore').innerHTML = score
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel01();
        }
    }

    function AlertaFallo() {
        alert(`Tu disparo ha sido fallido. Sigue intentando!`)
        document.getElementById('lbScore').innerHTML = score;
        document.getElementById('lbNivel').innerHTML = nivel;
        Nivel01();
    }

    function disparoBala(){
        let vYB = -200; // en px/s

        function movimientoBala(){  //animacion de pelotita hacia arriba (disparo)
            
            let dY = (dTB/1000) * vYB;
            y = y + dY;
            dibujarBala(x, y, r, RandomColor);


            //Encuentro meteorito con la bala

            let distanciaMyB = Math.sqrt(Math.pow(Meteorito.xM - x, 2) + Math.pow((Meteorito.yM - y), 2)); //teorema pitagoras para encontrar distancia entre Meteorito y Bala

            if(distanciaMyB <= 35){
                console.log(`Bala y meteorito se han encontrado y la distancia es: ${distanciaMyB}`);
                score = score + 5;
                if(score >= 21){
                    Victoria();
                } else{
                    console.log (`score: ${score}`)

                    meteoritos.splice(0,1);

                    clearInterval(setIntervalCrear01);
                    clearInterval(setIntervalMyD01);
                    clearInterval(disparo);

                    ctx.clearRect(0,0, 1300, 600);
                    AlertaEncuentro()
                }
                
            } if(y==0){
                meteoritos.splice(0,1);

                clearInterval(setIntervalCrear01);
                clearInterval(setIntervalMyD01);
                clearInterval(disparo);

                score = score - 1;
                console.log (`score: ${score}`)
                ctx.clearRect(0,0, 1300, 600);
                AlertaFallo();
            }
        }

        let disparo = setInterval(movimientoBala, dT);
    }

    window.onkeydown = function(event){
    
        if (event.code == "ArrowRight")
        {
            movimientoNaveDerecha()
        } if (event.code == "ArrowLeft")
        {
            movimientoNaveIzquierda()
        } if (event.code == "Space"){
            disparoBala()
        }
    }
    
    function movimientoNaveDerecha(){
        ctx.clearRect(0,0, 1300, 600);
        x = x+20
        xN = xN+20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
    
    function movimientoNaveIzquierda(){
        ctx.clearRect(0,0, 1300, 600);
        x = x-20;
        xN = xN-20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
}

function Nivel02(){

    //MOLDE para crear meteoritos
    class Meteorito{
        constructor(xM, yM, vX, vY, rM){
            this.xM = xM;// la coordenada x del centro de ESTA pelota
            this.yM = yM;
            this.vX = vX;
            this.vY = vY;
            this.rM  = rM;
        }
        moverse(){
            if (10 > this.yM){
                this.vY = Math.abs(this.vY)
            }
            if (400 < this.yM){
                this.vY = -Math.abs(this.vY)
            } 
            if (10 > this.xM){
                this.vX = Math.abs(this.vX)
            }
            if (1300 < this.xM){
                this.vX = -Math.abs(this.vX)
            }
            
            let dX = dT/1000 *this.vX;
            let dY = dT/1000 *this.vY;
            this.xM = this.xM + dX;
            this.yM = this.yM + dY;
        }
        dibujarse(){
            ctx.strokeStyle = '#441F02'
            ctx.fillStyle = '#441F02'

            ctx.beginPath()
            ctx.arc(this.xM,this.yM, this.rM, 0, 2*Math.PI);
            ctx.stroke()
            ctx.fill()
        }
        
    }

    let meteoritos = [] //Array de meteoritos

    let xN = 275;
    let yN = 580;
    let dTB = 10;
    let r = 5

    let x = 375;
    let y = 534;

    dibujarNave(xN, yN)
    dibujarBala(x, y, r, RandomColor)
    //MovimientoMeteorito()

    console.log (`score: ${score}`)

    function crearMeteorito02(){
        //meteoritos.splice(0, 1);

        let xM = 1300;
        let yM = 200;
        let vX = -100;
        let vY = 10*Math.random() - 20;

        let meteoritoNuevo02 = new Meteorito(xM, yM, vX, vY, 40);
    
        //añado la nueva pelota al array de pelotas
        meteoritos.push(meteoritoNuevo02);
    }

    let setIntervalCrear02 = window.setInterval(crearMeteorito02(), dT);

    function moverYDibujarMeteorito02(){
        ctx.clearRect(0,0, 1300, 529);
        for (Meteorito of meteoritos){
            Meteorito.moverse();
            Meteorito.dibujarse();
        }
    }

    let setIntervalMyD02 = window.setInterval(moverYDibujarMeteorito02, dT);



    function Victoria(){
        alert(`Has salvado la tierra! Los meteoritos que acechaban el planeta han sido destruídos pero si quieres volver a ser un éroe oprime aceptar y comenzaremos de nuevo.`)
        
        score = 5;
        document.getElementById('lbScore').innerHTML = score
        nivel = "01"
        document.getElementById('lbNivel').innerHTML = nivel
        Nivel01();
        
    }


    function AlertaEncuentro() {
        //Alertar que el jugador ha logrado destruir el meteorito
        //Ingresamos un mensaje a mostrar
        var mensaje = confirm("Has destruido un meteorito! Deseas pasar al siguiente nivel?");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            document.getElementById('lbScore').innerHTML = score
            nivel = "03"
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel03()
        }
        //Detectamos si el usuario denegó el mensaje
        else {
            alert(`Tu puntaje final fue ${score}`);
            score = 5;
            document.getElementById('lbScore').innerHTML = score
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel01();
        }
    }

    function AlertaFallo() {
        alert(`Tu disparo ha sido fallido. Sigue intentando!`)
        document.getElementById('lbScore').innerHTML = score;
        document.getElementById('lbNivel').innerHTML = nivel;
        Nivel02();
    }

    function disparoBala(){
        let vYB = -200; // en px/s

        function movimientoBala(){  //animacion de pelotita hacia arriba (disparo)
            
            let dY = (dTB/1000) * vYB;
            y = y + dY;
            dibujarBala(x, y, r, RandomColor);


            //Encuentro meteorito con la bala

            let distanciaMyB = Math.sqrt(Math.pow(Meteorito.xM - x, 2) + Math.pow((Meteorito.yM - y), 2)); //teorema pitagoras para encontrar distancia entre Meteorito y Bala

            if(distanciaMyB <= 35){
                console.log(`Bala y meteorito se han encontrado y la distancia es: ${distanciaMyB}`);
                score = score + 5;
                if(score >= 21){
                    Victoria();
                } else{
                    console.log (`score: ${score}`)

                    meteoritos.splice(0,1);

                    clearInterval(setIntervalCrear02);
                    clearInterval(setIntervalMyD02);
                    clearInterval(disparo);

                    ctx.clearRect(0,0, 1300, 600);
                    AlertaEncuentro()
                }
                
            } if(y==0){
                meteoritos.splice(0,1);

                clearInterval(setIntervalCrear02);
                clearInterval(setIntervalMyD02);
                clearInterval(disparo);

                score = score - 1;
                console.log (`score: ${score}`)
                ctx.clearRect(0,0, 1300, 600);
                AlertaFallo();
            }
        }

        let disparo = setInterval(movimientoBala, dT);
    }

    window.onkeydown = function(event){
    
        if (event.code == "ArrowRight")
        {
            movimientoNaveDerecha()
        } if (event.code == "ArrowLeft")
        {
            movimientoNaveIzquierda()
        } if (event.code == "Space"){
            disparoBala()
        }
    }
    
    function movimientoNaveDerecha(){
        ctx.clearRect(0,0, 1300, 600);
        x = x+20
        xN = xN+20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
    
    function movimientoNaveIzquierda(){
        ctx.clearRect(0,0, 1300, 600);
        x = x-20;
        xN = xN-20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
}

function Nivel03(){

    //MOLDE para crear meteoritos
    class Meteorito{
        constructor(xM, yM, vX, vY, rM){
            this.xM = xM;// la coordenada x del centro de ESTA pelota
            this.yM = yM;
            this.vX = vX;
            this.vY = vY;
            this.rM  = rM;
        }
        moverse(){
            if (10 > this.yM){
                this.vY = Math.abs(this.vY)
            }
            if (400 < this.yM){
                this.vY = -Math.abs(this.vY)
            } 
            if (10 > this.xM){
                this.vX = Math.abs(this.vX)
            }
            if (1300 < this.xM){
                this.vX = -Math.abs(this.vX)
            }
            
            let dX = dT/1000 *this.vX;
            let dY = dT/1000 *this.vY;
            this.xM = this.xM + dX;
            this.yM = this.yM + dY;
        }
        dibujarse(){
            ctx.strokeStyle = '#441F02'
            ctx.fillStyle = '#441F02'

            ctx.beginPath()
            ctx.arc(this.xM,this.yM, this.rM, 0, 2*Math.PI);
            ctx.stroke()
            ctx.fill()
        }
        
    }

    let meteoritos = [] //Array de meteoritos

    let xN = 275;
    let yN = 580;
    let dTB = 10;
    let r = 5

    let x = 375;
    let y = 534;


    dibujarNave(xN, yN)
    dibujarBala(x, y, r, RandomColor)
    //MovimientoMeteorito()

    console.log (`score: ${score}`)

    function crearMeteorito03(){
        //meteoritos.splice(0, 1);

        let xM = 30;
        let yM = 200;
        let vX = 200;
        let vY = 300*Math.random() - 100;

        let meteoritoNuevo03 = new Meteorito(xM, yM, vX, vY, 40);
    
        //añado la nueva pelota al array de pelotas
        meteoritos.push(meteoritoNuevo03);
    }

    let setIntervalCrear03 = window.setInterval(crearMeteorito03(), dT);

    function moverYDibujarMeteorito(){
        ctx.clearRect(0,0, 1300, 529);
        for (Meteorito of meteoritos){
            Meteorito.moverse();
            Meteorito.dibujarse();
        }
    }

    let setIntervalMyD03 =window.setInterval(moverYDibujarMeteorito, dT);



    function Victoria(){
        alert(`Has salvado la tierra! Los meteoritos que acechaban el planeta han sido destruídos pero si quieres volver a ser un éroe oprime aceptar y comenzaremos de nuevo.`)
        
        score = 5;
        document.getElementById('lbScore').innerHTML = score
        nivel = "01"
        document.getElementById('lbNivel').innerHTML = nivel
        Nivel01();
        
    }

    function AlertaEncuentro() {
        //Alertar que el jugador ha logrado destruir el meteorito
        //Ingresamos un mensaje a mostrar
        var mensaje = confirm("Has destruido un meteorito! Deseas pasar al siguiente nivel?");
        //Detectamos si el usuario acepto el mensaje
        if (mensaje) {
            document.getElementById('lbScore').innerHTML = score
            nivel = "04"
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel04()
        }
        //Detectamos si el usuario denegó el mensaje
        else {
            alert(`Tu puntaje final fue ${score}`);
            score = 5;
            document.getElementById('lbScore').innerHTML = score
            document.getElementById('lbNivel').innerHTML = nivel
            Nivel01();
        }
    }

    function AlertaFallo() {
        alert(`Tu disparo ha sido fallido. Sigue intentando!`)
        document.getElementById('lbScore').innerHTML = score;
        document.getElementById('lbNivel').innerHTML = nivel;
        Nivel03();
    }

    function disparoBala(){
        let vYB = -200; // en px/s

        function movimientoBala(){  //animacion de pelotita hacia arriba (disparo)
            
            let dY = (dTB/1000) * vYB;
            y = y + dY;
            dibujarBala(x, y, r, RandomColor);


            //Encuentro meteorito con la bala

            let distanciaMyB = Math.sqrt(Math.pow(Meteorito.xM - x, 2) + Math.pow((Meteorito.yM - y), 2)); //teorema pitagoras para encontrar distancia entre Meteorito y Bala

            if(distanciaMyB <= 35){
                console.log(`Bala y meteorito se han encontrado y la distancia es: ${distanciaMyB}`);
                score = score + 5;
                if(score >= 21){
                    Victoria();
                } else{
                    console.log (`score: ${score}`)

                    meteoritos.splice(0,1);

                    clearInterval(setIntervalCrear03);
                    clearInterval(setIntervalMyD03);
                    clearInterval(disparo);

                    ctx.clearRect(0,0, 1300, 600);
                    AlertaEncuentro()
                }
                
            } if(y==0){
                meteoritos.splice(0,1);

                clearInterval(setIntervalCrear03);
                clearInterval(setIntervalMyD03);
                clearInterval(disparo);

                score = score - 1;
                console.log (`score: ${score}`)
                ctx.clearRect(0,0, 1300, 600);
                AlertaFallo();
            }
        }

        let disparo = setInterval(movimientoBala, dT);
    }

    window.onkeydown = function(event){
    
        if (event.code == "ArrowRight")
        {
            movimientoNaveDerecha()
        } if (event.code == "ArrowLeft")
        {
            movimientoNaveIzquierda()
        } if (event.code == "Space"){
            disparoBala()
        }
    }
    
    function movimientoNaveDerecha(){
        ctx.clearRect(0,0, 1300, 600);
        x = x+20
        xN = xN+20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
    
    function movimientoNaveIzquierda(){
        ctx.clearRect(0,0, 1300, 600);
        x = x-20;
        xN = xN-20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
}

function Nivel04(){

    //MOLDE para crear meteoritos
    class Meteorito{
        constructor(xM, yM, vX, vY, rM){
            this.xM = xM;// la coordenada x del centro de ESTA pelota
            this.yM = yM;
            this.vX = vX;
            this.vY = vY;
            this.rM  = rM;
        }
        moverse(){
            if (10 > this.yM){
                this.vY = Math.abs(this.vY)
            }
            if (400 < this.yM){
                this.vY = -Math.abs(this.vY)
            } 
            if (10 > this.xM){
                this.vX = Math.abs(this.vX)
            }
            if (1300 < this.xM){
                this.vX = -Math.abs(this.vX)
            }
            
            let dX = dT/1000 *this.vX;
            let dY = dT/1000 *this.vY;
            this.xM = this.xM + dX;
            this.yM = this.yM + dY;
        }
        dibujarse(){
            ctx.strokeStyle = '#441F02'
            ctx.fillStyle = '#441F02'

            ctx.beginPath()
            ctx.arc(this.xM,this.yM, this.rM, 0, 2*Math.PI);
            ctx.stroke()
            ctx.fill()
        }
        
    }

    let meteoritos = [] //Array de meteoritos

    let xN = 275;
    let yN = 580;
    let dTB = 10;
    let r = 5

    let x = 375;
    let y = 534;

    dibujarNave(xN, yN)
    dibujarBala(x, y, r, RandomColor)
    //MovimientoMeteorito()

    console.log (`score: ${score}`)

    function crearMeteorito04(){
        //meteoritos.splice(0, 1);

        let xM = 1300;
        let yM = 200;
        let vX = -100;
        let vY = 10*Math.random() - 20;

        let meteoritoNuevo04 = new Meteorito(xM, yM, vX, vY, 40);
    
        //añado la nueva pelota al array de pelotas
        meteoritos.push(meteoritoNuevo04);
    }

    let setIntervalCrear04 = window.setInterval(crearMeteorito04(), dT);

    function moverYDibujarMeteorito04(){
        ctx.clearRect(0,0, 1300, 529);
        for (Meteorito of meteoritos){
            Meteorito.moverse();
            Meteorito.dibujarse();
        }
    }

    let setIntervalMyD04 = window.setInterval(moverYDibujarMeteorito04, dT);



    function Victoria(){
        alert(`Has salvado la tierra! Los meteoritos que acechaban el planeta han sido destruídos pero si quieres volver a ser un éroe oprime aceptar y comenzaremos de nuevo.`)
        location.reload();
    }


    function AlertaEncuentro() {
        alert("Has destruido un meteorito! Pero te demoraste mucho, tendrás que comezar de nuevo :'/");
        location.reload();
    }

    function AlertaFallo() {
        alert(`Tu disparo ha sido fallido. Sigue intentando!`)
        document.getElementById('lbScore').innerHTML = score;
        document.getElementById('lbNivel').innerHTML = nivel;
        Nivel04();
    }

    function disparoBala(){
        let vYB = -200; // en px/s

        function movimientoBala(){  //animacion de pelotita hacia arriba (disparo)
            
            let dY = (dTB/1000) * vYB;
            y = y + dY;
            dibujarBala(x, y, r, RandomColor);


            //Encuentro meteorito con la bala

            let distanciaMyB = Math.sqrt(Math.pow(Meteorito.xM - x, 2) + Math.pow((Meteorito.yM - y), 2)); //teorema pitagoras para encontrar distancia entre Meteorito y Bala

            if(distanciaMyB <= 35){
                console.log(`Bala y meteorito se han encontrado y la distancia es: ${distanciaMyB}`);
                score = score + 5;
                if(score >= 21){
                    Victoria();
                } else{
                    console.log (`score: ${score}`)

                    meteoritos.splice(0,1);

                    clearInterval(setIntervalCrear04);
                    clearInterval(setIntervalMyD04);
                    clearInterval(disparo);

                    ctx.clearRect(0,0, 1300, 600);
                    AlertaEncuentro()
                }
                
            } if(y==0){
                meteoritos.splice(0,1);

                clearInterval(setIntervalCrear04);
                clearInterval(setIntervalMyD04);
                clearInterval(disparo);

                score = score - 1;
                console.log (`score: ${score}`)
                ctx.clearRect(0,0, 1300, 600);
                AlertaFallo();
            }
        }

        let disparo = setInterval(movimientoBala, dT);
    }

    window.onkeydown = function(event){
    
        if (event.code == "ArrowRight")
        {
            movimientoNaveDerecha()
        } if (event.code == "ArrowLeft")
        {
            movimientoNaveIzquierda()
        } if (event.code == "Space"){
            disparoBala()
        }
    }
    
    function movimientoNaveDerecha(){
        ctx.clearRect(0,0, 1300, 600);
        x = x+20
        xN = xN+20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
    
    function movimientoNaveIzquierda(){
        ctx.clearRect(0,0, 1300, 600);
        x = x-20;
        xN = xN-20;
        dibujarNave(xN, yN)
        dibujarBala(x, y, r, RandomColor)
    }
}



function dibujarMeteorito(xM, yM, rM){
    ctx.strokeStyle = '#441F02'
    ctx.fillStyle = '#441F02'

    ctx.beginPath()
    ctx.arc(xM,yM, rM, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()
}

function dibujarBala(x, y, r, RandomColor){
    ctx.strokeStyle = RandomColor
    ctx.fillStyle = RandomColor;

    ctx.beginPath()
    ctx.arc(x,y, r, 0, 2*Math.PI);
    ctx.stroke()
    ctx.fill()
}

function dibujarNave(xN, yN){
    ctx.strokeStyle = 'grey'
    ctx.fillStyle = 'black'

    ctx.beginPath() // base navecita
    ctx.moveTo(xN,yN)
    ctx.lineTo(xN+10, yN-20)
    ctx.lineTo(xN+110, yN-20)
    ctx.lineTo(xN+120, yN)
    ctx.lineTo(xN,yN)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath() // propulsor izq
    ctx.rect(xN+7,yN,15,10)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath() // propulsor derecho
    ctx.rect(xN+97,yN,15,10)
    ctx.stroke()
    ctx.fill()

    ctx.beginPath() // "cabeza" de la nave
    ctx.moveTo(xN+20,yN-20)
    ctx.lineTo(xN+20, yN-30) //a
    ctx.lineTo(xN+30, yN-50) //b
    ctx.lineTo(xN+80, yN-50) //c
    ctx.lineTo(xN+90, yN-30) //d
    ctx.lineTo(xN+90, yN-20)
    ctx.stroke()
    ctx.fill()

    ctx.fillStyle = '#393939'
    ctx.beginPath() // ventana navecita
    ctx.moveTo(xN+30, yN-20)
    ctx.lineTo(xN+30, yN-30) //a
    ctx.lineTo(xN+35, yN-40) //b
    ctx.lineTo(xN+75, yN-40) //c
    ctx.lineTo(xN+80, yN-30) //d
    ctx.lineTo(xN+80, yN-20)
    ctx.lineTo(xN+30, yN-20)
    ctx.stroke()
    ctx.fill()
    

    ctx.beginPath() // disparador derecho
    ctx.rect(xN+95,yN-45,10,25)
    ctx.stroke()
    ctx.fill()    
}