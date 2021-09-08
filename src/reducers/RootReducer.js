import pokemonListReducer from './Pokemonlist'
import PokemonSearchReducer from './Search'
import offsetDataReducer from './OffsetData'
import {combineReducers} from 'redux'
import LoadingReducer from './Loading'
import FetchPokemonDataReducer from './FetchPokemonData'
import FetchPokemonNameReducer from './FetchPokemonName'

const allReducers = combineReducers({
    Loading: LoadingReducer,
    pokemonlist: pokemonListReducer,
    PokemonSearch: PokemonSearchReducer,
    FetchPokemonName: FetchPokemonNameReducer,
    FetchPokemonData: FetchPokemonDataReducer,
    offsetData: offsetDataReducer
});

export default allReducers;