// Hacer un programa para ingresar cuatro números distintos y luego mostrar por
// pantalla el menor de ellos.

let num = 1;
let num2 = 5;
let num4 = 2;
let num5 = 4;

let min = Infinity;

if(num < min) {
    min = num;
} else if(num2 < min) {
    min = num2;
} else if(num3 < min) {
    min = num3;
} else if(num4 < min) {
    min = num4;
}

console.log('El menor es: ' + min);