// Una casa de video juegos otorga un descuento dependiendo del importe de la
// compra realizada según los siguientes valores:
// • Si el importe es menor a ARS 1000, no hay descuento.
// • Si el importe es ARS 1000 o más pero menor a ARS 5000, aplica un
// descuento del 10%.
// • Si el importe es ARS 5000 o más, aplica un descuento del 18%.
// Hacer un programa para ingresar un importe de venta y luego muestre por
// pantalla el importe final con el descuento que corresponda.

let importe = parseInt(prompt('Ingresar el importe'));

if(importe > 1000) {
    if(importe < 5000) {
        let descuento = importe * 0.10;
        let precioFinal = importe - descuento;
        console.log('Precio final: $', precioFinal);
    }
} else if(importe >= 5000) {
    let descuento = importe * 0.18;
    let precioFinal = importe - descuento;
    console.log('Precio final: $', precioFinal)
} else {
    console.log('Precio final: $', importe);
}