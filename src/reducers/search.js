export const search = 'search';

const pokemonSearchReducer = (state = '', action) => {
    switch(action.type) {
        case search:
            return action.payload
        default:
            return state
    }
}

export default pokemonSearchReducer;