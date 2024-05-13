import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SimplePokemon } from '@/pokemons';

//* -> aqui hacemos un interface donde voy a tener x cantidad de key y que estas keys seran strings
interface PokemonsState {
    favorites: { [key: string] : SimplePokemon }
}

//* -> Obtenemos pokemons del localStorage
// const getFavoritesPokemonsStorage = (): PokemonsState => {

  /*
   * posibles soluciones "if" para probar de y testear el localStorage en cliente 
   */
  // if (typeof localStorage === "undefined") return {};

  //const favotiresPokemonsStorage = JSON.parse(localStorage.getItem('toggleFavoritesPokemons') ?? '{}');

  //return favotiresPokemonsStorage;
//};

const initialState: PokemonsState = {
  favorites: {},
  //...getFavoritesPokemonsStorage(),
  // '1': { id: '1', name: 'bulbasaur' },
}

const pokemonsSlice = createSlice({
  name: 'Pokemons',
  initialState,
  reducers: {
    // add actions ... 🚀 
    toggleFavoritePokemon( state, actions: PayloadAction<SimplePokemon>) {

        const { id } = actions.payload;

        //* Eliminamos segun el id del pokemon
        if ( !!state.favorites[id] ) {
            delete state.favorites[id];
            //return;
        } else {
          state.favorites[id] = actions.payload;
        }
        
        //* Agregamos el pokemon id
        //state[id] = actions.payload;

        //! NO SE DEVE DE HACER AL MOMENTO DE USAR REDUX
        // * -> Seteamos el localStorage de pokemons favoritos 
        localStorage.setItem('toggleFavoritesPokemons', JSON.stringify(state.favorites));
    },

    //* Cargamos pokemones del action al store  
    setFavoritePokemons(state, action: PayloadAction<{ [key: string] : SimplePokemon }>) {
      state.favorites = action.payload;
    },
  }
});

export const { toggleFavoritePokemon, setFavoritePokemons, } = pokemonsSlice.actions

export default pokemonsSlice.reducer