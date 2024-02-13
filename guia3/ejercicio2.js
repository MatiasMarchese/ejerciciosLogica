// Hacer un programa que solicite el ingreso de dos números y luego calcular:
// a. La resta si el primero es mayor que el segundo.
// b. La suma si son iguales.
// c. El producto si el primero es menor.
// Se deberá emitir un cartel por pantalla con el resultado correspondiente.

let n = parseInt(prompt('Ingresar un numero'));
let n2 = parseInt(prompt('Ingresar otro numero'));

if(n > n2) {
    let resta = n - n2;
    alert('Resultado = ' + resta);
} else if(n === n2) {
    let suma = n + n2;
    alert('Resultado = ' + suma);
} else if(n < n2) {
    let producto = n * n2;
    alert('Resultado = ' + producto);
}