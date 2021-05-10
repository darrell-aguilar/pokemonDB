import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      pokemonID: 0,
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
    componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=50"
    fetch(url)
    .then(res => res.json())
    .then(response => this.setState({
    pokemons: response.results
    }))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filterPokemon = this.state.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.state.search.toLowerCase()));
  return (
    <div className="App">
      <Nav />
      <FeatureAndSearch changed={this.handleChange}/>
      <PokemonGroup pokemon={filterPokemon} id={this.pokemonID}/>
    </div>
  )};
}

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="navBar">
          <ul className="navItems">
            <li><a href="#/">Home</a></li>
            <li><a href="#/">Pokemon</a></li>
            <li><a href="#/">Abilities</a></li>
            <li><a href="#/">About</a></li>
          </ul>
        </div>
      </div>
    )
  }
}


class FeatureAndSearch extends React.Component {
  render() {
    return (
      <div>
        <div className="main">
          <div className="feature">
          </div>
          <div className="searchBar">
            <input className="pokemonSearch" placeholder="Type in PoKemon name to Filter" type="search" onChange={this.props.changed}></input>
          </div>
        </div>
       
      </div>
    )
  }
}


class PokemonGroup extends React.Component {
  render() {
    return (
      <div>
         <div className="pokemonList">{this.props.pokemon.map(pokemonChar => (<PokemonSingle key={pokemonChar.name} pokemonName={pokemonChar.name}></PokemonSingle>))}</div>
      </div>
    )
  }
}


class PokemonSingle extends React.Component {
  constructor(props){
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    alert("This pokemon is "+this.props.pokemonName)
  }
  render() {
    return (
      <div className="pokemonName" onClick={this.handleClick}><img alt={`${this.props.pokemonName}`} title={`${this.props.pokemonName}`} src={`https://img.pokemondb.net/artwork/${this.props.pokemonName}.jpg`}/><br/><div className="pokemonTitle">{this.props.pokemonName.charAt(0).toUpperCase() + this.props.pokemonName.slice(1)}</div>
      </div>
    )
  }
}
export default App;
