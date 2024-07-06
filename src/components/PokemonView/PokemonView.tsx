import "./PokemonView.scss"
import { useParams } from "react-router-dom"
import { useGetPokemonSpeciesQuery } from "../../utils/apiSlice"
import { POKE_API } from "../../utils/constants"
import { EvolutionChart } from "../EvolutionChart"
import { PokemonDetails } from "../PokemonDetails/PokemonDetails"

export function PokemonView(props: any) {
  const { id } = useParams()

  const { data: pokemonSpecies } = useGetPokemonSpeciesQuery(id as string)

  const evolutionChainID: string = pokemonSpecies?.evolution_chain?.url.replace(
    POKE_API,
    ""
  )

  return (
    <div className="pokemon-view">
      <PokemonDetails />
      <EvolutionChart id={evolutionChainID} />
    </div>
  )
}
