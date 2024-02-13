// Hacer un programa para ingresar cuatro números distintos y luego mostrar por
// pantalla el mayor de ellos.

let num = 5;
let num2 = 1;
let num4 = 2;
let num5 = 2;

let max = -Infinity;

if(num > max) {
  max = num;
  console.log(max);
}
if(num2 > max) {
  max = num2;
  console.log(max);
}
if(num4 > max) {
  max = num4;
  console.log(max);
}
if(num5 > max) {
  max = num5;
  console.log(max);
}


describe('max number finder', () => {
  test('returns the max number', () => {
    expect(max).toBe(5);
  });

});