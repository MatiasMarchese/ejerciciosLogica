// Hacer un programa que solicite 10 números y luego mostrar por pantalla el
// máximo de ellos y la posición en la que fue ingresado.

let max = -Infinity;
let index = 0;

for(let i = 0; i < 10; i++) {
    let n = parseInt(prompt('Ingresar un numero:'))
    
    if(n > max) {
        max = n;
        index = i;
    }
}

console.log(`El numero mas grande es ${max} y fue ingresado en la posicion ${index}`);