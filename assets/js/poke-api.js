

const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name
    
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types
    
    pokemon.types = types 
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon
}


pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
            .then((Response) => Response.json())       // converte a lista dos detalhes em json
            .then(convertPokeApiDetailToPokemon)
} 
 

pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    
    return fetch(url)                               // Primeira requisição
        .then((Response) => Response.json())        // Converte o response para json
        .then((jsonBody) => jsonBody.results)       // isola apenas os resultados (.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))  // Mapea a lista de resultados em uma nova lista de promises afim de isolar os detalhes dos pokemons

        .then((detailRequests) => Promise.all(detailRequests))      // resolve a lista (aguarda que todas as requisições terminem)
        .then((pokemonsDetails) => pokemonsDetails)     // Lista pronta
}      


