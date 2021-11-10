import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import PokedexScreen from "../screens/Pokedex";
import PokemonScreen from "../screens/Pokemon";
import { PokemonNavigatorParamsList, Routes } from "./Routes";

const Stack = createNativeStackNavigator<PokemonNavigatorParamsList>();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.Pokedex}
        component={PokedexScreen}
        options={{ title: "", headerShown: false }}
      />
      <Stack.Screen name={Routes.Pokemon} component={PokemonScreen} />
    </Stack.Navigator>
  );
}
