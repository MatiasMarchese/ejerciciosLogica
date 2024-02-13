// Hacer un programa para ingresar un valor que estará expresado en minutos. Si
// los minutos superan los 60, pasar el valor a horas, de lo contrario dejarlo en
// minutos. Mostrar el resultado en pantalla aclarando si se muestran minutos u
// horas.

let minutes = 75;

if(minutes > 60) {
    let hours = minutes / 60;
    console.log('Hours: ', hours)
} else {
    console.log('Minutes: ', minutes);
}