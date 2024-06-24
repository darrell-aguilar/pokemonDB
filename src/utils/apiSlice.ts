import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { POKE_API } from './constants';
import { IPokemonList, IPokemonListResult } from '../utils/types';

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: POKE_API }),
  endpoints: (builder) => ({
    getPokemonList: builder.query({
      query: ({ limit, offset }) => `/pokemon/?limit=${limit}&offset=${offset}`,
      transformResponse: (response: IPokemonList): Array<IPokemonListResult> =>
        response.results.map((result) => {
          return {
            ...result,
            title: result.name.charAt(0).toUpperCase() + result.name.slice(1),
          };
        }),
    }),
    getPokemon: builder.query({
      query: (id: string) => `/pokemon/${id}`,
    }),
    getPokemonEvolution: builder.query<any, string>({
      async queryFn(arg, api, extraOptions, baseQuery) {
        const pokemonSpecies = (await baseQuery(
          `/pokemon-species/${arg}`,
        )) as any;

        const evolutionEndpoint =
          pokemonSpecies?.data?.evolution_chain?.url.replace(POKE_API, '');

        const evolutionChain = await baseQuery(evolutionEndpoint);

        return evolutionChain.data as any;
      },
    }),
    getPokemonSpecies: builder.query({
      query: (id: string) => `/pokemon-species/${id}`,
    }),
  }),
});

export const {
  useGetPokemonListQuery,
  useGetPokemonQuery,
  useGetPokemonEvolutionQuery,
  useGetPokemonSpeciesQuery,
} = apiSlice;
