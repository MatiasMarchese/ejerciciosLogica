// Hacer un programa que solicite 20 números y luego emitir por pantalla el
// máximo de los números pares y el mínimo de los números impares.

let maxPares = -Infinity;
let minImpares = Infinity;

for(let i = 0; i < 10; i++) {
    let nums = parseInt(prompt('Ingresar numeros'));

    if((nums % 2 === 0) && (nums > maxPares)) {
        maxPares = nums;
    } else if((nums % 2 != 0) && (nums < minImpares)) {
        minImpares = nums;
    }
}

alert(`Maximo numero par ${maxPares}`);
alert(`Minimo numero impar ${minImpares}`);