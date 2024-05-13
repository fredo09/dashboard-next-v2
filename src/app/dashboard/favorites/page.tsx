import React from 'react';
import type { Metadata } from 'next';
import { FavoritesPokemons } from '@/pokemons';


export const metadata: Metadata = {
    title: "Pokemons Favoritos",
    description: "Ve a tus pokemones favoritos",
  };

export default function FavoritesPage() {
    return (
        <div className='flex flex-col'>
            <span className='text-5xl my-2 '> Tus pokemons favoritos <small className='text-blue-400'>estatico</small></span>
            <FavoritesPokemons />
        </div>
    )
}
