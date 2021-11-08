import React from "react";
import {
  View,
  Image,
  Text,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { Pokemon } from "../utils/models/poke";
interface Props {
  pokemon: Pokemon;
}
export default function PokemonCard({ pokemon }: Props) {
  const goToPokemon = () => {
    console.log("goToPokemon", pokemon.name);
  };
  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={styles.card}>
        <View style={styles.spacing}>
          <View style={styles.bgStyles}>
            <Text style={styles.number}>
              #{`${pokemon.order}`.padStart(3, "0")}
            </Text>
            <Text style={styles.name}>{pokemon.name}</Text>
            <Image source={{ uri: pokemon.imagen }} style={styles.image} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyles: {
    backgroundColor: "grey",
  },
  image: {
    position: "absolute",
    bottom: 2,
    right: 2,
    width: 90,
    height: 90,
  },
  number: {
    position: "absolute",
    right: 10,
    top: 10,
    color: "#fff",
    fontSize: 11,
  },
  name: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
    paddingTop: 10,
  },
});
