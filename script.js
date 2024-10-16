let contenedorTarjetas = document.getElementById("contenedor_cards");

let inputBusqueda = document.getElementById("buscar");

let buscarJugadores = [];

fetch("jugadores.json")
    .then(res => res.json())
    .then(jugador => {
        console.log(jugador);
        crearJugador(jugador); 
        
        buscarJugadores = jugador;
    });

let crearTarjeta = "";

function crearJugador(jugador){
    
    crearTarjeta = "";

    let jugadores;
    for(jugadores of jugador){

        crearTarjeta += `
        <div class="card">
            <p>${jugadores.id}</p>
            <p>${jugadores.nombre}</p>
            <img src="${jugadores.imagen}">
            <p>${jugadores.edad}</p>
            <p>${jugadores.club}</p>
            <p>${jugadores.posición}</p>
            
        </div>`;

        contenedorTarjetas.innerHTML = crearTarjeta;
    }
}

inputBusqueda.addEventListener('input', () => {
    
    const inputValue = inputBusqueda.value;

    crearJugadorInput();

    if (buscarJugadoresInput.length === 0) {
        contenedorTarjetas.innerHTML = "<h2>Sin Resultados</h2>";
    }

    console.log(buscarJugadorInput);
    
    let labelBuscar = document.getElementById("labelBuscar");
    labelBuscar.innerHTML = inputValue;
    console.log(inputValue);
});

function crearJugadorInput() {
    const textoBusqueda = inputBusqueda.value.toLowerCase();
    
    let buscarJugadoresInput = buscarJugadores.filter(jugador =>
        jugador.nombre.toLowerCase().includes(textoBusqueda));

    crearTarjeta = "";

    for ( jugadores of buscarJugadoresInput) {
        crearTarjeta += `
        <div class="card">
            <p>${jugadores.id}</p>
            <h2>${jugadores.nombre}</h2>
            <img src="${jugadores.imagen}">
            <p>${jugadores.edad}</p>
            <p>${jugadores.club}</p>
            <p>${jugadores.posición}</p>
            
        </div>
        `;
    }
    
    contenedorTarjetas.innerHTML = crearTarjeta;
}