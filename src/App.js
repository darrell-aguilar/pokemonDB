import './App.css';
import React from 'react';
import {connect} from 'react-redux'
import Nav from './components/nav'
import Search from './components/search'
import PokemonGroup from './components/pokemongroup'
import SinglePokemonData from './components/singlepokemondata'

function App(props) {
  
  if (props.singlepokemondata !== '')
    return (
      <div className="App">
      <Nav />
      <SinglePokemonData />
      </div>
    )
    return (
      <div className="App">
        <Nav />
        <Search />
        <PokemonGroup />
      </div>
    )
}

const mapStateToProps = (state) => {
  return {
    singlepokemondata: state.singlepokemondata
  }
}

export default connect(mapStateToProps)(App);
