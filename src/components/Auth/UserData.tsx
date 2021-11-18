import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import useAuth from "../../hooks/useAuth";

interface Props {
  token: string;
  uid: string;
}

export default function UserData({ token, uid }: Props) {
  const { logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.title}>{token}</Text>
        <Text style={styles.title}>{uid}</Text>
      </View>
      <Button
        title="Desconectarse"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: "row",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: "#CFCFCF",
  },
  itemMenuTitle: {
    fontWeight: "bold",
    paddingRight: 10,
    width: 120,
  },
});
