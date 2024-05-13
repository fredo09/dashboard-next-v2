/*
 * middleware store redux
 */

import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";

export const localStorageMiddleware = ( state: MiddlewareAPI ) => {
    return (next: Dispatch) => (action:  Action) => {
        //console.log('asdfasdf', state.getState() );
        next(action);

        if (action.type === 'Pokemons/toggleFavoritePokemon') {
            const { favoritesPokemons } = state.getState() as RootState;
            localStorage.setItem('toggleFavoritesPokemons', JSON.stringify(favoritesPokemons));
            return;
        }
    }
}