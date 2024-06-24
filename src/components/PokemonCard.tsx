import { Link } from "react-router-dom"
import "../css/PokemonCard.scss"

export default function PokemonCard({ props }: any) {
  const imageMissing = require("../images/not-found.png")
  const imageNotFound = (img: any) => {
    img.target.src = imageMissing
  }
  const handleClick = () => {}

  const formatName = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1)

  return (
    <Link to={`/${props.name}`}>
      <div className="pokemon-card">
        <div className="pokemon-card__container">
          <div className="pokemon-card__id">{"#" + (props.index + 1)}</div>
          <img
            className="pokemon-card__thumbnail"
            onClick={handleClick}
            key={props.name}
            alt={`${props.name}`}
            title={formatName(props.name)}
            onError={imageNotFound}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
              props.index + 1
            }.png`}
          />
        </div>
        <div className="pokemon-card__name" onClick={handleClick}>
          {formatName(props.name)}
        </div>
      </div>
    </Link>
  )
}
