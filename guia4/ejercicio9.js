// Hacer un programa que solicite 20 edades y luego calcule el promedio de edad
// de aquellas personas mayores a 18 años.

let count = 0;
let ages = 0;

for(let i = 0; i < 20; i++) {
    let age = parseInt(prompt('Ingresar edades'));

    if(age > 18) {
        count++;
        ages += age;
    }

    if(i === 19) {
        console.log(`El promedio de edades es ${ages / count}`);
    }
}

