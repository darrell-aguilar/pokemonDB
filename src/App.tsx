import "./css/App.scss"
import { ReactElement } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import Nav from "./components/Nav"
import Home from "./components/Home"
import PokemonView from "./components/PokemonView"
import { store } from "./reducers/store"

export default function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PokemonView />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  )
}
