import { PokemonTypes } from "../../utils/constants"
import { capitalize } from "../../utils/helpers"
import "./PokemonType.scss"

export type Type = keyof typeof PokemonTypes

type PokemonTypeProps = {
  types: Array<Type>
}

export function PokemonType({ types }: PokemonTypeProps | any) {
  const style = (type: Type): any => {
    return { backgroundColor: PokemonTypes[type] }
  }
  return (
    <div className="pokemon_type">
      <div className="pokemon_color-container">
        {types.map((slot: any, idx: number) => (
          <div
            key={idx}
            className="pokemon_color"
            style={style(slot.type.name)}
          >
            <p className="pokemon_text"> {capitalize(slot.type.name)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
