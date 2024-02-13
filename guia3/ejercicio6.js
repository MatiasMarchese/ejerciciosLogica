// Hacer un programa para ingresar por teclado la longitud de los tres lados de un
// triángulo y que luego determine e informe con un cartel aclaratorio a qué tipo
// de triángulo corresponde:
// a. Equilátero: cuando los tres lados sean iguales.
// b. Isósceles: cuando dos de los tres lados sean iguales.
// c. Escaleno: cuando todos los lados sean distintos.

let lado1 = parseInt(prompt('Ingrese el lado 1'));
let lado2 = parseInt(prompt('Ingrese el lado 2'));
let lado3 = parseInt(prompt('Ingrese el lado 3'));

if(lado1 === lado2 && lado2 === lado3) {
    console.log('Triángulo equilatero');
} else if(lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
    console.log('Triangulo isósceles');
} else if(lado1 !== lado2 && lado2!== lado3 && lado1!== lado3) {
    console.log('Triangulo escaleno');
}