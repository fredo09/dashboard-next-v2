'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { setFavoritePokemons } from '../pokemons/pokemonsSlice';
import { store } from './../index';

interface Props {
    children: React.ReactNode
}

export const Providers = ({ children }: Props) => {

  //* setemos del localStorage al store pokemones 
  useEffect(() => {
    const favotiresPokemonsStorage = JSON.parse(localStorage.getItem('toggleFavoritesPokemons') ?? '{}');

    store.dispatch( setFavoritePokemons(favotiresPokemonsStorage));
  },[]);

  return (
    <Provider store={store}>
        { children }
    </Provider>
  )
}