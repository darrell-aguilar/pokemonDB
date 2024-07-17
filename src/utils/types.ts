import { PokemonTypes } from "./constants"

export interface IPokemonList {
  results: Array<IPokemonListResult>
}

export interface IPokemonListResult {
  name: string
  url: string
  id: string
  title: string
}

export interface IEvolutionChain extends IPokemonListResult {
  minLevel: number
}

export interface IPokemonDetails extends Omit<IEvolutionChain, "url"> {
  types: Array<IPokemonType>
  info: IPokemonInfo
  stats: Array<IStats>
}

export interface IPokemonType {
  type: ITypeObject
}

interface ITypeObject {
  name: keyof typeof PokemonTypes
}

interface IPokemonInfo {
  height: number
  weight: number
  experience: number
  id: number
}

export interface IStats {
  name: string
  value: number
}

export type Type = keyof typeof PokemonTypes
