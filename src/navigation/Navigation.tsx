import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
//import Account from "../screens/Account";
// import Pokedex from "../screens/Pokedex";
// import Favorite from "../screens/Favorite";
import FavoriteNavigation from "./FavoriteNavigation";
import PokedexNavigation from "./PokedexNavigation";
import AccountNavigation from "./AccountNavigation";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Pokedex">
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
          /*  title: "Mi cuenta",
          headerTitleAlign: "center", */
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: "",
          tabBarIcon: renderBall,
          /* title: "Pokedex",
          headerTitleAlign: "center", */
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteNavigation}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ) /* 
          title: "Favoritos",
          headerTitleAlign: "center", */,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function renderBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75, top: -20 }}
    />
  );
}
