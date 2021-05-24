import checkMainPageReducer from './onmainpage'
import pokemonListReducer from './pokemonlist'
import pokemonSearchReducer from './search'
import getSinglePokemonNameReducer from './getSinglePokemonName'
import getSinglePokemonDataReducer from './getSinglePokemonData'
import {combineReducers} from 'redux'

const initial_state = {
    pokemonlist: [],
    pokemonsearch: '',
    singlepokemonname: {}
}

const allReducers = combineReducers({
    pokemonlist: pokemonListReducer,
    pokemonsearch: pokemonSearchReducer,
    singlepokemonname: getSinglePokemonNameReducer,
    singlepokemondata: getSinglePokemonDataReducer
});

export default allReducers;