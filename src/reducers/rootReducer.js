import pokemonListReducer from './pokemonlist'
import PokemonSearchReducer from './Search'
import offsetDataReducer from './offsetData'
import {combineReducers} from 'redux'
import LoadingReducer from './Loading'
import FetchPokemonDataReducer from './FetchPokemonData'
import FetchPokemonNameReducer from './FetchPokemonName'

const initial_state = {
    pokemonlist: [],
    pokemonsearch: '',
    singlepokemonname: {},
    offsetData: 20
}

const allReducers = combineReducers({
    Loading: LoadingReducer,
    pokemonlist: pokemonListReducer,
    PokemonSearch: PokemonSearchReducer,
    FetchPokemonName: FetchPokemonNameReducer,
    FetchPokemonData: FetchPokemonDataReducer,
    offsetData: offsetDataReducer
});

export default allReducers;