import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { POKE_API } from "./constants"
import {
  IPokemonList,
  IPokemonListResult,
  IEvolutionChain,
} from "../utils/types"
import { capitalize, formatEvolutionChain } from "../utils/helpers"

export const apiSlice = createApi({
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
    getPokemon: builder.query({
      query: (id: string) => `/pokemon/${id}`,
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
} = apiSlice
