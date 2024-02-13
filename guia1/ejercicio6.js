// Hacer un programa para ingresar por teclado las tres notas de exámenes de un
// alumno y luego calcule y emita por pantalla el promedio final.

let nota1 = parseInt(prompt('Ingresar la nota 1'));
let nota2 = parseInt(prompt('Ingresar la nota 2'));
let nota3 = parseInt(prompt('Ingresar la nota 3'));

let sumaTotal = nota1 + nota2 + nota3;
let promedio = sumaTotal / 3;

console.log('Promedio: ', promedio);