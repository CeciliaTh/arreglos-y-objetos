// let cuartos = parseInt(document.querySelector('#inputCuartos').value)
// let desde = parseInt(document.querySelector('#inputDesde').value)
// let hasta = parseInt(document.querySelector('#inputHasta').value)

let cuartos = document.querySelector('#inputCuartos').value
let desde = document.querySelector('#inputDesde').value
let hasta = document.querySelector('#inputHasta').value


//let comprobar = function(pieza,rangoIni,rangoFin){
    // let pieza = Number(document.querySelector(cuartos.value))
    // let rangoIni = Number(document.querySelector(desde.value))
    // let rangoFin = Number(document.querySelector(hasta.value))

    let comprobar = function(pieza,rangoIni,rangoFin){
 
 if (pieza == 0 && rangoIni == 0 && rangoFin == 0){
    alert('Los campos no pueden estar vacios. Debes completar la información para continuar');
    console.log(pieza)
    console.log(rangoIni)
    console.log(rangoFin)

} else if (pieza == 0 && rangoIni != 0 && rangoFin != 0){
    alert ('Debes definir cuantas piezas quieres');
} else if (pieza != 0 && rangoIni == 0 && rangoFin != 0){
    alert('Debes definir los metros iniciales');
} else if (pieza != 0 && rangoIni != 0 && rangoFin == 0){
    alert('Debes definir los metros finales');
} else {
    alert('Todos los campos estan con datos validos');
    console.log(pieza)
    console.log(rangoIni)
    console.log(rangoFin)
}
}

let botonComprobar = document.querySelector('#btnComprobar')
botonComprobar.addEventListener('click', function() {comprobar(cuartos,desde,hasta)})

// ------


