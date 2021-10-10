// const BASE_URL = 'https://pokeapi.co/api/v2';

// function fetchPokemon(pokemonId) {
//   return fetch(`${BASE_URL}/pokemon/${pokemonId}`).then(response =>
//     response.json(),
//   );
// }

// export default { fetchPokemon };

fetch('https://pokeapi.co/api/v2/pokemon')
    .then(response => {
        return response.json()
    }).then(pokemon => {
        console.log(pokemon);
    }).catch(error => {
        console.log(error);
    });
