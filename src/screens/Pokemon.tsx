import React from "react";
import { View, Text } from "react-native";
import { PokemonScreenProps } from "../navigation/Routes";

export default function Pokemon({ route, navigation }: PokemonScreenProps) {
  console.log(route, navigation);
  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  );
}
