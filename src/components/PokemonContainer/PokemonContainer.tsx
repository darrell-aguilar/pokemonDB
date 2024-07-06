import "./PokemonContainer.scss"
import { useGetPokemonListQuery } from "../../utils/apiSlice"
import { PokemonCard } from "../PokemonCard"
import { IPokemonListResult } from "../../utils/types"

export function PokemonContainer() {
  const { data } = useGetPokemonListQuery({ limit: 30, offset: 0 })
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
