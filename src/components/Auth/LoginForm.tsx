import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useFormik } from "formik";
import * as Yup from "yup";

import useAuth from "../../hooks/useAuth";
import { loginWithUser } from "../../api/auth";
import Loading from "../Loading";

export default function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: initialValues(),
    validateOnMount: false,
    // validateOnChange: false,
    validationSchema: validationSchema(),
    onSubmit: (values) => {
      // Peticion http a servidor
      setLoading(true);
      loginWithUser(values)
        .then((res) => {
          if (res) {
            login(res);
            setLoading(false);
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.message);
          setError(err.message);
        });
    },
  });

  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <View style={{ height: "100%" }}>
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
          <Text style={styles.error}>{error}</Text>
        </View>
      )}
    </>
  );
}

function initialValues() {
  return {
    email: "test2@gmail.com",
    password: "test2",
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
    fontSize: 16,
    color: "red",
    textAlign: "center",
    marginTop: 20,
  },
});
