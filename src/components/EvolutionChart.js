import '../css/Evolution.css'
import { connect } from "react-redux"

function EvolutionChart(props) {

    return (
        <div className="Evolution_container">
            <h4>Pokemon Evolution Chain</h4>
            <div className="evolution">
                {props.Evolution.map(e => 
                  <div className="individual-evolution" key={e.name}>
                      <a href={`/${e.name}`}>
                        <h4>
                          {e.name.charAt(0).toUpperCase() + e.name.slice(1, e.name.length)}</h4><br/>
                        <div className="pokemon-image-evo">
                          <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.pokemon_id}.png`} 
                          alt={e.name.charAt(0).toUpperCase() + e.name.slice(1, e.name.length)}
                          title={e.name.charAt(0).toUpperCase() + e.name.slice(1, e.name.length)}/>
                        </div>
                      </a>  
                    <h5>Level {e.evolves_at}</h5>
                  </div>)}
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      Evolution: state.Evolution
    };
  };

export default connect(mapStateToProps)(EvolutionChart)