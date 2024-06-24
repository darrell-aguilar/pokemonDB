import "../css/PokemonContainer.scss"
import { useGetPokemonListQuery } from "../utils/apiSlice"
import PokemonCard from "./PokemonCard"
import { IPokemonListResult } from "../utils/types"

export default function PokemonContainer() {
  const { data, isLoading } = useGetPokemonListQuery({ limit: 30, offset: 0 })
  if (isLoading)
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
        {data?.map((pokemon: IPokemonListResult, index: number) => (
          <PokemonCard
            cardProps={{ ...pokemon, id: index + 1 }}
            key={pokemon.name}
          />
        ))}
      </div>
    )
}
