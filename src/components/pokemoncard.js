import ImageMissing from '../images/not-found.png'
import {connect} from 'react-redux'
import {clickedPokemon} from '../reducers/getSinglePokemonData'

function PokemonCard(props) {
    
    function ImageNotFound(img) {
      img.target.src = ImageMissing;
    }
  
    const handleClick = () => {
      console.log(props.getSinglePokemon(props.pokemonName))
    }
  
    return (
      <div className="pokemonName" ><img onClick={handleClick} key={props.pokemonName} alt={`${props.pokemonName}`} title={`${props.pokemonName}`} onError={ImageNotFound} src={`https://img.pokemondb.net/artwork/${props.pokemonName}.jpg`}/><br/><hr/><br/>
        <div className="pokemonTitle">{props.pokemonName.charAt(0).toUpperCase() + props.pokemonName.slice(1)}
        </div>
      </div>    
      )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSinglePokemon: (ownProps) => {dispatch({type: clickedPokemon, payload: ownProps})}
  }
}

export default connect(null, mapDispatchToProps)(PokemonCard);