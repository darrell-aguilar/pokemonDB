import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { POKE_API } from "./constants"
import { PokemonList } from "../utils/types"

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POKE_API }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: ({ limit, offset }) => `/pokemon/?limit=${limit}&offset=${offset}`,
      transformResponse: (response) => new PokemonList(response),
    }),
    getPokemon: builder.query({
      query: (id: string) => `/pokemon/${id}`,
    }),
    getPokemonEvolution: builder.query<any, string>({
      async queryFn(arg, api, extraOptions, baseQuery) {
        const pokemonSpecies = (await baseQuery(
          `/pokemon-species/${arg}`
        )) as any

        const evolutionEndpoint =
          pokemonSpecies?.data?.evolution_chain?.url.replace(POKE_API, "")

        const evolutionChain = await baseQuery(evolutionEndpoint)

        return evolutionChain.data as any
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
