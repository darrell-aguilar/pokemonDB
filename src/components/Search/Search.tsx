import "./Search.scss"
import { useGetAllPokemonQuery } from "../../utils/apiSlice"
import { Loader } from "../Loader"
import { useEffect, useState } from "react"
import { IPokemonListResult } from "../../utils/types"
import { ARTWORK_URL } from "../../utils/constants"
import { Link } from "react-router-dom"

export function Search() {
  const { data, isFetching } = useGetAllPokemonQuery()
  const [pokemonResult, setPokemonResult] = useState<
    IPokemonListResult[] | null
  >()
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (searchValue.length > 2) {
      if (!pokemonResult) {
        setLoading(true)
      }
      const filteredList = data?.filter((pokemon) =>
        pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
      )

      setPokemonResult(filteredList)

      setTimeout(() => {
        setLoading(false)
      }, 500)
    } else setPokemonResult(null)
  }, [searchValue])

  if (isFetching) {
    return <Loader />
  } else
    return (
      <div className="search">
        <input
          className="search_input"
          placeholder="Enter at least 3 characters"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        {loading && <p>Loading results...</p>}
        {pokemonResult && (
          <div className="search_result">
            {pokemonResult?.map((pokemon) => (
              <Link
                to={`/${pokemon.name}`}
                className={loading ? "search_link--hidden" : ""}
                key={pokemon.name}
              >
                <div
                  className="search_item"
                  aria-label={pokemon.name}
                  key={pokemon.name}
                >
                  <img
                    className="search_image"
                    alt={pokemon.name}
                    src={`${ARTWORK_URL}/${pokemon.id}.png`}
                  />
                  <p className="search_name">{pokemon.title}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
        {searchValue.length > 2 && pokemonResult?.length === 0 && !loading && (
          <div>No pokemon found</div>
        )}
      </div>
    )
}
