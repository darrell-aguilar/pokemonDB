import {connect} from 'react-redux'
import ImageMissing from '../images/not-found.png'

function ViewPokemonData(props) {

    function ImageNotFound(img) {
        img.target.src = ImageMissing;
      }

    return (
    <div className="pokemonInfo">
        {props.dataFetched ? <p>Data is loading...</p> : 
            <div><img onError={ImageNotFound} src={props.singlepokemondata.sprites.other.dream_world.front_default} alt={props.singlepokemondata.name}/><h3>{"#" + props.singlepokemondata.id}</h3><h3>{props.singlepokemondata.name.charAt(0).toUpperCase() + props.singlepokemondata.name.slice(1)}</h3></div>}
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        singlepokemondata: state.singlepokemondata
    }
}

export default connect(mapStateToProps)(ViewPokemonData)