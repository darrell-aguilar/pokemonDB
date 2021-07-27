import {connect} from 'react-redux'
import ImageMissing from '../images/not-found.png'
import '../css/PokemonView.css'

function PokemonData(props) {

    function ImageNotFound(img) {
        img.target.src = ImageMissing;
      } 
      
    return (
    <div className="pokemonInfo">
        {props.dataFetched ? <p>Data is loading...</p> : 
            <div>
               <div className="img-container"><img src={`${props.FetchPokemonData.sprites.other['official-artwork'].front_default}`} alt={props.FetchPokemonData.name} onError={ImageNotFound}/>
               </div>
               <h2>{"#" + props.FetchPokemonData.id}</h2><h2>{props.FetchPokemonData.name.charAt(0).toUpperCase() + props.FetchPokemonData.name.slice(1)}</h2>
                <div>
                    <div className="pokemonTypesContainer">
                        {props.FetchPokemonData.types.map(type =>
                            <div key={type.type.name} className={`pokemonType ${type.type.name}`}>
                                {type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}
                            </div>
                        )}
                    </div>
                    <h4>Height: {props.FetchPokemonData.height}</h4>
                    <h4>Weight: {props.FetchPokemonData.weight}</h4>
                </div>
            </div>}
    </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        FetchPokemonData: state.FetchPokemonData
    }
}

export default connect(mapStateToProps)(PokemonData)