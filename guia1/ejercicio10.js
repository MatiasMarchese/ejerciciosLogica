// Hacer un programa que permita ingresar por teclado dos números y que luego
// muestre por pantalla la suma, la resta, la multiplicación y la división de dichos
// números. Se deben mostrar cuatro resultados en pantalla. Los números deben
// ser solicitados una única vez.

let n = parseInt(prompt('Ingresar un numero:'));
let n2 = parseInt(prompt('Ingresar otro numero:'));

let suma = n + n2;
let resta = n - n2;
let multiplicacion = n * n2;    
let division = n / n2;

console.log(suma, resta, multiplicacion, division);