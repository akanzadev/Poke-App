export interface ResultApi {
  count: number;
  next: string;
  previous: string | null;
  results: Pokemons[];
}

export interface Pokemons {
  name: string;
  url: string;
}
