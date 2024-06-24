export interface IPokemonList {
  results: Array<IPokemonListResult>;
}

export interface IPokemonListResult {
  name: string;
  url: string;
  title?: string;
}
