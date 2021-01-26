// let total= 0;
// let sumando=1;

// while(sumando <=100) {
//    console.log(`total:${total}, sumando:${sumando}`);
//    total= total + sumando
//    sumando= sumando + 1;
//}

// console.log(`la suma es:${total}`)

// codigo usando el while
let total= 0;
let sumando= 1;

while(sumando <=100) {
    console.log(`total:${total}, sumando:${sumando*sumando}`);
    total= total + sumando * sumando;
    sumando= sumando + 1;
}

console.log(`la suma de los cuadrados es:${total}`)


// pedirle input al usuario usando do-while
let numero;

do{
    numero= parseFloat(prompt("Ingrese un número"));
}while(isNaN(numero) || numero <0);

console.log (`la raiz cuadrada es :${Math.sqrt(numero)}`);