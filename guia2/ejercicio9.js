// Hacer un programa para ingresar cinco números distintos y luego mostrar por
// pantalla el mayor y el menor de ellos.

let num = 5;
let num2 = 10;
let num3 = 0;
let num4 = 8;
let num5 = 6;

let min = Infinity;
let max = -Infinity;

if(num > num2) {
    max = num;
    min = num2;
} else {
    max = num2;
    min = num;
}

if(num3 > max) {
    max = num3;
} else if(num3 < min) {
    min = num3;
}

if(num4 > max) {
    max = num4;
} else if(num4 < min) {
    min = num4;
}

console.log('El mayor es: ' + max + ' y el menor es: ' + min);