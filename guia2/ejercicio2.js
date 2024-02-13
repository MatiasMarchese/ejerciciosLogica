// Hacer un programa para ingresar dos números distintos y luego se muestre por
// pantalla el menor de ellos.

let num = parseInt(prompt('Ingresar un numero:'));
let num2 = parseInt(prompt('Ingresar otro numero:'));

if(num < num2) {
    console.log(num);
} else {
    console.log(num2);
}