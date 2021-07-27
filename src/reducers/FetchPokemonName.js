export const FETCH_POKEMON_NAME = 'FETCH_POKEMON_NAME';

const FetchPokemonNameReducer = (state = '', action) => {
    switch(action.type) {
        case FETCH_POKEMON_NAME:
            return action.payload
        default:
            return state
    }
}

export default FetchPokemonNameReducer