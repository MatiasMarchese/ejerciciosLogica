// Hacer un programa que solicite UN número y luego calcule y emita un cartel
// aclaratorio si el mismo es primo o no es primo.
// Nota: un numero es primo cuando es divisible únicamente por 1 y por sí
// mismo.

let n = 7;
let counter = 0;

for(let i = 0; i <= n; i++) {
    if(n % i === 0) {
        counter++;
    }
}

if(counter === 2) {
    console.log(`${n} es primo`);
} else {
    console.log(`${n} no es primo`);
}