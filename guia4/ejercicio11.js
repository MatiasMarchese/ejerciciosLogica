// Hacer un programa para ingresar 10 números y luego calcule y emita el mayor
// de los primos de la lista. En caso de no haber ningún número primo, deberá
// aclararlo con un cartel.

let primo = 0;

for(let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Ingresar un numero'));
    // El contador va por dentro del primer for debido a que se debe reiniciar cada vez
    // que se cambie agregue un nuevo numero
    let count = 1;

    for(let j = 2; j <= num; j++) {
        if(num % j === 0) {
            count++;
        }

        if(j === num) {
            if(count === 2) {
                if(num > primo) {
                    primo = num;
                }
            }
        }
    }
}

if(primo !== 0) {
    console.log(`${primo} es un numero primo`);
} else {
    console.log('No hay numeros primos');
}