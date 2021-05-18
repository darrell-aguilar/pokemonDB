import {search} from '../search'

export const searchPokemon = (searched) => {
    return {
        type: search,
        payload: searched
    }
}
