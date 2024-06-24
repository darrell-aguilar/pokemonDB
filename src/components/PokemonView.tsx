import "../css/PokemonView.scss"
import { useParams } from "react-router-dom"
import {
  useGetPokemonQuery,
  useGetPokemonSpeciesQuery,
} from "../utils/apiSlice"
import { POKE_API } from "../utils/constants"
import EvolutionChart from "./EvolutionChart"

function PokemonView(props: any) {
  const { id } = useParams()
  const { data: pokemonData } = useGetPokemonQuery(id as string)

  const { data: pokemonSpecies, isSuccess: getSpeciesSuccess } =
    useGetPokemonSpeciesQuery(id as string)

  const evolutionChainID: string = pokemonSpecies?.evolution_chain?.url.replace(
    POKE_API,
    ""
  )

  return (
    <div className="pokemon-view">
      <EvolutionChart id={evolutionChainID} />
    </div>
  )
}
export default PokemonView
