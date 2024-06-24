import { Link } from "react-router-dom"
import "../css/PokemonCard.scss"
import { ARTWORK_URL } from "../utils/constants"
import { ReactNode } from "react"

interface Props {
  cardProps: CardProps
}
interface CardProps {
  name: string
  id: number
  title: string
  fetchAll?: boolean
  children?: ReactNode
}

export default function PokemonCard({ cardProps }: Props) {
  const imageMissing = require("../images/not-found.png")
  const imageNotFound = (img: any) => {
    img.target.src = imageMissing
  }

  const { name, title, id, children } = cardProps

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
      {children}
    </Link>
  )
}
