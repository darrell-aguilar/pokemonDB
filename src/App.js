import './App.css';
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Nav from './components/nav'
import Search from './components/search'
import SinglePokemonName from './components/singlepokemonname'

function App(props) {
    return (
      <Router>
        <div className="App">
          <Nav />
            <Switch>
              <Route path="/" exact component={Search}/>
              <Route path="/:id" component={SinglePokemonName}/>
            </Switch>
        </div>
      </Router>
    )
    // return (
    //   <div className="App">
    //     <Nav />
    //     <Search />
    //     <PokemonGroup />
    //   </div>
    // )
}

const mapStateToProps = (state) => {
  return {
    singlepokemonname: state.singlepokemonname
  }
}

export default connect(mapStateToProps)(App);
