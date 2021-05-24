import {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {getSinglePokemonData} from '../reducers/getSinglePokemonData'
import ViewPokemonData from './viewpokemondata'

function SinglePokemonName(props, {match}) {

const URL = `https://pokeapi.co/api/v2/pokemon/${props.match.params.id}`

const [dataFetched, setDataFetched] = useState(true)

useEffect(() => {
  getPokemonData()
}, [])

async function getPokemonData()  {
  const response = await fetch(URL)
  const data = await response.json()
  props.fetchedSinglePokemonData(data)
  setDataFetched(false)
  }
    return (
        <div className="main">
          <Link to={"/"}><button className='back_to_home'>Back</button></Link>
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

const mapDispatchToProps= (dispatch) => {
  return {
    fetchedSinglePokemonData: (fetchedData) => {dispatch({type:getSinglePokemonData, payload:fetchedData})}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SinglePokemonName)