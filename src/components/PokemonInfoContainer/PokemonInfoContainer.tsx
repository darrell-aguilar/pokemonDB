import { capitalize } from "../../utils/helpers"

type PokemonInfoContainerProps = {
  content: Object
  title: String
}

function PokemonInfoContainer({ content, title }: PokemonInfoContainerProps) {
  return (
    <div className="pokemon-info">
      <h3 className="pokemon-info__title">{title}</h3>
      {Object.entries(content).map(([key, value]) => (
        <div key={key} className="pokemon-info__container">
          <p className="pokemon-info__subtitle">{capitalize(key)}</p>
          <p className="pokemon-info__content">{value}</p>
        </div>
      ))}
    </div>
  )
}

export default PokemonInfoContainer
