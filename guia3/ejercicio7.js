// Hacer un programa para ingresar 4 números. Luego analizar e informar por
// pantalla si los mismos se encuentran ordenados de forma decreciente.

let n = parseInt(prompt('Ingresar un numero'));
let n2 = parseInt(prompt('Ingresar otro numero'));
let n3 = parseInt(prompt('Ingresar otro numero'));
let n4 = parseInt(prompt('Ingresar otro numero'));

if(n > n2 && n2 > n3 && n3 > n4) {
    console.log('Estan ordenados');
} else {
    console.log('No están ordenados');
}