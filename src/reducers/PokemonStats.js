export const FETCH_POKEMON_STATS = 'FETCH_POKEMON_STATS';

const FetchPokemonStatsReducer = (state = [], action) => {
    switch(action.type) {
        case FETCH_POKEMON_STATS:
            return action.payload
        default:
            return state
    }
}

export default FetchPokemonStatsReducer