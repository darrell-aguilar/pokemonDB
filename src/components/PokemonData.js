import { connect } from "react-redux";
import ImageMissing from "../images/not-found.png";
import "../css/PokemonView.css";

function PokemonData(props) {
  function ImageNotFound(img) {
    img.target.src = ImageMissing;
  }
  if (props.FetchPokemonName === "Unknown")
    return (
      <div className="pokemonInfo">
        Unable to locate this pokemon! The URL may not be valid
      </div>
    );
  else
    return (
      <div className="pokemonInfo">
        {props.dataFetched ? (
          <div>
            <div className="img-container">
              <img
                src={`${props.FetchPokemonData.sprites.other["official-artwork"].front_default}`}
                alt={props.FetchPokemonData.name}
                onError={ImageNotFound}
              />
            </div>
            <h2>{"#" + props.FetchPokemonData.id}</h2>
            <h2>
              {props.FetchPokemonData.name.charAt(0).toUpperCase() +
                props.FetchPokemonData.name.slice(1)}
            </h2>
            <div>
              <div className="pokemonTypesContainer">
                {props.FetchPokemonData.types.map((type) => (
                  <div
                    key={type.type.name}
                    className={`pokemonType ${type.type.name}`}
                  >
                    {type.type.name.charAt(0).toUpperCase() +
                      type.type.name.slice(1)}
                  </div>
                ))}
              </div>
              <h4>Height: {props.FetchPokemonData.height}</h4>
              <h4>Weight: {props.FetchPokemonData.weight}</h4>
              <h4>Pokemon Evolution Chain</h4>
                      {[props.Evolution.map(e => <h5 key={e.name}>{e.name.charAt(0).toUpperCase() + e.name.slice(1, e.name.length)}</h5>)]}
            </div>
          </div>
        ) : (<p>Fetching data from API...</p>)}
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
  return {
    Evolution: state.Evolution,
    FetchPokemonData: state.FetchPokemonData,
    FetchPokemonName: state.FetchPokemonName,
  };
};

export default connect(mapStateToProps)(PokemonData);
