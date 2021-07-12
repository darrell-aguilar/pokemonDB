import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {search} from '../reducers/search'
import {getSinglePokemonData} from '../reducers/getSinglePokemonData'
import ViewPokemonData from './viewpokemondata'

function GetClickedPokemonData(props, {match}) {

const URL = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`

const [dataFetched, setDataFetched] = useState(true)
const [EvoChain, setEvoChain] = useState('');  

const GetSpeciesURL = `https://pokeapi.co/api/v2/pokemon-species/${props.singlepokemondata.id}`;

useEffect(() => {
  getPokemonData()
}, [])

async function getPokemonData()  {
const response = await fetch(URL)
const data = await response.json()
props.fetchedSinglePokemonData(data)
await getEvolutionChain();
setDataFetched(false)
}

async function getEvolutionChain() {
const response = await fetch(GetSpeciesURL)
const data = await response.json()
setEvoChain(data)
}

const handleClick = () => {
  props.resetPokemonFilter('')
}

    return (
        <div className="main">{console.log(EvoChain)}
          <Link to={"/"}><button onClick={handleClick} className='buttonFormat'>Back</button></Link>
          <ViewPokemonData dataFetched={dataFetched}/>
        </div>
      )
}

const mapStateToProps = (state) => {
  return {
    singlepokemonname: state.singlepokemonname,
    singlepokemondata: state.singlepokemondata
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchedSinglePokemonData: (fetchedData) => {dispatch({type:getSinglePokemonData, payload:fetchedData})},
    resetPokemonFilter: (emptyString) => {dispatch({type:search, payload: emptyString})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GetClickedPokemonData)