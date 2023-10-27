function calcularNumeros(){
let n = document.getElementById("numero").value;
let resultado = document.getElementById("resultado");
    resultado.innerHTML = "Los primeros " + n +" números de la secuencia son: ";

let a = 1;
let b = 0;
let c = 0;

for (let index = 0; index <n; index++) {
    c= a+b;
    a = b;
    b = c;
    //Se muestra el resultado de la secuencia n veces
    resultado.innerHTML += a + ", ";
    
}
}