import { API_HOST } from "../utils/constants";
import { ResultApi } from "../utils/models/response";
import { PokeDetails } from "../utils/models/pokeDetails";

export async function getPokemonsApi(nextUrl: string | null | undefined) {
  try {
    const url = `${API_HOST}/pokemon?limit=20&offset=0`;
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
