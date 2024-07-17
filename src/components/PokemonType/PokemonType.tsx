import { CSSProperties } from "react"
import { PokemonTypes } from "../../utils/constants"
import { capitalize } from "../../utils/helpers"
import { IPokemonType } from "../../utils/types"
import "./PokemonType.scss"

type PokemonTypeProps = {
  types: Array<IPokemonType>
}

export function PokemonType({ types }: PokemonTypeProps) {
  const style = (name: keyof typeof PokemonTypes): CSSProperties => {
    return { backgroundColor: PokemonTypes[name] }
  }
  return (
    <div className="pokemon_type">
      <div className="pokemon_color-container">
        {types.map((slot: IPokemonType, idx: number) => (
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
