import React from 'react';


const getApiPokemons = async ( limit = 20, offset = 0 ) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();

    return data;
}

export default async function PokemonPage() {
    const pokemons = await getApiPokemons(151);
    console.log("🚀 ~ PokemonPage ~ pokemons:", pokemons)

    return (
        <div>
            Pokemon 🚀
            {
                JSON.stringify(pokemons)
            }
        </div>
    )
}
