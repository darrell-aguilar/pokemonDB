import "./App.scss"
import React, { Suspense, ReactElement } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Nav } from "./components/Nav/Nav"
import { Loader } from "./components/Loader/Loader"

const Home = React.lazy(() => import("./components/Home"))
const PokemonView = React.lazy(() => import("./components/PokemonView"))

export default function App(): ReactElement {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <div className="app">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<PokemonView />} />
          </Routes>
        </div>
      </Router>
    </Suspense>
  )
}
