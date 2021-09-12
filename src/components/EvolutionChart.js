import { connect } from "react-redux"


function EvolutionChart(props) {
    return (
        <div>
            <h4>Pokemon Evolution Chain</h4>
            {props.Evolution.map(e => <h5 key={e.name}>{e.name.charAt(0).toUpperCase() + e.name.slice(1, e.name.length)}<br/><h4>Evolves at Level {e.evolves_at}
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e.pokemon_id}.png`} style={{width:'150px'}}/></h4></h5>)}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      Evolution: state.Evolution
    };
  };

export default connect(mapStateToProps)(EvolutionChart)