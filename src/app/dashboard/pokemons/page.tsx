import React from 'react';
import { PokemonGrid, PokemonsResponse, SimplePokemon } from '@/pokemons';


const getApiPokemons = async ( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
    const responsePokemons: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
        .then(result => result.json());
    
    const pokemons = responsePokemons.results.map(responsePokemon => ({
        id: responsePokemon.url.split('/').at(-2)!,
        name: responsePokemon.name
    }));
    
    //throw new Error('Este error es algo que no debe de pasar... ☠️');
    //throw notFound(); -> Funcion para mostrar cunado no se encuentra el recurso en next

    return pokemons;
}

export default async function PokemonPage() {
    const pokemons = await getApiPokemons(151);
    
    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2 '>Listado de Pokemons <small className='text-blue-400'>estatico</small></span>
            
            <PokemonGrid pokemons={pokemons} />
        </div>
    )
}
