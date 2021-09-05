import { connect } from "react-redux";
import { useEffect } from "react";
import { SEARCH } from "../reducers/Search";
import { GET_POKEMON, GET_MORE_POKEMON } from "../reducers/pokemonlist";
import { offsetDataChange } from "../reducers/offsetData";
import { LOADING } from "../reducers/Loading";
import PokemonGroup from "./PokemonGroup";

function MainBody(props) {
  useEffect(() => {
    if (props.pokemonlist.length === 0) getPokemonList();
  });

  var URL = `https://pokeapi.co/api/v2/pokemon/?limit=${props.offset}`;

  async function getPokemonList() {
    const response = await fetch(URL);
    const data = await response.json();
    if (props.pokemonlist.length === 0) {
      props.getPokemon(data.results);
      props.setLoadedState(false);
    } else props.getMorePokemon(data.results);
  }

  const handleChange = (event) => {
    props.searchPokemon(event.target.value);
  };
  const handleClick = () => {
    URL = `https://pokeapi.co/api/v2/pokemon/?offset=${props.offset}?limit=${
      props.offset + 20
    }`;
    getPokemonList();
    props.setOffsetData(props.offset + 20);
  };

  if (props.loading === true)
    return (
      <div className="main">
        <h3>Data is being fetched...</h3>
      </div>
    );
  else
    return (
      <div className="main">
        <div className="searchBar">
          <input
            className="pokemonSearch"
            placeholder="Type in PoKemon name to Filter"
            type="search"
            onChange={handleChange}
          ></input>
        </div>
        <PokemonGroup />
        {props.search === "" && (
          <button onClick={handleClick} className="loadMore buttonFormat">
            Load more
          </button>
        )}
      </div>
    );
}

const mapStateToProps = (state) => {
  return {
    pokemonlist: state.pokemonlist,
    offset: state.offsetData,
    search: state.PokemonSearch,
    loading: state.Loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchPokemon: (searched) => {
      dispatch({ type: SEARCH, payload: searched });
    },
    getPokemon: (pokemonlistobject) => {
      dispatch({ type: GET_POKEMON, payload: pokemonlistobject });
    },
    getMorePokemon: (updatedpokemonlist) => {
      dispatch({ type: GET_MORE_POKEMON, payload: updatedpokemonlist });
    },
    setOffsetData: (offsetNumber) => {
      dispatch({ type: offsetDataChange, payload: offsetNumber });
    },
    setLoadedState: (loadstate) => {
      dispatch({ type: LOADING, payload: loadstate });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainBody);
