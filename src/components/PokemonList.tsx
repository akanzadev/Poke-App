import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Pokemon } from "../utils/models/poke";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: Pokemon[];
}

export default function PokemonList({ pokemons }: Props) {
  console.log(pokemons);
  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemons) => pokemons.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flagListContentContainer}
    />
  );
}

const style = StyleSheet.create({
  flagListContentContainer: {
    padding: 20,
  },
});
