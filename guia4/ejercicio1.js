
// Hacer un programa que solicite el ingreso de 10 números y que muestre el
// mayor de ellos por pantalla. Solo se debe emitir UN valor por pantalla.

let max = -Infinity;
let i = 0;

while(i < 10) {
    let n = parseInt(prompt('Ingresar un numero: '));
    if(n > max) {
        max = n;
    }

    i++;

    if(i === 10) {
        console.log('El numero mas grande es : ', max);
    }
}

// for(let i = 0; i < 10; i++) {
//     let n = parseInt(prompt('Ingresar un numero: '));

//     if(n > max) {
//         max = n;
//     }

//     if(i === 9) {
//         console.log('El numero mas grande es ' + max);
//     }
// }