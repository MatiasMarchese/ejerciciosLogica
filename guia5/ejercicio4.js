// Hacer un programa que solicite dos números y luego muestre los números
// entre el menor y el mayor de ellos. Acordate, usando While.

let n = parseInt(prompt('Ingresar un numero: '));
let n2 = parseInt(prompt('Ingresar otro numero: '));

let max = -Infinity;
let min = Infinity;

if(n > max) {
    if(n2 > n) {
        max = n2;
        min = n;
    } else {
        max = n;
        min = n2;
    }
}

while(min < max - 1) {
    console.log(min + 1)
    min++;
}