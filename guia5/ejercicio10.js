// Hacer un programa que solicite una lista de números que corta cuando se
// ingresa un cero y luego emitir por pantalla el máximo de los números
// negativos y el mínimo de los números positivos.

let maxNegativos = -Infinity;
let minPositivos = Infinity;

let n = parseInt(prompt('Ingresar un numero: '));

while(n !== 0) {
    if(n < 0 && n > maxNegativos) {
        maxNegativos = n;
    }

    if(n > 0 && n < minPositivos) {
        minPositivos = n;
    }

    n = parseInt(prompt('Ingresar un numero'));
}

console.log(`Mayor negativo -> ${maxNegativos}`);
console.log(`Menor positivo -> ${minPositivos}`);