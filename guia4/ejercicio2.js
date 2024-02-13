// Hacer un programa que solicite 20 números y calcule y emita por pantalla
// cuántos son positivos (mayores a cero). Se debe mostrar un solo valor: el
// conteo final.

let min;
let count = 0;

for(let i = 0; i < 20; i++) {
    let n = parseInt(prompt('Ingresar un numero: '));
    if(n > 0) {
        count++;
    }

    if(i === 19) {
        console.log(count, ' numeros son mayores que 0');
    }
}