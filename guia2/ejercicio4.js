// Hacer un programa para ingresar un número y luego se emita un cartel por
// pantalla “Positivo” si el número es mayor a cero, “Negativo” si el número es
// menor a cero o “Cero” si el número es igual a cero.

let num = parseInt(prompt('Ingresar un numero:'));

if(num > 0) {
    console.log('Positivo');
} else if( num < 0) {
    console.log('Negativo');
} else {
    console.log('Cero');
}