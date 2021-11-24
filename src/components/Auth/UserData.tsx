import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import useAuth from "../../hooks/useAuth";
import { findUserById } from "../../api/user";
import { PokeUserInfo } from "./../../utils/models/pokeUserInfo";

interface Props {
  token: string;
  uid: string | number;
}

export default function UserData({ token, uid }: Props) {
  const { logout, auth } = useAuth();
  const [user, setUser] = useState<PokeUserInfo>();

  useEffect(() => {
    (async () => {
      const userAPI = await findUserById(uid, auth.token);
      if (userAPI) {
        setUser(userAPI);
      }
    })();
  }, []);

  if (!auth.isAuthenticated) {
    return null;
  }
  return (
    <>
      {user ? (
        <View style={styles.content}>
          <View style={styles.titleBlock}>
            <Text style={styles.title}>Bienvenido,</Text>
            <Text
              style={styles.title}
            >{`${user.data.name} ${user.data.lastname}`}</Text>
          </View>

          <View style={styles.dataContent}>
            <ItemMenu
              title="Nombre"
              text={`${user.data.name} ${user?.data.lastname}`}
            />
            <ItemMenu title="Age" text={user.data.age} />
            <ItemMenu title="Email" text={user.data.email} />
            <ItemMenu title="Total Favoritos" text={`0 pokemons`} />
          </View>
          <View style={styles.imageContent}>
            <Text style={styles.itemMenuTitle}>Avatar: </Text>
            <Image style={styles.image} source={{ uri: user.data.image }} />
          </View>
          <Button title="Desconectarse" onPress={logout} />
        </View>
      ) : (
        <View>
          <Text>Loading</Text>
        </View>
      )}
    </>
  );
}

function ItemMenu(props: { title: string; text: string | number }) {
  const { title, text } = props;

  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}:</Text>
      <Text>{text}</Text>
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
    fontSize: 25,
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
  imageContent: {
    marginBottom: 20,
    display: "flex",
    flexDirection: "row",
  },
  image: {
    width: 200,
    height: 200,
  },
  btnLogoun: {
    paddingTop: 20,
  },
});
