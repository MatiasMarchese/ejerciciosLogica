// Una casa de computación paga a sus empleados un sueldo fijo de ARS15000
// más una comisión del 5% sobre el total facturado por cada empleado. Hacer un
// programa para ingresar el total facturado por un empleado y que luego calcule
// y emita por pantalla el sueldo total a cobrar por el mismo.

let sueldoFijo = 15000;
let porcentaje = 0.05;
let totalFacturado = parseInt(prompt('Ingresar el total facturado'));
let comision = totalFacturado * porcentaje;
let sueldoTotal = sueldoFijo + comision;

console.log('Sueldo total: $', sueldoTotal)