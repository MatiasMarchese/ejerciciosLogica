// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el máximo de ellos y la posición
// en la que fue ingresado.

let max = -Infinity;
let n = parseInt(prompt('Ingresar un numero: '));
let index = 0;

while(n !== 0) {
    index++;
    
    if(n > max) {
        max = n;
    }
    
    n = parseInt(prompt('Ingresar un numero: '));
}

console.log(`El mayor numero es ${max} y esta en la posición ${index}`)