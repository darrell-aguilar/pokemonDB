import { connect } from "react-redux";
import ImageMissing from "../images/not-found.png";
import "../css/PokemonView.css";
import EvolutionChart from '../components/EvolutionChart'
import Stats from "../components/Stats";

function PokemonData(props) {
  function ImageNotFound(img) {
    img.target.src = ImageMissing;
  }
  if (props.FetchPokemonName === "Unknown")
    return (
      <div className="pokemonInfo">
        <h1>Error 404</h1>
        <h1>Pokemon not found</h1><br/>
        <p>This Pokemon cannot be found</p>
        <p>Please head back to the main page and search again</p>
      </div>
    );
  else
    return (
      <div className="pokemonInfo">
        {props.dataFetched ? (
          <div>
            <div className="pokemon-data-container">
              <div className="pokemon-name">
                <h2>{"#" + props.FetchPokemonData.id}</h2>
                <h1>
                  {props.FetchPokemonData.name.charAt(0).toUpperCase() +
                    props.FetchPokemonData.name.slice(1)}
                </h1>
              </div>
              <div className="img-data">
                <div className="img-container">
                  <img
                    src={`${props.FetchPokemonData.sprites.other["official-artwork"].front_default}`}
                    alt={props.FetchPokemonData.name}
                    onError={ImageNotFound}
                  />
                <div className="classdata">
                  <div className="height-weight">
                    <h4>Height: {props.FetchPokemonData.height}</h4>
                    <h4>Weight: {props.FetchPokemonData.weight}</h4>
                  </div>
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
                  </div>
                </div>
                <Stats />
              </div>
            </div>
            <EvolutionChart />
          </div>
        ) : (<div className="load-screen">
            <p>Fetching data from API...</p>
            <div className="loading-icon"></div>
            </div>)}
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
