const pokeApi = {}
function convertPokeApiDetailToPokemon (  pokeDetalhes ) {
    const pokemon = new Pokemon()
    pokemon.numero = pokeDetalhes.id
    pokemon.nome = pokeDetalhes.name

    const tipos = pokeDetalhes.types.map( ( typeSlot ) => typeSlot.type.name )
    const [tipo] = tipos

    pokemon.tipos = tipos
    pokemon.tipo = tipo

    const abilidades = pokeDetalhes.abilities.map( ( abilitySlot ) => abilitySlot.ability.name )
    pokemon.abilidades = abilidades

    pokemon.altura = (pokeDetalhes.height/10).toFixed(2) 
    pokemon.peso = pokeDetalhes.weight/10

    pokemon.foto = pokeDetalhes.sprites.other.dream_world.front_default

    return pokemon

}

pokeApi.getPokemonDetail = (  numero = 1  ) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${numero}`
    return fetch( url )
    .then( response => response.json(  ) )
    .then( convertPokeApiDetailToPokemon )
}
