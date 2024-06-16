import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import PokemonData from "./PokemonData"
import { SEARCH } from "../reducers/Search"
import { FETCH_POKEMON_DATA } from "../reducers/FetchPokemonData"
import { POKEMON_EVOLUTION } from "../reducers/Evolution"
import { offsetDataChange } from "../reducers/OffsetData"
import { FETCH_POKEMON_NAME } from "../reducers/FetchPokemonName"
import { FETCH_POKEMON_STATS } from "../reducers/PokemonStats"
import { pokeApi } from "../api/api"

function PokemonView(props, { match }) {
  const navigate = useNavigate()
  const params = useParams()
  const URL = `https://pokeapi.co/api/v2/pokemon/${params.id}`

  const [dataFetched, setDataFetched] = useState(false)

  useEffect(() => {
    getPokemonData()
  }, [])

  async function getPokemonData() {
    try {
      const pokemon = await pokeApi.getPokemon(params.id)
      getPokemonStats(pokemon.data.stats)

      const evolutiondata = await pokeApi.getPokemonEvolution(pokemon.data.id)
      const evolutionChainURL = `${evolutiondata.data.evolution_chain.url}`
      const evolutionChainResponse = await fetch(evolutionChainURL)
      const evolutionChaindata = await evolutionChainResponse.json()

      var evolutionArray = []
      var evolutionEndpoint = evolutionChaindata.chain

      do {
        var evolutionDetails = evolutionEndpoint["evolution_details"][0]

        evolutionArray.push({
          name: evolutionEndpoint.species.name,
          evolves_at: !evolutionDetails
            ? 1
            : evolutionDetails.min_level == null
            ? "N/A"
            : evolutionDetails.min_level,
          pokemon_id: evolutionEndpoint.species.url.slice(
            42,
            evolutionEndpoint.species.url.length - 1
          ),
        })

        if (evolutionEndpoint["evolves_to"].length > 1) {
          for (
            var pokemonCount = 1;
            pokemonCount < evolutionEndpoint["evolves_to"].length;
            pokemonCount++
          ) {
            evolutionArray.push({
              name: evolutionEndpoint["evolves_to"][pokemonCount].species.name,
              evolves_at: !evolutionEndpoint["evolves_to"][pokemonCount]
                ? 1
                : evolutionEndpoint["evolves_to"]["min_level"] == null
                ? "N/A"
                : evolutionEndpoint["evolves_to"]["min_level"],
              pokemon_id: evolutionEndpoint["evolves_to"][
                pokemonCount
              ].species.url.slice(
                42,
                evolutionEndpoint["evolves_to"][pokemonCount].species.url
                  .length - 1
              ),
            })
          }
        }
        evolutionEndpoint = evolutionEndpoint["evolves_to"][0]
      } while (
        evolutionEndpoint &&
        evolutionEndpoint.hasOwnProperty("evolves_to")
      )

      props.addEvolutionChain(evolutionArray)
      props.fetchedSinglePokemonData(pokemon.data)
      setDataFetched(true)
    } catch (err) {
      props.pokemonName("Unknown")
      console.error(err)
    }
  }

  function getPokemonStats(stats) {
    var statsArray = []
    for (var counter = 0; counter < stats.length; counter++) {
      statsArray.push({
        name: stats[counter].stat.name,
        value: stats[counter].base_stat,
      })
    }
    props.addStats(statsArray)
  }

  async function fetchPage(pokemonID) {
    const getPokemonName = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
    )
    const response = await getPokemonName.json()
    navigate(`/${response.name}`)
    navigate(0)
  }

  const switchPage = (event) => {
    switch (event.target.value) {
      case "previous": {
        fetchPage(props.FetchPokemonData.id - 1)
        break
      }

      case "next": {
        fetchPage(props.FetchPokemonData.id + 1)
        break
      }
      default:
        break
    }
  }

  return (
    <div className="main">
      {props.FetchPokemonName !== "Unknown" && (
        <div className="next-and-previous">
          <button
            onClick={switchPage}
            disabled={props.FetchPokemonData.id === 1 ? true : false}
            value="previous"
            className="buttonFormat switchbutton"
          >
            Previous
          </button>
          <button
            onClick={switchPage}
            value="next"
            className="buttonFormat switchbutton"
          >
            Next
          </button>
        </div>
      )}
      <PokemonData dataFetched={dataFetched} />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    FetchPokemonName: state.FetchPokemonName,
    FetchPokemonData: state.FetchPokemonData,
    offset: state.offset,
    Evolution: state.Evolution,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addEvolutionChain: (evolution) => {
      dispatch({ type: POKEMON_EVOLUTION, payload: evolution })
    },
    pokemonName: (pokemon) => {
      dispatch({ type: FETCH_POKEMON_NAME, payload: pokemon })
    },
    fetchedSinglePokemonData: (fetchedData) => {
      dispatch({ type: FETCH_POKEMON_DATA, payload: fetchedData })
    },
    resetPokemonFilter: (emptyString) => {
      dispatch({ type: SEARCH, payload: emptyString })
    },
    resetOffsetData: (offset) => {
      dispatch({ type: offsetDataChange, payload: offset })
    },
    addStats: (stats) => {
      dispatch({ type: FETCH_POKEMON_STATS, payload: stats })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonView)
