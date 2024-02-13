// Hacer un programa que solicite UN número y luego calcule y emita un cartel
// aclaratorio si el mismo es primo o no es primo.
// Nota: usando While

let n = parseInt(prompt('Ingresar un numero: '));
let i = 0;

let count = 0;

while(i <= n) {

    if(n % i === 0) {
        count++
    }

    if(i === n ) {
        if(count === 2) {
            console.log(`El numero ${n} es primo`);
        } else {
            console.log(`El numero ${n} no es primo`);
        }
    } 

    i++;
}