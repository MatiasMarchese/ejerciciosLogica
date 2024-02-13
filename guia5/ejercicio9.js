// Realizar el nuevamente el ejercicio 8 pero ahora debe devolver además la
// posición en la que fue encontrado cada uno de los mínimos.

let min = Infinity;
let secondMin = Infinity;

let index = 0;

let indexMin = 0;
let indexSecondMin = 0;

let n = parseInt(prompt('Ingresar numero: '));

while(n !== 0) {
    if(n < min) {
        min = n;
        indexMin = index;
    }

    if(n > min && n < secondMin) {
        secondMin = n;
        indexSecondMin = index;
    }

    index++;
    n = parseInt(prompt('Ingresar numero'));
}

console.log(`El menor es ${min} y está en la posición ${indexMin}`);
console.log(`El segundo menos es ${secondMin} y está en la posición ${indexSecondMin}`);