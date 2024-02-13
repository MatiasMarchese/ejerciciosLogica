// Hacer un programa para ingresar dos números. Si el segundo es distinto de
// cero, calcular la división del primero por el segundo y mostrar el resultado por
// pantalla; caso contrario, emitir un cartel aclarando que no se puede dividir por
// cero.

let n = parseInt(prompt('Ingresar un numero'));
let n2 = parseInt(prompt('Ingresar otro numero'));

if(n2 !== 0) {
    let division = n / n2;
    alert(`${n} / ${n2} = ${division}`);
} else {
    alert('No se puede dividir por cero');
}