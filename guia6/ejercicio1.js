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

for(let i = 0; i < 5; i++) {
    let n = parseInt(prompt("Ingresar numero"));
    let totalGrupo = 0;
    let impares = 0;
    let porcentaje;

    while(n !== 0) {
        totalGrupo++;

        if(n % 2 !== 0){
            impares++;
        }

        n = parseInt(prompt("Ingresar numero"));
    }

    porcentaje = (impares * 100) / totalGrupo;

    if(porcentaje > porcentajeImpares) {
        porcentajeImpares = porcentaje;
        grupo = i;
    }
}