import { POKE_API } from "../utils/constants";
import { ResultApi } from "../utils/models/pokeResponse";
import { PokeDetails } from "../utils/models/pokeDetails";
import { PokemonModel } from "../utils/models/pokemon";

export async function getPokemonsApi(nextUrl: string | null | undefined) {
  try {
    const url = `${POKE_API}/pokemon?limit=20&offset=0`;
    const response = await fetch(nextUrl ?? url);
    const result: ResultApi = await response.json();
    if (!result) throw new Error("No se pudo obtener la información");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonDetailsByUrlApi(url: string) {
  try {
    const response = await fetch(url);
    const result: PokeDetails = await response.json();
    if (!result) throw new Error("No se pudo obtener la información");
    return result;
  } catch (error) {
    console.log(error);
  }
}

export async function getPokemonDetailsApi(id: number) {
  try {
    const response = await fetch(`${POKE_API}/pokemon/${id}`);
    const result: PokemonModel = await response.json();
    if (!result) throw new Error("No se pudo obtener la información");
    return result;
  } catch (error) {
    console.log(error);
  }
}
