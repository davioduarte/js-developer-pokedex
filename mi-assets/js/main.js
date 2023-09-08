
const pokemonListaDetalhes = document.getElementById( "pokemondetalhe" )
const pokeUrl = window.location.search.replace( /\?/g,'' )


function convertPokemon( pokemon ) {
    return `
        <div id="card" class="container ${pokemon.tipo}">
            <div class="container-header">
                <span>#${pokemon.numero}</span>
                <span>${pokemon.nome}</span>
                <ol class="tipos">
                    ${pokemon.tipos.map((tipo) => `<li class="tipo ${tipo}">${tipo}</li>`).join('')} 
                </ol>
            </div>

            <div class="pokemon-body">
                <div class="pokemon">
                    <img src="${pokemon.foto}" alt="${pokemon.nome}">
                </div>

                <div class="pokeboll">
                    <img src="./mi-assets/imagens/pngwing.com.png" alt="pokeboll">
                </div>
            </div>
            <div class="container-body">
                <span>${pokemon.altura} cm</span>
                <span>${pokemon.peso} kg</span>
            </div>

            <div class="container-attacks">
                <span>Ataques</span>
                ${pokemon.abilidades.map((abilidade) => `<li class="ability ${abilidade}">${abilidade}</li>`).join('')}
            </div>
        </div>
       
    `
}

function loadPokemonDetales ( numeroDoPokemon ) {
    pokeApi.getPokemonDetail( numeroDoPokemon ).then(
    ( dados ) => pokemonListaDetalhes.innerHTML = convertPokemon(dados) )
}

loadPokemonDetales( pokeUrl )

{/* <div class="${pokemon.tipo} container ">
<div class="container-header">
    <span class="">#${pokemon.numero}</span>
    <span class="name">${pokemon.nome}</span>
    <div class="tipos">
        ${pokemon.tipos.map((tipo) => `<span class="tipo ${tipo}">${tipo}</span>`).join('')}        
    </div>
</div>

<hr>
<div class="pokeboll">
    <img src="${pokemon.foto}" alt="${pokemon.nome}">
</div>  
<hr>
<div>
    <span>${pokemon.altura} cm</span>
    <span>${pokemon.peso} kg</span>
</div>
<hr>
<div class="abilidades">
    <span>Abilidades</span>
    <ol>
        ${pokemon.abilidades.map((abilidade) => `<li class="ability ${abilidade}">${abilidade}</li>`).join('')}
    </ol>
</div>

</div> */}