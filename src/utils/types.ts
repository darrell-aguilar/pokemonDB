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
  info: IPokemonInfo
  stats: Array<IStats>
}

interface IPokemonInfo {
  height: number
  weight: number
  experience: number
  id: number
}

interface IStats {
  [key: string]: number
}
