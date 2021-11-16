import React, { useState, useContext } from "react";
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
import { loginWithUser } from "../../api/auth";

export default function LoginForm() {
  const { login, auth } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validateOnMount: false,
    // validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      // Peticion http a servidor
      loginWithUser({ correo: values.email, password: values.password }).then(
        (res) => {
          if (res) {
            login(res);
          }
        }
      );
    },
  });

  return (
    <View>
      {auth.isAuthenticated ? (
        <Text>Estas autenticado</Text>
      ) : (
        <Text>No estas autenticado</Text>
      )}
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoCapitalize="none"
        value={formik.values.email}
        onChangeText={(text) => formik.setFieldValue("email", text)}
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
      <Text style={styles.error}>{formik.errors.email}</Text>
    </View>
  );
}

function initialValues() {
  return {
    email: "romel@gmail.com",
    password: "1234567",
  };
}

function validationSchema() {
  return Yup.object({
    email: Yup.string().required("Email is required"),
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
