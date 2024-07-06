import { POKEMON_SPECIES_URL } from "./constants"
import { IEvolutionChain } from "./types"

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
      ...chain.species,
    }

    evolution.push(evolutionDetails)
    chain = chain?.evolves_to[0]
  } while (chain?.evolves_to)

  return evolution
}

function formatStats(statuses: any[]) {
  return statuses.map((status) => {
    return {
      name: status.stat.name,
      value: status.base_stat,
    }
  })
}

export function capitalize(chars: any) {
  if (typeof chars !== "string") return chars
  return chars.charAt(0).toUpperCase() + chars.slice(1)
}
