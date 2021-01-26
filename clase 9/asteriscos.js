let ancho;
let alto;
do {
  ancho = parseFloat(prompt("Ingrese el ancho"));
} while (isNaN(ancho) || ancho < 1);

do {
  alto = parseFloat(prompt("Ingrese el alto"));
} while (isNaN(alto) || alto < 1);


let nLinea = 0;

while (nLinea < alto) {
    let linea = "";
    let nColumna = 0;
    while(nColumna < ancho){
        linea = linea + "*";
        nColumna = nColumna + 1;        
    }    
    console.log(linea);
    nLinea = nLinea + 1;
}  

console.log("");
nLinea = 1;

while (nLinea <= alto) {
  let linea = "";
  let nColumna = 1;
  while (nColumna <= ancho){
   if ((nLinea == 1) || (nLinea == alto)){
    linea = linea + "*";
   } else {
     if ((nColumna == 1) || (nColumna == ancho)){
      linea = linea + "*";
      } else {
      linea = linea + " ";
      }
    }
   
  nColumna = nColumna + 1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while (nColumna < (nLinea + ancho)){
    while (nColumna < nLinea){
      linea = linea + " ";
      nColumna= nColumna +1;
    }
    linea = linea + "*";
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while (nColumna < nLinea){
    linea = linea + " ";
    nColumna= nColumna +1;
  }

  while (nColumna < ancho){
    linea = linea + "*";
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while (nColumna <= nLinea){
    linea = linea + "*";
    nColumna= nColumna +1;
  }

  while (nColumna < ancho){
    linea = linea + " ";
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while ((nLinea == 0) && (nColumna < ancho)){
    linea = linea + "*";
    nColumna = nColumna +1;
  }

  while (nColumna < ancho){
    while (nColumna < nLinea){
      linea = linea + " ";
      nColumna= nColumna +1;
    }
    if ((nColumna == nLinea) || (nColumna == (ancho-1))){
      linea = linea + "*";
    } else {
      linea = linea + " ";
    }
    
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while (nColumna <= nLinea){
    if ((nColumna == nLinea) || (nLinea == (alto-1)) || (nColumna == 0)){
      linea = linea + "*";
    } else {
      linea = linea + " ";
    }
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if ((nLinea == (ancho - (nColumna+1))) || (nColumna==0) || (nLinea == 0)) {
      linea = linea + "*";
    } else {
      linea = linea + " ";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
    let linea = "";
    let nColumna = 0;
    while (nColumna < ancho) {
      if (nLinea == (ancho - (nColumna+1))) {
        linea = linea + " ";
      } else {
        linea = linea + "*";
      }
      nColumna = nColumna + 1;
    }
    console.log(linea);
    nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if (nLinea == nColumna) {
      linea = linea + " ";
    } else {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if ((nLinea == nColumna) || (nLinea == (ancho - (nColumna+1)))){
      linea = linea + "*";
    } else {
      linea = linea + " ";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;
// intento fallido para hacer el "hollow square star pattern with diagonal"
while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;
  while (nColumna < ancho) {
    if ((nLinea == nColumna) || (nLinea == (ancho - (nColumna+1)))){
      linea = linea + " ";
    } else {
      linea = linea + "*";
    }
    nColumna = nColumna + 1;
  }
  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;
// intento fallido para hacer el "hollow mirrored inverted right triangle star pattern"
while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while ((nLinea == 0) && (nColumna < ancho)){
    linea = linea + "*";
    nColumna = nColumna +1;
  }

  while (nColumna <= nLinea){
    if (nColumna == nLinea) {
      linea = linea + "*";
    } else {
      linea = linea + " ";
    }
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}

console.log("");
nLinea = 0;

while (nLinea < alto) {
  let linea = "";
  let nColumna = 0;

  while (nColumna < (nLinea + ancho)){
    while (nColumna < nLinea){
      linea = linea + " ";
      nColumna= nColumna +1;
    }
    linea = linea + "*";
    nColumna= nColumna +1;
  }

  console.log(linea);
  nLinea = nLinea + 1;
}