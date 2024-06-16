import { connect } from "react-redux"
import ImageMissing from "../images/not-found.png"
import { FETCH_POKEMON_NAME } from "../reducers/FetchPokemonName"
import { Link, useNavigate } from "react-router-dom"
import "../css/App.css"

function PokemonGroup(props) {
  const PokemonCardRender = connect(null, mapDispatchToProps)(PokemonCard)
  const filterPokemon = props.pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(props.search.toLowerCase())
  )
  const navigate = useNavigate()

  const searchPokemon = () => {
    props.FetchPokemonName(props.search)
    navigate(`/${props.search}`, { replace: true })
  }

  if (filterPokemon.length === 0)
    return (
      <div className="pokemonNotFoundContainer">
        <div className="pokemonNotFound">
          <h2>Pokemon not found!</h2>
          <div id="text">
            <p style={{ padding: "20px" }}>
              <b>This Pokemon is not on the main page</b>
            </p>
            <p style={{ padding: "0 20px" }}>
              <b>
                To search for the PoKemon you are looking for, type in the full
                PoKemon name above and click Search
              </b>
            </p>
          </div>
          <button className="buttonFormat" onClick={searchPokemon}>
            Search
          </button>
        </div>
      </div>
    )
  else
    return (
      <div className="pokemonList">
        {filterPokemon.map((pokemonChar) => (
          <PokemonCardRender
            key={pokemonChar.name}
            pokemonName={pokemonChar.name}
            index={pokemonChar.url.slice(34, -1)}
          ></PokemonCardRender>
        ))}
      </div>
    )
}

export function PokemonCard(props) {
  function ImageNotFound(img) {
    img.target.src = ImageMissing
  }

  const handleClick = () => {
    props.FetchPokemonName(props.pokemonName)
  }

  return (
    <div className="pokemonName">
      <Link to={`/${props.pokemonName}`}>
        <div className="pokemon-image-container">
          <img
            className="img-thumbnail"
            onClick={handleClick}
            key={props.pokemonName}
            alt={`${props.pokemonName}`}
            title={`${
              props.pokemonName.charAt(0).toUpperCase() +
              props.pokemonName.slice(1)
            }`}
            onError={ImageNotFound}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index}.png`}
          />
        </div>
      </Link>
      <br />
      <br />
      <div>{"#" + props.index}</div>
      <div className="pokemonTitle" onClick={handleClick}>
        {props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    FetchPokemonName: (ownProps) => {
      dispatch({ type: FETCH_POKEMON_NAME, payload: ownProps })
    },
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemonlist,
    search: state.PokemonSearch,
    offset: state.offsetData,
    pokemonName: state.FetchPokemonName,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGroup)
