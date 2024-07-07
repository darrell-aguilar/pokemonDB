import "./PokemonDetails.scss"
import { PokemonCard } from "../PokemonCard"
import { SkeletonLoader } from "../SkeletonLoader"
import { useGetPokemonQuery } from "../../utils/apiSlice"
import { useParams } from "react-router"
import { PokemonInfo } from "../PokemonInfo"

export function PokemonDetails() {
  const { id } = useParams()

  const { data, isSuccess } = useGetPokemonQuery(id as string)
  let stats = {}

  if (data) {
    stats = {
      "Pokemon ID": data.id,
      height: data.height,
      weight: data.weight,
      "Base Experience": data.baseExperience,
    }
  }
  if (isSuccess && data)
    return (
      <div className="pokemon-details">
        <PokemonCard cardProps={data} />
        <PokemonInfo content={stats} types={data.types} title="Stats" />
      </div>
    )
  else
    return (
      <div className="pokemon-details">
        <SkeletonLoader />
      </div>
    )
}
