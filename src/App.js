import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      pokemons: [],
      search: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
    componentDidMount() {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=100"
    fetch(url)
    .then(response => response.json())
    .then(result => this.setState({
    pokemons: result.results
    }))
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    const filterPokemon = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.search));
  return (
    <div className="App">
      <Nav />
      <FeatureAndSearch changed={this.handleChange}/>
      <Items pokemon={filterPokemon} />
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


class Items extends React.Component {
  render() {
    const pokemonListProps = this.props.pokemon.map(x => <div className="pokemonCard" key={x.name}>{x.name}</div>);
    return (
      <div>
         <div className="pokemonList">{pokemonListProps}</div>
      </div>
    )
  }
}

export default App;
