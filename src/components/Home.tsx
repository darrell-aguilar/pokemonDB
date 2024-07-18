import "./Home.scss"
import { Link } from "react-router-dom"
import { PokemonContainer } from "./PokemonContainer"

export default function Home() {
  return (
    <div>
      <Link data-testid="search-link" to="/search">
        <button className="search_button">Search all Pokemon</button>
      </Link>
      <PokemonContainer />
    </div>
  )
}
