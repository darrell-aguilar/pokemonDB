import {GET_POKEMON} from '../pokemonlist'

export const getPokemon = (pokemonNames) => {
    return {
        type: GET_POKEMON,
        payload: pokemonNames
    }
}