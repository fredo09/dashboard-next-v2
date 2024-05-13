'use client';

import React, { useState, useEffect } from 'react';
import { useAppSelector } from '@/store';
import { IoHeart } from 'react-icons/io5';
import { PokemonGrid } from '../pokemonGrid/PokemonGrid';


export const FavoritesPokemons = () => {

  //* -> Conectamos al store favorites pokemons
  const pokemonsFavorites = useAppSelector(state => Object.values(state.favoritesPokemons.favorites));
  const [pokemons, setPokemons] = useState(pokemonsFavorites);

  //* checa el cambio de store en la validacion de pokemones favoritos
  // useEffect(() => {
  //   setPokemons(pokemonsFavorites);
  // }, [pokemonsFavorites])
  

  return (
    <>
      {
        pokemonsFavorites.length === 0
          ? (<NotFavorites/>)
          : (<PokemonGrid pokemons={pokemonsFavorites} />)
      }
      {/* <PokemonGrid pokemons={pokemonsFavorites} /> */}
    </>
  )
}

export const NotFavorites = () => {
  return(
      <div className='flex flex-col h-[50vh] items-center justify-center'>
          <IoHeart size={100} className='text-red-500'/>
          <span className='text-4xl'>No tienes pokemons favoritos</span>
      </div>
  )
} 
