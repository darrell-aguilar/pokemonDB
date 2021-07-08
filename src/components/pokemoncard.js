import ImageMissing from '../images/not-found.png'
import {connect} from 'react-redux'
import {clickedPokemon} from '../reducers/getSinglePokemonName'
import {Link} from 'react-router-dom'

function PokemonCard(props) {
    
    function ImageNotFound(img) {
      img.target.src = ImageMissing;
    }
  
    const handleClick = () => {
      (props.getSinglePokemon(props.pokemonName))
    }
  
    return (
      <div className="pokemonName"><Link to={`/${props.pokemonName}`}>
        <div className="pokemon-image-container"><img onClick={handleClick} key={props.pokemonName} alt={`${props.pokemonName}`} title={`${props.pokemonName}`} onError={ImageNotFound} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.index}.png`}/>
        </div></Link><br/><br/>
        <div>{"#" + (props.index)}
        </div>
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