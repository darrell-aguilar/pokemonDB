export interface IPokemonList {
  results: Array<IPokemonListResult>
}

export interface IPokemonListResult {
  name: string
  url: string
  id: number
  title: string
  fetchAll?: boolean
}

export interface IEvolutionChain extends IPokemonListResult {
  minLevel: number
}

export interface IPokemonDetails extends Omit<IEvolutionChain, "url"> {
  types: Array<any>
  height: number
  weight: number
  baseExperience: number
}
