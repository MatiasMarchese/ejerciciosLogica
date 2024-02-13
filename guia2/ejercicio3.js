// Hacer un programa para ingresar dos números y que luego emita por pantalla
// el mayor de ellos o un cartel aclaratorio “Son iguales” en el caso de que así sea.

let num = parseInt(prompt('Ingresar un numero:'));
let num2 = parseInt(prompt('Ingresar otro numero:'));

if(num > num2) {
    console.log(num);
} else if(num2 > num) {
    console.log(num2);
} else {
    console.log('Son iguales');
}