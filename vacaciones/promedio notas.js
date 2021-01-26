let cantidad;
let suma=0;
let notas = new Array;
let i = 0;

do{
    cantidad= parseFloat(prompt("Ingrese la cantidad de notas que va a cargar"));
}while(isNaN(cantidad) || cantidad <0);

do{
    do {
        nota= parseFloat(prompt("Ingrese la nota"));
    }while (isNaN(nota) || nota <0 || nota >10)
    
    notas.push(nota);
    suma = suma + nota;
    i = i + 1;
    
}while (i<cantidad);

console.log(notas);
console.log(`Su promedio es: ` + suma/cantidad);