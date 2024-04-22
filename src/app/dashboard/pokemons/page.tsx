import React from 'react';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/app/pokemons';

const getApiPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
    const responsePokemons: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(result => result.json());
    
    const pokemons = responsePokemons.results.map(responsePokemon => ({
        id: responsePokemon.url.split('/').at(-2)!,
        name: responsePokemon.name
    }));
    
    return pokemons;
}

export default async function PokemonPage() {
    const pokemons = await getApiPokemons(151);
    
    return (
        <div className='flex flex-col'>
            <span className='text-x5l my-2 '>Listado de Pokemons <small>estatico</small></span>
            
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
