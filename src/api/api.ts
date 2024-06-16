import axios from "axios"

const baseURL = "https://pokeapi.co/api/v2/"

const apiClient = axios.create({ baseURL })

export const pokeApi = {
  getPokemonList(limit: string, offset: string) {
    return apiClient.get(`/pokemon/?limit=${limit}&offset=${offset}`)
  },
  getPokemon(id: string) {
    return apiClient.get(`/pokemon/${id}`)
  },
  getPokemonEvolution(id: string) {
    return apiClient.get(`/pokemon-species/${id}`)
  },
}
