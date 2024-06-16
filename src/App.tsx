import "./css/App.css"
import React, { ReactElement } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { connect } from "react-redux"
import Nav from "./components/Nav"
import Home from "./components/Home"
import PokemonView from "./components/PokemonView"

function App(): ReactElement {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<PokemonView />} />
        </Routes>
      </div>
    </Router>
  )
}

const mapStateToProps = (state: any) => {
  return {
    singlepokemonname: state.singlepokemonname,
  }
}

export default connect(mapStateToProps)(App)
