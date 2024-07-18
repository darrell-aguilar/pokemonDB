import "./EvolutionChart.scss"
import { useGetPokemonEvolutionQuery } from "../../utils/apiSlice"
import { PokemonCard } from "../PokemonCard"
import { SkeletonLoader } from "../SkeletonLoader"

type Props = {
  id: string
}

export function EvolutionChart({ id }: Props) {
  const { data, isFetching, error } = useGetPokemonEvolutionQuery(id, {
    skip: !id,
  })

  if (error) return <div></div>
  else
    return (
      <div className="evolution-chart">
        <h4 className="evolution-chart__title">Evolution Chain</h4>
        <div className="evolution-chart__container">
          {isFetching || !id ? (
            <SkeletonLoader count={3} />
          ) : (
            data?.map((prop) => (
              <PokemonCard key={prop.name} cardProps={prop}></PokemonCard>
            ))
          )}
        </div>
      </div>
    )
}
