let masa;
let estatura;

do{
    masa= parseFloat(prompt("Ingrese su masa corporal en kilogramos (kg)."));
}while(isNaN(masa) || masa <=0);

do{
    estatura= parseFloat(prompt("Ingrese su estatura en metros(m)."));
}while(isNaN(estatura) || estatura <=0);

let BMI= masa/(estatura*estatura);

if(BMI<18.50){
    alert(`Su BMI es ${BMI}, lo que indica que su peso está bajo de peso`);
} else if(BMI>=18.5 & BMI<=24.99){
    alert(`Su BMI es ${BMI}, lo que indica que su peso está en la categoría Normal`);
} else if (BMI>=25.00 & BMI<30.00){
    alert(`Su BMI es ${BMI}, lo que indica que su peso está en Sobrepeso`);
} else if (BMI>=30.00){
    alert(`Su BMI es ${BMI}, lo que indica que su peso está en Obesidad`);
}
