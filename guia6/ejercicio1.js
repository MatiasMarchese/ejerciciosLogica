// Se dispone de una lista de 10 grupos de números enteros separados entre ellos 
// por ceros. Se pide determinar e informar:
// a. El número de grupo con mayor porcentaje de números impares
// positivos respecto al total de números que forman el grupo.
// b. Para cada grupo, el último número primo y en qué orden apareció en
// ese grupo. Si en un grupo no hubiera números primos, informarlo con
// un cartel aclaratorio.
// c. Informar cuántos grupos están formados por todos números ordenados
// de mayor a menor.

let grupo = 0;
let porcentajeImpares = 0;
let mayorMenor = 0;
let validacion = false;
let gruposOrden = 0;

for(let i = 0; i < 2; i++) {
    let n = parseInt(prompt("Ingresar numero"));
    let longitudGrupo = 0;
    let impares = 0;
    let porcentaje;
    let primos = 0;
    let ultimoPrimo = 0;
    let indexPrimo = 0;
    let orden = Infinity;

    while(n !== 0) {
        longitudGrupo++;
        primos = 0;

        if(n < orden) {
            orden = n;
            validacion = true;
        } else {
            validacion = false;
        }

        if(n % 2 !== 0){
            impares++;
        }

        for(let j = 1; j <= n; j++) {
            if(n % j === 0) {
                primos++;
            }
        }

        if(primos === 2) {
            ultimoPrimo = n;
            indexPrimo = longitudGrupo;
        }

        console.log(orden);
        n = parseInt(prompt("Ingresar numero"));
    }

    if(validacion) {
        gruposOrden++;
    }

    porcentaje = (impares * 100) / longitudGrupo;

    if(porcentaje > porcentajeImpares) {
        porcentajeImpares = porcentaje;
        grupo = i + 1;
    }

    console.log(`GRUPO: ${grupo}`);
    console.log(`ULTIMO PRIMO: ${ultimoPrimo}`);
}

console.log(`El grupo con mayor porcentaje de impares es ${grupo}`);
console.log(`Porcentaje de impares: ${Math.floor(porcentajeImpares)}%`);
console.log(`La cantidad de grupos ordenados de menor a mayor es : ${gruposOrden}`);