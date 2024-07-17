import { ARTWORK_URL, POKEMON_SPECIES_URL, POKE_API } from "./constants"
import { IEvolutionChain, IPokemonListResult, IStats } from "./types"

export function formatEvolutionChain(
  evolutionChain: any
): Array<IEvolutionChain> {
  let chain = evolutionChain.chain
  const evolution = []
  do {
    const evolutionDetails = {
      minLevel: chain.evolution_details.length
        ? chain.evolution_details[0].min_level
        : 1,
      id: chain.species.url.replace(POKEMON_SPECIES_URL, "").slice(0, -1),
      title: capitalize(chain.species.name),
      image: chain.species.url
        .replace(POKEMON_SPECIES_URL, ARTWORK_URL)
        .slice(0, -1),
      ...chain.species,
    }

    evolution.push(evolutionDetails)
    chain = chain?.evolves_to[0]
  } while (chain?.evolves_to)

  return evolution
}

export function formatStats(statuses: any[]): IStats[] {
  return statuses.map((status) => {
    return {
      name: status.stat.name,
      value: status.base_stat,
    }
  })
}

export function capitalize<T>(chars: T): T | string {
  if (typeof chars !== "string") return chars
  return chars.charAt(0).toUpperCase() + chars.slice(1)
}

export function pokemonListResultFormatter(results: Array<IPokemonListResult>) {
  const regexUrl = new RegExp(`${POKE_API}/pokemon/`)

  return results.map((result) => {
    const id = result.url.replace(regexUrl, "").slice(0, -1)
    return {
      ...result,
      title: capitalize(result.name),
      id,
    }
  })
}
