// Una universidad desea conocer los porcentajes de mujeres y hombres en las
// carreras de ciencias exactas. Se solicita un programa para cargar la cantidad de
// mujeres y la cantidad de hombres y que el mismo calcule y emita por pantalla
// los porcentajes correspondientes.

const hombres = 456;
const mujeres = 345;
const totalAlumnos = mujeres + hombres;

let porcentajeMujeres = (mujeres / totalAlumnos) * 100;
let porcentajeHombres = (hombres / totalAlumnos) * 100;

console.log('Porcentaje mujeres: ', porcentajeMujeres);
console.log('Porcentaje hombres: ', porcentajeHombres);