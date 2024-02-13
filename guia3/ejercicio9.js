// Una importante marca de computadoras permite elegir cierta configuración del
// equipo a comprar. Para ello existe la siguiente escala de precios:
//           i5 (1) i7 (2) i9 (3)
// 8 RAM (1) USD 800 USD 900 USD 1200
// 16 RAM (2) USD 900 USD 1000 USD 1400
// 32 RAM (3) USD 1000 USD 1400 USD 2000
// Además, el equipo viene con un disco que permite almacenar 500 GB de
// información y que se puede ampliar a 1 TB si así lo desea, lo cual tiene un costo
// adicional de USD 300.
// Hacer un programa que solicite la opción de procesador, la opción de memoria
// RAM, y si extiende el disco o no (ingresa 1 para extender y 0 para no extender)
// y calcule y emita por pantalla el monto de la máquina seleccionada.

let procesador = parseInt(prompt('Ingresar el procesador i5 = 1, i7 = 2, i9 = 3: '));
let ram = parseInt(prompt('Ingresar la memoria RAM 1 = 8GB, 2 = 16GB, 3 = 32GB: '));
let ssd = parseInt(prompt('Ingresar si extiende el disco: '));

let precio = 0;

if(procesador === 1) {
    if(ram === 1) {
        precio += 800;
    } else if(ram === 2) {
        precio += 900;
    } else if(ram === 3) {
        precio += 1000;
    }
} else if(procesador === 2) {
    if(ram === 1) {
        precio += 900;
    } else if(ram === 2) {
        precio += 1000;
    } else if(ram === 3) {
        precio += 1400;
    }
} else if(procesador === 3) {
    if(ram === 1) {
        precio += 1200;
    } else if(ram === 2) {
        precio += 1400;
    } else if(ram === 3) {
        precio += 2000;
    }
}

if(ssd === 1) {
    precio += 300;
}

console.log('Su configuración es la siguiente: ');
console.log(`Procesador: ${procesador === 1? 'i5' : procesador === 2 ? 'i7' : 'i9'}`);
console.log(`Memoria RAM: ${ram === 1 ? '8 GB' : ram === 2 ? '16 GB' : '32 GB'}`);
console.log(`Extensión de ssd: ${ssd === 0 ? 'No' : 'SSD 1TB'}`);
console.log(`Precio final: $${precio}`);