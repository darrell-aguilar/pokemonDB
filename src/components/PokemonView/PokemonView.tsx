import { useParams } from "react-router-dom"
import {
  useGetPokemonSpeciesQuery,
  useGetPokemonQuery,
} from "../../utils/apiSlice"
import { POKE_API } from "../../utils/constants"
import { EvolutionChart } from "../EvolutionChart"
import { PokemonDetails } from "../PokemonDetails/PokemonDetails"
import { IPokemonDetails } from "../../utils/types"
import { Error } from "../Error"

export function PokemonView() {
  const { id } = useParams()

  const { data: pokemonSpecies, error: pokemonSpeciesError } =
    useGetPokemonSpeciesQuery(id as string)
  const {
    data: pokemonData,
    isFetching,
    error,
  } = useGetPokemonQuery(id as string)

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
        <PokemonDetails
          data={pokemonData as IPokemonDetails}
          isFetching={isFetching}
        />
        {!pokemonSpeciesError && <EvolutionChart id={evolutionChainID} />}
      </div>
    )
}
