import {clickedPokemon} from '../getSinglePokemonData'

export const getSinglePokemon = (chosenpokemon) => {
    return {
        type: clickedPokemon,
        payload: chosenpokemon
    }
}
