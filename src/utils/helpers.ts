export function formatPokemonDetails(pokemon: any, chain: any) {
  return {
    stats: formatStats(pokemon.stats),
    evolution: formatEvolutionChain(chain),
  };
}

export function formatEvolutionChain(evolutionChain: any) {
  let chain = evolutionChain.chain;
  const evolution = [];
  do {
    evolution.push(chain.species);
    chain = chain?.evolves_to[0];
  } while (chain?.evolves_to);

  return evolution;
}

function formatStats(statuses: any[]) {
  return statuses.map((status) => {
    return {
      name: status.stat.name,
      value: status.base_stat,
    };
  });
}
