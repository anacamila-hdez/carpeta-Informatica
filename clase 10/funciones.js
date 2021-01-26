function areaCirc(r){
    return r * 2 * Math.PI;
}

function volEsfera(r){
    return Math.pow(r,3) * 4/3 * Math.PI;
}

function max(a,b){
    if(a>=b){
        return a
    } else {
        return b
    }
}

function masLarga(palabra1,palabra2){
    if(palabra1.length >= palabra2.length){
        return palabra1;
    } else {
        return palabra2;
    }
}

function imprimirMasLarga(palabra1,palabra2){
    if(palabra1.length >= palabra2.length){
        console.log(palabra1);
    } else {
        console.log(palabra2);
    }
}

function fibonacci(n){
    if (n==0){
        return 0;
    } if(n==1){
        return 1;
    } else {
        return fibonacci (n-1) + fibonacci (n-2);
    }
}