export const GET_POKEMON = 'GET_POKEMON';

const pokemonListReducer = (state = [], action) => {
    switch(action.type) {
        case GET_POKEMON:
            return [...action.payload]
        default:
            return state
    }
}

export default pokemonListReducer