import "./PokemonDetails.scss"
import { PokemonCard } from "../PokemonCard"
import { SkeletonLoader } from "../SkeletonLoader"
import { PokemonInfo } from "../PokemonInfo"
import { Stats } from "../Stats"
import { IPokemonDetails } from "../../utils/types"

type PokemonDetailsProps = {
  data: IPokemonDetails | undefined
  isFetching: boolean
}

export function PokemonDetails({ data, isFetching }: PokemonDetailsProps) {
  if (isFetching)
    return (
      <div className="pokemon-details">
        <SkeletonLoader width="250px" height="300px" />
        <SkeletonLoader width="400px" height="300px" />
        <SkeletonLoader width="450px" height="350px" />
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
