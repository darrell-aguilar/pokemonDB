import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import PokemonData from './PokemonData'
import {SEARCH} from '../reducers/Search'
import {FETCH_POKEMON_DATA} from '../reducers/FetchPokemonData'
import { POKEMON_EVOLUTION } from '../reducers/Evolution'
import { offsetDataChange } from '../reducers/OffsetData'
import {FETCH_POKEMON_NAME} from '../reducers/FetchPokemonName'
import { FETCH_POKEMON_STATS } from '../reducers/PokemonStats'

function PokemonView(props, {match}) {

const URL = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`

const [dataFetched, setDataFetched] = useState(false)

useEffect(() => {
  getPokemonData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])

async function getPokemonData()  {
  try {
    const response = await fetch(URL)
    const data = await response.json()
    getPokemonStats(data)

    const evolutionURL = `https://pokeapi.co/api/v2/pokemon-species/${data.id}`
    const evolutionResponse = await fetch(evolutionURL)
    const evolutiondata = await evolutionResponse.json()

    const evolutionChainURL = `${evolutiondata.evolution_chain.url}`
    const evolutionChainResponse = await fetch(evolutionChainURL)
    const evolutionChaindata = await evolutionChainResponse.json();

    var evolutionArray = [];
    var evolutionEndpoint = evolutionChaindata.chain;

    do {
      var evolutionDetails = evolutionEndpoint['evolution_details'][0];

      evolutionArray.push({
        "name" : evolutionEndpoint.species.name,
        "evolves_at" : !evolutionDetails ? 1 : evolutionDetails.min_level == null ? "N/A" : evolutionDetails.min_level,
        "pokemon_id": evolutionEndpoint.species.url.slice(42, evolutionEndpoint.species.url.length - 1)
      })

     
      if (evolutionEndpoint['evolves_to'].length > 1) {
        for (var pokemonCount = 1; pokemonCount < evolutionEndpoint["evolves_to"].length; pokemonCount++) {
          evolutionArray.push({
            "name" : evolutionEndpoint['evolves_to'][pokemonCount].species.name,
            "evolves_at" : !evolutionEndpoint['evolves_to'][pokemonCount] ? 1 : evolutionEndpoint['evolves_to']['min_level'] == null ? "N/A" : evolutionEndpoint['evolves_to']['min_level'],
            "pokemon_id": evolutionEndpoint['evolves_to'][pokemonCount].species.url.slice(42, evolutionEndpoint['evolves_to'][pokemonCount].species.url.length - 1)
          })
        }
      }
      evolutionEndpoint = evolutionEndpoint['evolves_to'][0];
    } while (evolutionEndpoint && evolutionEndpoint.hasOwnProperty("evolves_to"));

    props.addEvolutionChain(evolutionArray)
    props.fetchedSinglePokemonData(data)
    setDataFetched(true)
  } catch (err) {
    props.pokemonName("Unknown")
    console.error(err)
  }
}

function getPokemonStats(stats) {
  var statsArray = []
  for (var counter = 0; counter < stats.stats.length; counter++){
      statsArray.push({
        "name" : stats.stats[counter].stat.name,
        "value" : stats.stats[counter].base_stat
      })
  }
  props.addStats(statsArray)
}

const handleClick = () => {
  props.resetPokemonFilter('')
}

    return (
        <div className="main">
          <Link to={"/"}><button onClick={handleClick} className='buttonFormat'>Back</button></Link>
          <PokemonData dataFetched={dataFetched}/>
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
    addEvolutionChain : (evolution) => {dispatch({type: POKEMON_EVOLUTION, payload: evolution})},
    pokemonName: (pokemon) => {dispatch({type: FETCH_POKEMON_NAME, payload: pokemon})},
    fetchedSinglePokemonData : (fetchedData) => {dispatch({type:FETCH_POKEMON_DATA, payload:fetchedData})},
    resetPokemonFilter: (emptyString) => {dispatch({type:SEARCH, payload: emptyString})},
    resetOffsetData: (offset) => {dispatch({type: offsetDataChange, payload: offset})},
    addStats: (stats) => {dispatch({type: FETCH_POKEMON_STATS, payload: stats})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonView)