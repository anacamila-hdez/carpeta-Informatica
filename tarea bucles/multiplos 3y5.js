let suma = 0;
let i = 0;

while (i<=10000){
    if (i%3==0 & i%5==0){
        suma = suma + i
    }
    i = i + 1;
}

document.write(suma);