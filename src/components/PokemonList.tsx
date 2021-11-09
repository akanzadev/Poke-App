import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Pokemon } from "../utils/models/poke";
import PokemonCard from "./PokemonCard";

interface Props {
  pokemons: Pokemon[];
  loadPokemons: () => void;
  isNext: string | null | undefined;
}

export default function PokemonList({ pokemons, loadPokemons, isNext }: Props) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemons) => pokemons.id.toString()}
      renderItem={({ item }) => <PokemonCard pokemon={item} />}
      contentContainerStyle={style.flagListContentContainer}
      onEndReached={isNext ? loadMore : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? (
          <ActivityIndicator
            size="large"
            color="#AEAEAE"
            style={style.spinner}
          />
        ) : null
      }
    />
  );
}

const style = StyleSheet.create({
  flagListContentContainer: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  footer: {},
  spinner: {
    marginBottom: Platform.OS === "android" ? 90 : 60,
    marginTop: 20,
  },
});
