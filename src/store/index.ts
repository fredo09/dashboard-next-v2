/*
 *  file store redux 
 */
import { configureStore } from '@reduxjs/toolkit';

// Reducers
import counterReducer from './counter/CounterSlice';
import pokemonsReducer from './pokemons/pokemonsSlice';

//Hooks redux
import { useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    // add store... 🚀 
    counter: counterReducer,
    favoritesPokemons: pokemonsReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()