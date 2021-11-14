import React from "react";
import { View, Image, StyleSheet, Platform, Text } from "react-native";

export default function Loading() {
  return (
    <View style={styles.loaderContainerScreen}>
      <View style={styles.loaderContainer}>
        <View style={styles.pokeTop} />
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/loader.png")}
            style={styles.loaderImage}
          />
        </View>
        <Text style={styles.loaderText}>Loading...</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  loaderContainerScreen: {
    height: "100%",
    paddingHorizontal: 50,
    marginTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "#f0efef9b",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
  },
  loaderContainer: {
    width: 200,
    height: 200,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    overflow: "hidden",
    flexWrap: "wrap",
    borderRadius: 200,
    backgroundColor: "#f3f3f3",
    borderStyle: "solid",
    borderColor: "#0c0a0a",
    borderWidth: 2,
    position: "relative",
  },
  pokeTop: {
    width: "100%",
    backgroundColor: "#f50000",
    height: "50%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  imageContainer: {
    flexBasis: "100%",
  },
  loaderImage: {
    alignSelf: "center",
    height: 100,
    width: 100,
  },
  loaderText: {
    flexBasis: "100%",
    textAlign: "center",
    color: "black",
    fontSize: 20,
  },
});
