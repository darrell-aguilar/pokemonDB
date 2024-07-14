import { Link } from "react-router-dom"
import "./PokemonCard.scss"
import { ARTWORK_URL } from "../../utils/constants"

interface Props {
  cardProps: CardProps
}
interface CardProps {
  name: string
  id: string
  title: string
}

export function PokemonCard({ cardProps }: Props) {
  const imageMissing = require("../../images/not-found.png")
  const imageNotFound = (img: any) => {
    img.target.src = imageMissing
  }

  const { name, title, id } = cardProps

  return (
    <Link to={`/${name}`} className="pokemon-card">
      <div className="pokemon-card__container">
        <p className="pokemon-card__id">{"#" + id}</p>
        <img
          className="pokemon-card__thumbnail"
          key={name}
          alt={name}
          title={title}
          onError={imageNotFound}
          src={`${ARTWORK_URL}/${id}.png`}
        />
      </div>
      <div className="pokemon-card__name">{title}</div>
    </Link>
  )
}
