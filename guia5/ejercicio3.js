// Hacer un programa que solicite la edad de un grupo de personas. El programa
// deberá pedir edades hasta que se ingrese una edad menor a 18 años. Deberá
// mostrar por pantalla cuántas personas mayores se registraron.

let age = parseInt(prompt('Ingresar edades: '));
let count = 0;

while(age >= 18) {
    count++;
    age = parseInt(prompt('Ingresar edades: '));
}

console.log('Personas mayores a 18 años: ', count);