export const GET_POKEMON = 'GET_POKEMON';
export const GET_MORE_POKEMON = 'GET_MORE_POKEMON'

const pokemonListReducer = (state = [], action) => {
    switch(action.type) {
        case GET_POKEMON:
            return [...action.payload]
        case GET_MORE_POKEMON:
            return [...state, ...action.payload]
        default:
            return state
    }
}

export default pokemonListReducer