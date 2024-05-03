import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

//* -> aqui hacemos un interface donde voy a tener x cantidad de key y que estas keys seran strings
interface PokemonsState {
    [key: string] : SimplePokemon
}

const initialState: PokemonsState = {
    '1': { id: '1', name: 'bulbasaur' },
}

const pokemonsSlice = createSlice({
  name: 'Pokemons',
  initialState,
  reducers: {
    // add actions ... 🚀 
    toggleFavoritePokemon( state, actions: PayloadAction<SimplePokemon>) {

        const { id } = actions.payload;

        //* Eliminamos segun el id del pokemon
        if ( !!state[id] ) {
            delete state[id];
            return;
        }
        
        //* Agregamos el pokemon id
        state[id] = actions.payload;
    },
  }
});

export const { toggleFavoritePokemon, } = pokemonsSlice.actions

export default pokemonsSlice.reducer