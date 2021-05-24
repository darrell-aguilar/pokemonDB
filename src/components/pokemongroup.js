import PokemonCard from './pokemoncard'
import {connect} from 'react-redux'

function PokemonGroup(props) {

    const filterPokemon = props.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(props.search.toLowerCase()));
    
    return (
          <div className="pokemonList">
             {filterPokemon.map((pokemonChar) => (<PokemonCard key={pokemonChar.name} pokemonName={pokemonChar.name} index={pokemonChar.url.slice(34, -1)}></PokemonCard>))}
          </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokemons: state.pokemonlist,
        search: state.pokemonsearch
    }
}

export default connect(mapStateToProps)(PokemonGroup)

