let a = parseFloat (prompt ("Ingrese el valor de a"));
let b = parseFloat (prompt ("Ingrese el valor de b"));

if(b==0)
{
    alert("No es posible calcular la división y el módulo ya que el valor de b es igual a 0")
}

alert(`el resultado de la suma es: ${a + b},
el resultado de la resta es: ${a - b},
el resultado de la multiplicación es: ${a * b},
el resultado de la división es: ${a / b},
el resultado del módulo es: ${a % b}`);
