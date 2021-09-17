import pokemonListReducer from './Pokemonlist'
import PokemonSearchReducer from './Search'
import offsetDataReducer from './OffsetData'
import {combineReducers} from 'redux'
import LoadingReducer from './Loading'
import FetchPokemonDataReducer from './FetchPokemonData'
import FetchPokemonNameReducer from './FetchPokemonName'
import PokemonEvolutionReducer from './Evolution'
import FetchPokemonStatsReducer from './PokemonStats'

const allReducers = combineReducers({
    Loading: LoadingReducer,
    pokemonlist: pokemonListReducer,
    PokemonSearch: PokemonSearchReducer,
    FetchPokemonName: FetchPokemonNameReducer,
    FetchPokemonData: FetchPokemonDataReducer,
    offsetData: offsetDataReducer,
    Evolution: PokemonEvolutionReducer,
    Stats: FetchPokemonStatsReducer
});

export default allReducers;