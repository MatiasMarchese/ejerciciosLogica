// Un importante negocio de desinfectante líquido realiza descuentos
// dependiendo de la cantidad de litros vendidos según la siguiente escala:
// a. Si vende menos de 100 litros, no hay descuento.
// b. Si vende entre 101 y 300 litros, el descuento es del 10%.
// c. Si vende entre 301 y 500 litros, el descuento es del 15%.
// d. Finalmente, si la venta es de más de 500 litros, el descuento es del 25%.
// Hacer un programa que solicite el ingreso del importe total de la venta y la
// cantidad de litros vendidos y calcule y emita el importe con el descuento
// aplicado.

let importe = parseInt(prompt('Ingresa el importe de la venta'));
let litros = parseInt(prompt('Ingresa la cantidad de litros vendidos'));

if(litros > 500) {
    let descuento = importe * 0.25;
    let precioFinal = importe - descuento;
    console.log('Precio final: $', precioFinal);
} else if(litros > 300) {
    let descuento = importe * 0.15;
    let precioFinal = importe - descuento;
    console.log('Precio final: $', precioFinal);
} else if(litros > 100) {
    let descuento = importe * 0.10;
    let precioFinal = importe - descuento;
    console.log('Precio final: $', precioFinal);
} else {
    console.log('No hay descuento');
}