import axios from "axios"
import { pokemonApi } from "../../../api/pokemosApi"
import { setPokemons, startLoadingpokemon } from "./pokemonSlice"

export const getpokemons =  (page = 0) => {
    return async (dispatch, getState)=> {
        dispatch(startLoadingpokemon())

        // dispatch(setPokemons())
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
       

        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
        
    }
}