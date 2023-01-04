import { createSlice } from "@reduxjs/toolkit";

export const pokemonSilce = createSlice({
name:'pokemonSlice',
initialState: {
    page: 0,
    pokemons: [],
    isLoading: false
},
reducers: {
        startLoadingpokemon: (state) => {
            state.isLoading = true;
        },
        setPokemons: (state, action) => {
          state.isLoading = false;
          state.page = action.payload.page;
          state.pokemons = action.payload.pokemons
        }
}
});



export const {startLoadingpokemon, setPokemons} = pokemonSilce.actions