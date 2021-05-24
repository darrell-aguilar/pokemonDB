import PokemonCard from './pokemoncard'
import {connect} from 'react-redux'

function PokemonGroup(props) {

    const filterPokemon = props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(props.search.toLowerCase()));
    
    if (filterPokemon.length === 0)
    return (
        <div className="pokemonList">
        <h3>Pokemon not found!</h3>
        </div>
    )
    else
    return (
          <div className="pokemonList">
             {filterPokemon.map((pokemonChar) => (<PokemonCard key={pokemonChar.name} pokemonName={pokemonChar.name} index={pokemonChar.url.slice(34, -1)}></PokemonCard>))}
          </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonlist,
        search: state.pokemonsearch,
        offset: state.offsetData
    }
}

export default connect(mapStateToProps)(PokemonGroup)

