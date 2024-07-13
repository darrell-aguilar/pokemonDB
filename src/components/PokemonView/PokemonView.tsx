import "./PokemonView.scss"
import { useParams } from "react-router-dom"
import { useGetPokemonSpeciesQuery } from "../../utils/apiSlice"
import { POKE_API } from "../../utils/constants"
import { EvolutionChart } from "../EvolutionChart"
import { PokemonDetails } from "../PokemonDetails/PokemonDetails"
import { Error } from "../Error"

export function PokemonView(props: any) {
  const { id } = useParams()

  const { data: pokemonSpecies, error } = useGetPokemonSpeciesQuery(
    id as string
  )

  const evolutionChainID: string = pokemonSpecies?.evolution_chain?.url.replace(
    POKE_API,
    ""
  )

  if (error)
    return (
      <div className="pokemon-view">
        <Error />
      </div>
    )
  else
    return (
      <div className="pokemon-view">
        <PokemonDetails />
        <EvolutionChart id={evolutionChainID} />
      </div>
    )
}
