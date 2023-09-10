
const pokemonListaDetalhes = document.getElementById( "pokemondetalhe" )
const pokeUrl = window.location.search.replace( /\?/g,'' )


function convertPokemon( pokemon ) {
    return `
        <div class="container">
            <div id="card" class="${pokemon.type}">
                <div class="container-header">
                    <span>#${pokemon.number}</span>
                    <span>${pokemon.name}</span>
                    <ol class="tipos">
                        ${pokemon.types.map((type) => `<li class="tipo ${type}">${type}</li>`).join('')} 
                    </ol>
                </div>

                <div class="pokemon-body">
                    <div class="pokemon">
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>

                    <div class="pokeboll">
                        <img src="./assets/imagens/pngwing.com.png" alt="pokeboll">
                    </div>
                </div>
                <div class="peso_altura">
                    <div class="altura">
                        <span>Altura</span>
                        <span>${pokemon.height} cm</span>
                    </div>
                    <div class="peso">
                        <span>Peso </span
                        <span>${pokemon.weight} kg</span>
                    </div>
                </div>
                <div class="ataques">
                    <span>Ataques</span>
                    ${pokemon.abilities.map((ability) => `<li class="abilidade ${ability}">${ability}</li>`).join('')}
                </div>
                


            </div>
        </div>
    `
}



function loadPokemonDetales ( numeroDoPokemon ) {
    pokeApi.getPokemonDetailByNumber( numeroDoPokemon ).then(
    ( dados ) => pokemonListaDetalhes.innerHTML = convertPokemon(dados) )
}

loadPokemonDetales( pokeUrl )

