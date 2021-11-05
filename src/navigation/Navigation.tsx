import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "react-native-vector-icons/FontAwesome5";
import Account from "../screens/Account";
import Pokedex from "../screens/Pokedex";
import Favorite from "../screens/Favorite";

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <Tab.Navigator initialRouteName="Account">
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabel: "Mi cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={Pokedex}
        options={{
          tabBarLabel: "",
          tabBarIcon: renderBall,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={Favorite}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function renderBall() {
  return (
    <Image
      source={require("../assets/pokeball.png")}
      style={{ width: 75, height: 75 , top: -20}}
    />
  );
}
