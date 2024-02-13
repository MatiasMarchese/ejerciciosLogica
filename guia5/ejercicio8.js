// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego mostrar por pantalla el menor y el segundo menor.

let min = Infinity;
let secondMin = Infinity;

let n = parseInt(prompt('Ingresar numero'));

while(n !== 0) {
    if(n < min) {
        min = n;
    }

    if(n > min && n < secondMin) {
        secondMin = n;
    }

    n = parseInt(prompt('Ingresar un numero: '));
}


console.log(`Èl menor es ${min} y el segundo menor es ${secondMin}`);