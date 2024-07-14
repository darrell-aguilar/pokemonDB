import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { POKE_API } from "./constants"
import {
  IPokemonList,
  IPokemonListResult,
  IEvolutionChain,
  IPokemonDetails,
} from "../utils/types"
import {
  capitalize,
  formatEvolutionChain,
  formatStats,
  pokemonListResultFormatter,
} from "../utils/helpers"

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POKE_API }),
  endpoints: (builder) => ({
    getAllPokemon: builder.query<Array<IPokemonListResult>, void>({
      query: () => `/pokemon/?limit=1025`,
      transformResponse: (response: IPokemonList): Array<IPokemonListResult> =>
        pokemonListResultFormatter(response.results),
    }),
    getPokemonList: builder.query<
      Array<IPokemonListResult>,
      { limit: number; offset: number }
    >({
      query: ({ limit, offset }) => `/pokemon/?limit=${limit}&offset=${offset}`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName
      },
      merge: (current, newItems, { arg }) => {
        const { offset } = arg
        if (offset === 0) current = []
        current.push(...newItems)
      },
      transformResponse: (response: IPokemonList): Array<IPokemonListResult> =>
        pokemonListResultFormatter(response.results),
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
  useLazyGetPokemonListQuery,
  useGetAllPokemonQuery,
} = api
