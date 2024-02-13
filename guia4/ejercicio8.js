// Hacer un programa que solicite 20 números y luego mostrar por pantalla el
// menor de ellos y la posición en la que fue encontrado.

let min = Infinity;
let index;

for(let i = 0; i < 20; i++) {
    let num = parseInt(prompt('Ingresar un numero'));

    if(num < min) {
        min = num;
        index = i;
    }
}

alert(`${index}: ${min}`);