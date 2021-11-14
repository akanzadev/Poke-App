import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemonDetailsApi } from "../api/pokemon";
import Header from "../components/Pokemon/Header";
import Stats from "../components/Pokemon/Stats";
import Types from "../components/Pokemon/Types";
import { PokemonScreenProps } from "../navigation/Routes";
import { PokemonModel } from "../utils/models/pokemon";

export default function PokemonScreen({
  route: { params },
  navigation,
}: PokemonScreenProps) {
  const [pokemon, setPokemon] = useState<PokemonModel | undefined>();

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: "transparent",
      },
      headerShadowVisible: false,
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{ marginLeft: 20 }}
          onPress={() => navigation.goBack()}
        />
      ),
    });
  }, [navigation, params]);

  useEffect(() => {
    (async () => {
      try {
        const pokemon = await getPokemonDetailsApi(params.id);
        setPokemon(pokemon);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);
  if (!pokemon) return null;
  return (
    <ScrollView>
      <Header
        name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other?.["official-artwork"].front_default ?? ""}
        type={pokemon.types[0].type.name}
      />
      <Types types={pokemon.types} />
      <Stats stats={pokemon.stats} />
    </ScrollView>
  );
}
