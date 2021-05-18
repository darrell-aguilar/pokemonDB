import checkMainPageReducer from './onmainpage'
import pokemonListReducer from './pokemonlist'
import pokemonSearchReducer from './search'
import getSinglePokemonData from './getSinglePokemonData'
import {combineReducers} from 'redux'

const initial_state = {
    mainpage: true,
    pokemonlist: [],
    pokemonsearch: '',
    singlepokemondata: ''
}

const allReducers = combineReducers({
    mainpage: checkMainPageReducer,
    pokemonlist: pokemonListReducer,
    pokemonsearch: pokemonSearchReducer,
    singlepokemondata: getSinglePokemonData
});

export default allReducers;