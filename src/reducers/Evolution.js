export const POKEMON_EVOLUTION = 'POKEMON_EVOLUTION'

const PokemonEvolutionReducer = (state = [], action) => {
    switch(action.type) {
        case POKEMON_EVOLUTION:
            return [...action.payload]
        default:
            return state
    }
}

export default PokemonEvolutionReducer