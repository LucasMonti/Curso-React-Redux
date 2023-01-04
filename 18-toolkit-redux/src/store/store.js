import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counters/counterSlice'
import { pokemonSilce } from './slices/pokemon/pokemonSlice'


export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSilce.reducer
  },
})