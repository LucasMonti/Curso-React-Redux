import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { pokemonSilce } from './store/slices/pokemon/pokemonSlice'
import { getpokemons } from './store/slices/pokemon/thunks'
import { store } from './store/store'

export const PokemonApp = () => {

    const dispatch = useDispatch()
    const {isLoading, page, pokemons} = useSelector(state => state.pokemons);

    useEffect(() => {
      
    dispatch(getpokemons())

    }, [])
    
  return (
    <>
    <h1>pokemonApp</h1>
    <hr />
    <span>{isLoading ? 'true' : 'false'}</span>
    <ul>
       {pokemons.map(pokemon => (
        <li key={pokemon.name}>{pokemon.name}</li>
       ))}
    </ul>
    </>
  )
}
