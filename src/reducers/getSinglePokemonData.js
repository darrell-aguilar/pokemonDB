export const clickedPokemon = 'clickedPokemon';

const getSinglePokemonData = (state = '', action) => {
    switch(action.type) {
        case clickedPokemon:
            return action.payload
        default:
            return state
    }
}

export default getSinglePokemonData