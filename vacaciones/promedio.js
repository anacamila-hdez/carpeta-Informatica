function promedio(elementos){
    let i=0;
    let suma=0;
    let longitud = elementos.length;

    do{
        suma= suma+elementos[i];
        i=i+1;
    }while (i<longitud)

    return(suma/longitud);
}
