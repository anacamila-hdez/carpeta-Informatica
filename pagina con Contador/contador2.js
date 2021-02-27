let contador = JSON.parse(localStorage.getItem("contador"))

if (contador == null){
    localStorage.setItem("contador",0)
} else{
    suma();
}


function suma(){
    contador = contador + 1;
    localStorage.setItem("contador", contador);
    console.log(contador);
}

alert(`usted ha ingresado ${contador} veces`)