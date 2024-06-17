import { connect } from "react-redux"
import { useEffect } from "react"
import { SEARCH } from "../reducers/Search"
import { GET_POKEMON, GET_MORE_POKEMON } from "../reducers/Pokemonlist"
import { offsetDataChange } from "../reducers/OffsetData"
import { LOADING } from "../reducers/Loading"
import PokemonGroup from "./PokemonGroup"
import { pokeApi } from "../api/api"
import { OFFSET } from "../helpers/constants"
import { Dispatch } from "@reduxjs/toolkit"

function Home(props: any) {
  useEffect(() => {
    if (props.pokemonlist.length === 0) getPokemonRange(props.offset, "0")
  })

  async function getPokemonRange(limit: string, offset: string) {
    const response = await pokeApi.getPokemonList(limit, offset)
    if (props.pokemonlist.length === 0) {
      props.getPokemon(response.data.results)
      props.setLoadedState(false)
    } else props.getMorePokemon(response.data.results)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.searchPokemon(event.target?.value.toLowerCase())
  }

  const handleClick = () => {
    getPokemonRange(OFFSET, props.offset)
    props.setOffsetData(OFFSET + props.offset)
  }

  if (props.loading)
    return (
      <div className="main">
        <div className="load-screen">
          <h3 className="fetch-header">Data is being fetched...</h3>
          <div className="loading-icon"></div>
        </div>
      </div>
    )
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
    )
}

const mapStateToProps = (state: any) => {
  return {
    pokemonlist: state.pokemonlist,
    offset: state.offsetData,
    search: state.PokemonSearch,
    loading: state.Loading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    searchPokemon: (searched: string) => {
      dispatch({ type: SEARCH, payload: searched })
    },
    getPokemon: (pokemonlistobject: string) => {
      dispatch({ type: GET_POKEMON, payload: pokemonlistobject })
    },
    getMorePokemon: (updatedpokemonlist: string) => {
      dispatch({ type: GET_MORE_POKEMON, payload: updatedpokemonlist })
    },
    setOffsetData: (offsetNumber: string) => {
      dispatch({ type: offsetDataChange, payload: offsetNumber })
    },
    setLoadedState: (loadstate: string) => {
      dispatch({ type: LOADING, payload: loadstate })
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
