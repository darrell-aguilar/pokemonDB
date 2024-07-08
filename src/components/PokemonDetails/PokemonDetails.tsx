import "./PokemonDetails.scss"
import { PokemonCard } from "../PokemonCard"
import { SkeletonLoader } from "../SkeletonLoader"
import { useGetPokemonQuery } from "../../utils/apiSlice"
import { useParams } from "react-router"
import { PokemonInfo } from "../PokemonInfo"
import { Stats } from "../Stats"

export function PokemonDetails() {
  const { id } = useParams()

  const { data, isFetching } = useGetPokemonQuery(id as string)

  if (isFetching)
    return (
      <div className="pokemon-details">
        <SkeletonLoader width="250px" height="300px" />
        <SkeletonLoader width="400px" />
      </div>
    )
  else if (!isFetching && data)
    return (
      <div className="pokemon-details">
        <PokemonCard cardProps={data} />
        <PokemonInfo content={data.info} types={data.types} title="Info" />
        <Stats stats={data.stats} />
      </div>
    )
}
