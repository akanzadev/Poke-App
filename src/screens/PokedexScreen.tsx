import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { getPokemonsApi, getPokemonDetailsByUrlApi } from "../api/pokemon";
import { Pokemon } from "../utils/models/poke";
import PokemonList from "../components/PokemonList";
import Loading from "../components/Loading";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PokedexScreen() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [nextUrl, setNextUrl] = useState<string | undefined | null>(null);
  useEffect(() => {
    (async () => {
      await loadPokemons();
    })();
  }, []);

  const loadPokemons = async () => {
    try {
      const response = await getPokemonsApi(nextUrl);
      setNextUrl(response?.next);
      const pokeArray = [];
      for await (const pokemon of response?.results ?? []) {
        const pokemonDetails = await getPokemonDetailsByUrlApi(pokemon.url);
        if (pokemonDetails) {
          pokeArray.push({
            id: pokemonDetails.id,
            name: pokemonDetails.name,
            type: pokemonDetails.types[0].type.name,
            order: pokemonDetails.order,
            imagen:
              pokemonDetails.sprites.other?.["official-artwork"]
                .front_default ?? "default image",
          });
        }
      }
      setPokemons([...pokemons, ...pokeArray]);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      {pokemons.length !== 0 ? (
        <PokemonList
          pokemons={pokemons}
          loadPokemons={loadPokemons}
          isNext={nextUrl}
        />
      ) : (
        <Loading />
      )}
    </SafeAreaView>
  );
}
