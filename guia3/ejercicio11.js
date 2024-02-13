// Hacer un programa para ingresar tres números y luego mostrarlos ordenados
// de menor a mayor.

let num = parseInt(prompt('Ingresar un numero: '));
let num2 = parseInt(prompt('Ingresar un numero: '));
let num3 = parseInt(prompt('Ingresar un numero: '));

if(num < num2 && num < num3) {
    if(num2 < num3) {
        console.log(num, num2, num3);
    } else if(num3 < num2) {
        console.log(num, num3, num2);
    }
}  else if(num2 < num && num2 < num3) {
    if(num < num3) {
        console.log(num2, num, num3);
    } else {
        console.log(num2, num3, num);
    }
} else if(num3 < num && num3 < num2) {
    if(num < num2) {
        console.log(num3, num, num2);
    } else {
        console.log(num3, num2, num);
    }
}