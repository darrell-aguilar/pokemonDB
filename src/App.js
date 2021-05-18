import './App.css';
import React from 'react';
import ImageMissing from './images/not-found.png'
import {useSelector, useDispatch} from 'react-redux'
import {useEffect} from 'react'
import {getPokemon} from './reducers/actions/getPokemon' 
import {checkMainPage} from './reducers/actions/checkMainPage'
import {searchPokemon} from './reducers/actions/searchPokemon';
import {getSinglePokemon} from './reducers/actions/getSinglePokemon'

function App() {
  const pokemons = useSelector(state => state.pokemonlist)
  const search = useSelector(state => state.pokemonsearch)
  const singlepokemondata = useSelector(state => state.singlepokemondata)
  const dispatch = useDispatch();
  const URL = 'https://pokeapi.co/api/v2/pokemon/?limit=10'

  useEffect(() => {
    getPokemonList();
  },[]);
  
  async function getPokemonList()  {
    const response = await fetch(URL)
    const data = await response.json()
    dispatch(getPokemon(data.results))
  }

  const handleChange = (event) => {
      dispatch(searchPokemon(event.target.value))
  }

  const filterPokemon = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));
    return (
      <div className="App">
        <Nav singlepokemondata={singlepokemondata} />
        {singlepokemondata ==='' && <Search onChange={handleChange} filterPokemon={filterPokemon}/>}
        {singlepokemondata ==='' && <PokemonGroup pokemon={filterPokemon} singlepokemondata={singlepokemondata}/>}
      </div>
    )
}

function Nav({singlepokemondata}) {

  return (
        <div className="navBar">
          <ul className="navItems">
            <li><a href="#/">Home</a></li>
            <li><a href="#/">Pokemon</a></li>
            <li><a href="#/">Abilities</a></li>
            <li><a href="#/">About</a></li>
          </ul>
        </div>
    )
}

function Search({onChange, filterPokemon}) {
  return (
    <div className="main">
        <div className="searchBar">
           <input className="pokemonSearch" placeholder="Type in PoKemon name to Filter" type="search" onChange={onChange}>{console.log()}</input>
        </div>
    </div>
  )
}

function PokemonGroup({pokemon, singlepokemondata}) {
  return (
        <div className="pokemonList">
           {pokemon.map(pokemonChar => (<PokemonSingle key={pokemonChar.name} pokemonName={pokemonChar.name} singlepokemondata={singlepokemondata}></PokemonSingle>))}
        </div>
  )
}

function PokemonSingle({key, pokemonName, singlepokemondata}) {
  
  const dispatch = useDispatch()

  function ImageNotFound(img) {
    img.target.src = ImageMissing;
  }

  function handleClick() {
    dispatch(getSinglePokemon(pokemonName))
  }

  return (
    <div className="pokemonName" ><img onClick={handleClick} alt={`${pokemonName}`} title={`${pokemonName}`} onError={ImageNotFound} src={`https://img.pokemondb.net/artwork/${pokemonName}.jpg`}/><br/><hr/><br/><div className="pokemonTitle">{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</div>
    </div>
  )
}

export default App;
