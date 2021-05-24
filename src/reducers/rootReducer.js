import pokemonListReducer from './pokemonlist'
import pokemonSearchReducer from './search'
import getSinglePokemonNameReducer from './getSinglePokemonName'
import getSinglePokemonDataReducer from './getSinglePokemonData'
import offsetDataReducer from './offsetData'
import {combineReducers} from 'redux'
import isLoadingReducer from './isLoading'

const initial_state = {
    pokemonlist: [],
    pokemonsearch: '',
    singlepokemonname: {},
    offsetData: 20
}

const allReducers = combineReducers({
    isLoading: isLoadingReducer,
    pokemonlist: pokemonListReducer,
    pokemonsearch: pokemonSearchReducer,
    singlepokemonname: getSinglePokemonNameReducer,
    singlepokemondata: getSinglePokemonDataReducer,
    offsetData: offsetDataReducer
});

export default allReducers;