import React from "react";
import { View, Text } from "react-native";
import LoginForm from "../components/Auth/LoginForm";
import UserData from "../components/Auth/UserData";
import useAuth from "../hooks/useAuth";

export default function AccountScreen() {
  const { auth: user } = useAuth();
  const { token, uid, isAuthenticated } = user;
  return (
    <View style={{ position: "relative" }}>
      {isAuthenticated ? <UserData token={token} uid={uid} /> : <LoginForm />}
    </View>
  );
}
