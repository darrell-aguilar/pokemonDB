import { Link } from "react-router-dom"
import "./PokemonCard.scss"
import { ARTWORK_URL } from "../../utils/constants"
import * as imageMissing from "../../images/not-found.png"

interface Props {
  cardProps: CardProps
}
interface CardProps {
  name: string
  id: string
  title: string
}

export function PokemonCard({ cardProps }: Props) {
  const imageNotFound = (img: any) => {
    img.target.src = imageMissing
  }

  const { name, title, id } = cardProps

  return (
    <Link to={`/${name}`} data-testid="card_link" className="pokemon-card">
      <div className="pokemon-card__container">
        <p data-testid="card_id" className="pokemon-card__id">
          {"#" + id}
        </p>
        <img
          data-testid="card_image"
          className="pokemon-card__thumbnail"
          key={name}
          alt={name}
          title={title}
          onError={imageNotFound}
          src={`${ARTWORK_URL}/${id}.png`}
        />
      </div>
      <div data-testid="card_name" className="pokemon-card__name">
        {title}
      </div>
    </Link>
  )
}
