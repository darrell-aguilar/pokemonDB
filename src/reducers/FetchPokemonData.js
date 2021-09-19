export const FETCH_POKEMON_DATA = 'FETCH_POKEMON_DATA ';

const FetchPokemonDataReducer = (state = {}, action) => {
    switch(action.type) {
        case FETCH_POKEMON_DATA:
            return {...action.payload}
        default:
            return state
    }
}

export default FetchPokemonDataReducer