export class PokemonList implements IPokemonList {
  results: Array<IPokemonListResult>

  constructor(data: any) {
    this.results = data.results.map((result: IPokemonListResult) => {
      return {
        ...result,
        title: result.name.charAt(0).toUpperCase() + result.name.slice(1),
      }
    })
  }
}

interface IPokemonList {
  results: Array<IPokemonListResult>
}

interface IPokemonListResult {
  name: string
  url: string
  title?: string
}
