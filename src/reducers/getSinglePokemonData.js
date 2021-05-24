export const getSinglePokemonData = 'getSinglePokemonData';

const getSinglePokemonDataReducer = (state = {}, action) => {
    switch(action.type) {
        case getSinglePokemonData:
            return {...action.payload}
        default:
            return state
    }
}

export default getSinglePokemonDataReducer