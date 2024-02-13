// Hacer un programa para ingresar por teclado los metros cuadrados totales de
// un predio y los metros cuadrados cubiertos; luego calcular y mostrar por
// pantalla el porcentaje de metros cuadrados cubiertos y el porcentaje de
// metros cuadrados descubiertos.

let metrosTotales = parseInt(prompt('Ingresar los metros cuadrados totales'));
let metrosCubiertos = parseInt(prompt('Ingresar los metros cuadrados cubiertos'));
let metrosDescubiertos = metrosTotales - metrosCubiertos;
let porcentajeCubierto = (metrosCubiertos / metrosTotales) * 100;
let porcentajeDescuebierto = 100 - porcentajeCubierto;

console.log('Porcentaje cubierto: ', porcentajeCubierto);
console.log('Porcentaje descubierto: ', porcentajeDescuebierto);
console.log('Porcentaje total: ', porcentajeCubierto + porcentajeDescuebierto);