async function capturaDatos(i) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + i;
    let respuesta = await fetch(url);
    let datosPokemon = await respuesta.json();
    let urlPokemon = datosPokemon.sprites.other.dream_world.front_default; //url imagen pokemon
    let numeroPokemon = `#${datosPokemon.id}`;  // número de pokemon
    let nombrePokemon = `${datosPokemon.name}`;  // nombre de pokemon

    // Crear la tarjeta del Pokémon
    let tarjeta = `
        <div class="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4">
            <div class="card shadow h-100 d-flex flex-column">
                <div class="d-flex align-items-end justify-content-center" style="height:200px; overflow:hidden;">
                <img src="${urlPokemon}" class="card-img-top img-fluid px-3" style="width:auto; height:80%; " alt="${nombrePokemon}">
                </div> 
                <div class="card-body">
                    <h5 class="card-title text-center">${nombrePokemon}</h5>
                    <p class="card-text text-center">${numeroPokemon}</p>
                </div>
            </div>
        </div>
    `;


    
    // Agregar la tarjeta a la galería
    $("#galeria").append(tarjeta);
}

$(document).ready(function(){
    // Obtener los datos de los primeros 150 Pokémon
    for (let i = 1; i <= 150; i++) {
        capturaDatos(i);
    }
});
