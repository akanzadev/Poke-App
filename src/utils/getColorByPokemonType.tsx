import { POKEMON_TYPE_COLORS } from "./constants";

type Colors = keyof typeof POKEMON_TYPE_COLORS;

const getColorByPokemonType = (typePoke: string) =>
  POKEMON_TYPE_COLORS[typePoke as Colors];

export default getColorByPokemonType;
