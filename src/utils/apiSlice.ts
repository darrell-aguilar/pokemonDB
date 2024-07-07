import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { POKE_API } from "./constants"
import {
  IPokemonList,
  IPokemonListResult,
  IEvolutionChain,
  IPokemonDetails,
} from "../utils/types"
import { capitalize, formatEvolutionChain, formatStats } from "../utils/helpers"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POKE_API }),
  endpoints: (builder) => ({
    getPokemonList: builder.query<
      Array<IPokemonListResult>,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `/pokemon/?limit=${limit}&offset=${offset}`,
      transformResponse: (response: IPokemonList): Array<IPokemonListResult> =>
        response.results.map((result) => {
          return {
            ...result,
            title: capitalize(result.name),
          }
        }),
    }),
    getPokemon: builder.query<IPokemonDetails, string>({
      query: (id: string) => `/pokemon/${id}`,
      transformResponse: (response: any): IPokemonDetails => {
        return {
          ...response,
          title: capitalize(response.name),
          info: {
            height: response.height,
            weight: response.weight,
            experience: response.base_experience,
            id: response.id,
          },
          stats: [...formatStats(response.stats)],
        }
      },
    }),
    getPokemonEvolution: builder.query<Array<IEvolutionChain>, string>({
      query: (endpoint: string) => `${endpoint}`,
      transformResponse: (response: any): Array<IEvolutionChain> => {
        return formatEvolutionChain(response)
      },
    }),
    getPokemonSpecies: builder.query({
      query: (id: string) => `/pokemon-species/${id}`,
    }),
  }),
})

export const {
  useGetPokemonListQuery,
  useGetPokemonQuery,
  useGetPokemonEvolutionQuery,
  useGetPokemonSpeciesQuery,
} = api
