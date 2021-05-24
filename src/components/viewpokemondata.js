import {connect} from 'react-redux'
import ImageMissing from '../images/not-found.png'

function ViewPokemonData(props) {

    function ImageNotFound(img) {
        img.target.src = ImageMissing;
      }

    return (
    <div className="pokemonInfo">
        {props.dataFetched ? <p>Data is loading...</p> : 
            <div><img src={`${props.singlepokemondata.sprites.other.dream_world.front_default}`} alt={props.singlepokemondata.name} onError={ImageNotFound}/><h2>{"#" + props.singlepokemondata.id}</h2><h2>{props.singlepokemondata.name.charAt(0).toUpperCase() + props.singlepokemondata.name.slice(1)}</h2>
                <div>
                    <h4>Height: {props.singlepokemondata.height}</h4>
                    <h4>Weight: {props.singlepokemondata.weight}</h4>
                </div>
            </div>}
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        singlepokemondata: state.singlepokemondata
    }
}

export default connect(mapStateToProps)(ViewPokemonData)