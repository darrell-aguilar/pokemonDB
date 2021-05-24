export const clickedPokemon = 'clickedPokemon';

const getSinglePokemonNameReducer = (state = '', action) => {
    switch(action.type) {
        case clickedPokemon:
            return action.payload
        default:
            return state
    }
}

export default getSinglePokemonNameReducer