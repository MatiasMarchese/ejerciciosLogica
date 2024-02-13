// El negocio de desinfectante antes mencionado vende además detergente
// suelto, y los precios se aplican según la siguiente escala:
// a. 25 ARS por litro los primeros 50 litros.
// b. 20 ARS por litro si la venta es de 51 a 200 litros.
// c. 15 ARS por litro si la venta es de 201 a 500 litros.
// d. 10 ARS por litro si la venta es de más de 500 litros.
// Además, si paga en efectivo, tiene un adicional del 10% sobre el importe final.
// Hacer un programa que solicite la cantidad de litros vendidos y el tipo de pago
// (ingresará 1 si paga en efectivo y 0 con cualquier otro medio de pago) y calcule
// y emita por pantalla el monto final a abonar por el cliente.

const litros = parseInt(prompt('Ingresar los litros vendidos: '));
let mp = parseInt(prompt('Ingresar el medio de pago: '));
let precio;

if(litros > 500) {
    precio = litros * 10;
    
    if(mp === 1) {
        let descuento = precio * 0.1;
        console.log(`Precio final: $${precio - descuento}`);
    } else {
        console.log(`Precio final: $${precio}`);
    }

} else if(litros <= 500 && litros >= 201) {
    precio = litros * 15;
    
    if(mp === 1) {
        let descuento = precio * 0.1;
        console.log(`Precio: $${precio - descuento}`);
    } else {
        console.log(`Precio: $${precio}`)
    }
} else if(litros > 51 && litros <= 200) {
    precio = litros * 20;

    if(mp === 1) {
        let descuento = precio * 0.1;
        console.log(`Precio: $${precio - descuento}`);
    } else {
        console.log(`Precio: $${precio}`);
    }
} else {
    precio = litros * 25;
    
    if(mp === 1) {
        let descuento = precio * 0.1;
        console.log(`Precio: $${precio - descuento}`);
    } else {
        console.log(`Precio: $${precio}`);
    }
}