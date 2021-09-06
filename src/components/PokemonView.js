import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {SEARCH} from '../reducers/Search'
import {FETCH_POKEMON_DATA} from '../reducers/FetchPokemonData'
import PokemonData from './PokemonData'
import { offsetDataChange } from '../reducers/OffsetData'

function PokemonView(props, {match}) {

const URL = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`

const [dataFetched, setDataFetched] = useState(true)

useEffect(() => {
  getPokemonData()
})

async function getPokemonData()  {
const response = await fetch(URL)
const data = await response.json()
props.fetchedSinglePokemonData(data)
setDataFetched(false)
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
    singlepokemonname: state.singlepokemonname,
    FetchPokemonData: state.FetchPokemonData,
    offset: state.offset
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedSinglePokemonData : (fetchedData) => {dispatch({type:FETCH_POKEMON_DATA, payload:fetchedData})},
    resetPokemonFilter: (emptyString) => {dispatch({type:SEARCH, payload: emptyString})},
    resetOffsetData: (offset) => {dispatch({type: offsetDataChange, payload: offset})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonView)