import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Keyboard,
  StyleSheet,
} from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";
import useAuth from "../../hooks/useAuth";
export default function LoginForm() {
  const auth = useAuth();
  console.log(auth);
  const formik = useFormik({
    initialValues: initialValues(),
    validateOnMount: false,
    // validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      // Peticion http a servidor
      if (values.username === "admin" && values.password === "admin") {
        console.log("Usuario logeado");
        const data = {
          id: "1",
          name: "juan",
          email: "juan@gmail",
          token: "dasdasdasd",
        };
        auth.login(data);
      } else {
        console.log("Usuario no logeado");
      }
    },
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
        focusable={false}
      ></TextInput>
      <TextInput
        placeholder="Password"
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        focusable={false}
      ></TextInput>
      <Button title="Login" onPress={() => formik.handleSubmit()} />
      <Text style={styles.error}>{formik.errors.username}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return Yup.object({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });
}

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 50,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
