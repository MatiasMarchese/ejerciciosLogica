// Una importante cadena de delivery cuenta con una promoción por tiempo
// limitado en la que otorga un 15% de descuento sobre el total del valor de la
// compra realizada. Hacer un programa para solicitar el monto total y el mismo
// calcule y emita por pantalla el total a cobrar con el descuento aplicado.

const descuento = 0.15;
let total = parseInt(prompt('Ingresar el monto total'));
let descuentoTotal = total * descuento;
let precioFinal = total - descuentoTotal;

console.log('Precio final: $', precioFinal);