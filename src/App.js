import "./css/App.css"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { connect } from "react-redux"
import Nav from "./components/Nav"
import MainBody from "./components/MainBody"
import PokemonView from "./components/PokemonView"

function App(props) {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={MainBody} />
          <Route path="/:id" component={PokemonView} />
        </Switch>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => {
  return {
    singlepokemonname: state.singlepokemonname,
  }
}

export default connect(mapStateToProps)(App)
