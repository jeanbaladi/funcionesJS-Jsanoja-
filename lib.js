
function getNumber(message) {
    return parseInt(prompt(message))
}
function getString(message) {
    return prompt(message)
}
function showMessage(message) {
    console.log(message)
}

function showError(message) {
    alert(message)
}

function sumar() {
    for (let i = 1; i <= 3; i++) {
        let operacion = getNumber("¿cuanto es 10 + 10?");
        if (operacion == 20) {
            showMessage("correcto el resultado es " + operacion);
            break;
        } else {
            showMessage("incorrecto, intentalo de nuevo." + "\nN° de intento: " + i);
        }
    }
}

function promedio() {
    let dias = getNumber("Ingrese la cantidad de dias trabajados");
    let ventas = 0;
    let resultado = [];
    for (let i = 1; i <= dias; i++) {
        let fecha = getString("Ingrese el dia");
        let nota = getNumber("Ingrese cuanto se vendio en el dia: " + fecha);
        ventas = ventas + nota;
        resultado.push({
            fecha: fecha,
            ventas: nota
        })
    }
    let promedio = ventas / dias;
    resultado.forEach(el => {
        showMessage("El dia " + el.fecha + " se vendieron " + el.ventas + " productos")
    });
    showMessage("promedio de ventas por dia es de: " + promedio);
    showMessage("dias trabajados: " + dias);

}

function login() {
    let user = getString("Ingresar un usuario");
    while (user != "jean") {
        showError("usuario incorrecto");
        user = getString("Ingresar un usuario");
    }
    // contrasela (ciclo do...while)  
    var password;
    do {
        password = getString("Ingresar una contraseña");
        if (password != "123") {
            showError("contraseña incorrecta");
        }
    } while (password != "123");
}


