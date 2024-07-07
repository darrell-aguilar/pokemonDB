import "./PokemonInfo.scss"
import { capitalize } from "../../utils/helpers"
import { PokemonType, Type } from "../PokemonType"

type PokemonInfoContainerProps = {
  content: Object
  types: Array<Type>
  title: String
}

export function PokemonInfo({
  content,
  title,
  types,
}: PokemonInfoContainerProps) {
  return (
    <div className="pokemon-info">
      <h3 className="pokemon-info__title">{title}</h3>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} className="pokemon-info__container">
          <p className="pokemon-info__subtitle">{capitalize(key)}</p>
          <p className="pokemon-info__content">{value}</p>
        </div>
      ))}
      <div className="pokemon-info__container">
        <p className="pokemon-info__subtitle">Types</p>
        <PokemonType types={types} />
      </div>
    </div>
  )
}
