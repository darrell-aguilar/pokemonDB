import "../css/EvolutionChart.scss"
import { useGetPokemonEvolutionQuery } from "../utils/apiSlice"
import PokemonCard from "./PokemonCard"

type Props = {
  id: string
}

function EvolutionChart({ id }: Props) {
  const { data } = useGetPokemonEvolutionQuery(id)

  return (
    <div className="evolution-chart">
      <h4 className="evolution-chart__title">Evolution Chain</h4>
      <div className="evolution-chart__container">
        {data?.map((prop) => (
          <PokemonCard
            key={prop.name}
            cardProps={{ ...prop, fetchAll: true }}
          ></PokemonCard>
        ))}
      </div>
    </div>
  )
}

export default EvolutionChart
