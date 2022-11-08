// Creando y llenando Cards
const casas =
    [
        { imagen: "assets/img/casadecampo.jpg", titulo: "Casa de Campo", cuartos: 2, metros: 170, descripcion: "Un lugar ideal para descansar de la ciudad" },
        { imagen: "assets/img/casadeplaya.jpg", titulo: "Casa de Playa", cuartos: 2, metros: 130, descripcion: "Despierta tus días oyendo el oceano" },
        { imagen: "assets/img/casaenelcentro.jpg", titulo: "Casa en el Centro", cuartos: 1, metros: 80, descripcion: "Ten cerca de ti todo lo que necesitas" },
        { imagen: "assets/img/casarodante.jpg", titulo: "Casa Rondante", cuartos: 1, metros: 6, descripcion: "Conviertete en un nómada del mundo sin salir de tu casa" },
        { imagen: "assets/img/departamento.jpg", titulo: "Departamento", cuartos: 3, metros: 200, descripcion: "Desde las alturas todo se ve mejor" },
        { imagen: "assets/img/mansion.jpg", titulo: "Mansión", cuartos: 5, metros: 500, descripcion: "Vive una vida lujosa en la mansión de tus sueños" },
    ]
// function llenarTarjetas() {
let cardCasas = ''
for (let casa of casas) {
    let casaTemplate =
        `
        <div class="col-sm-4 p-4">
        <div class="card shadow rounded" style="width: 18rem;">
        <img src=${casa.imagen} class="card-img-top" alt=${casa.titulo}>
        <div class="card-body bg-secondary">
          <h5 class="card-title text-white text-center">${casa.titulo}</h5>
          <p class="card-text text-white"> Cuartos: ${casa.cuartos}</p>
          <p class="card-text text-white"> Metros: ${casa.metros}</p>
          <p class="card-text text-white"> ${casa.descripcion}</p>
          <a href="#" class="btn btn-primary">Ver Más</a>
        </div>
      </div>
      </div>
        `
    cardCasas += casaTemplate
}
// }
let casasResultado = document.querySelector('#casas')
casasResultado.innerHTML = cardCasas

//Condiciones

let botonComprobar = document.querySelector('#btnComprobar')
botonComprobar.addEventListener('click', function() {

    let cuartos = Number(document.querySelector('#inputCuartos').value)
    let desde = Number(document.querySelector('#inputDesde').value)
    let hasta = Number(document.querySelector('#inputHasta').value)

    if (cuartos > 0 && desde >0 && hasta > 0){
        filtrar(cuartos,desde,hasta)
        
        // console.log(cuartos)
        // console.log(desde)
        // console.log(hasta)

    } else {
        alert('Debes completar todos los campos para filtrar')
    }
});


