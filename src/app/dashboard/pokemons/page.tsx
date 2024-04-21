import { PokemonsResponse, SimplePokemon } from '@/app/pokemons';
import Image from 'next/image';
import React from 'react';


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
    console.log("🚀 ~ PokemonPage ~ pokemons:", pokemons)

    return (
        <div className='flex flex-col'>
            Pokemon 🚀
            <div className='flex flex-wrap items-center justify-center'>
                {
                    pokemons.map(pokemon => (
                        <Image
                            key={pokemon.name}
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
                            alt={ `${pokemon.name} image` }
                            height={100}
                            width={100}
                        />
                    ))
                }
            </div>
        </div>
    )
}
