export const clickedPokemon = 'clickedPokemon';

const getSinglePokemonDataReducer = (state = '', action) => {
    switch(action.type) {
        case clickedPokemon:
            return action.payload
        default:
            return state
    }
}

export default getSinglePokemonDataReducer