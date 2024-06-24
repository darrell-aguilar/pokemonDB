export interface IPokemonList {
  results: Array<IPokemonListResult>
}

export interface IPokemonListResult {
  name: string
  url: string
  title?: string
  id?: number
  fetchAll?: boolean
}

export interface IEvolutionChain extends IPokemonListResult {
  minLevel: number
  url: string
}
