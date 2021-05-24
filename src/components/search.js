import {connect} from 'react-redux'
import {useEffect} from 'react';
import {search} from '../reducers/search';
import {GET_POKEMON} from '../reducers/pokemonlist'
import PokemonGroup from './pokemongroup'

function Search(props){

  useEffect(() => {
    getPokemonList();
  },[]);

  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=20'
  
  async function getPokemonList()  {
    const response = await fetch(URL)
    const data = await response.json()
    props.getPokemon(data.results)
    }

  const handleChange = (event) => {
    props.searchPokemon(event.target.value) 
}

return (
      <div className="main">
          <div className="searchBar">
             <input className="pokemonSearch" placeholder="Type in PoKemon name to Filter" type="search" onChange={handleChange}></input>
          </div>
          <PokemonGroup />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    pokemonlist: state.pokemonlist
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchPokemon: (searched) => {dispatch({type: search, payload: searched})},
    getPokemon: (pokemonlistobject) => {dispatch({type: GET_POKEMON, payload: pokemonlistobject})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)