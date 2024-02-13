// Hacer un programa para ingresar una lista de números que corta cuando se
// ingresa un cero y luego mostrar: la cantidad de numeros primos,
// números pares, la cantidad de positivos y la cantidad de negativos.

let n = parseInt(prompt('Ingresar numero:'));

let primos = 0;
let pares = 0;
let positivos = 0;
let negativos = 0;


while(n !== 0) {
    if(n > 0) {
        positivos++;
        
        if(n % 2 === 0) {
            pares++;
        }

        let counter = 0;
        
        for(let i = 1; i <= n; i++) {
            if(n % i === 0) {
                counter++;
            }

            if(i === n && counter === 2) {
                primos++;
            }
        }
    } else if(n < 0) {
        negativos++;

        if(n % 2 === 0) {
            pares++;
        }
    }

    n = parseInt(prompt('Ingresar un numero: '));
}

console.log('Primos ---> ', primos);
console.log('Pares ---> ', pares);
console.log('Positivos ---> ', positivos);
console.log('Negativos ---> ', negativos);