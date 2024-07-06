import "./PokemonDetails.scss"
import { PokemonCard } from "../PokemonCard"
import { SkeletonLoader } from "../SkeletonLoader"
import { useGetPokemonQuery } from "../../utils/apiSlice"
import { useParams } from "react-router"
import PokemonInfoContainer from "../PokemonInfoContainer/PokemonInfoContainer"
import { PokemonType } from "../PokemonType/PokemonType"

export function PokemonDetails() {
  const { id } = useParams()

  const { data, isSuccess } = useGetPokemonQuery(id as string)
  let stats = {}

  if (data) {
    stats = {
      height: data.height,
      weight: data.weight,
      "Base Experience": data.baseExperience,
    }
  }
  if (isSuccess && data)
    return (
      <div className="pokemon-details">
        <PokemonCard cardProps={data} />
        <PokemonInfoContainer content={stats} title="Stats" />
        <PokemonType types={data?.types} />
      </div>
    )
  else
    return (
      <div className="pokemon-details">
        <SkeletonLoader />
      </div>
    )
}
