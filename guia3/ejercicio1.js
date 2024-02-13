// Hacer un programa que solicite el ingreso de un número y que luego emita un
// cartel por pantalla aclarando si el mismo es múltiplo de 5.

let num = parseInt(prompt('Ingrasar un numero: '));

if(num % 5 === 0) {
    alert('El numero es múltiplo de 5');
} else {
    alert('El numero no es múltiplo de 5');
}