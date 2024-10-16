let jugadoresFiltrados = [];

fetch("jugadores.json")
    .then(res => res.json())
    .then(jugadores => {
        jugadoresFiltrados = jugadores;

        crearJugador(); 
    });

function crearJugador(){
    let queryString = document.location.search;

    let parametro = new URLSearchParams(queryString);
    
    let id = parametro.get("id");

    let jugadorBuscado = jugadoresFiltrados.find(jugador => jugador.id == id);

    let contenedor = document.querySelector(".container_info");

    if(jugadorBuscado){

        contenedor.innerHTML = `
        <div class="column">
            <h2>${jugadorBuscado.nombre}</h2>
            <img src="${jugadorBuscado.imagen}">
        </div>
        <div class="column">
            <h2>Club</h2>
            <p>${jugadorBuscado.club}</p>
        </div>`;
    }
    else{
        contenedor.innerHTML = `<p>No se encuentran resultados</p>`;
    }

}