import React, { useReducer, ReactNode } from "react";
import { AuthContext } from "./AuthContext";
import AuthReducer from "./AuthReducer";
import { AuthModel } from "./AuthModel";
import { PokeUser } from "../../utils/models/pokeUser";

const INITIAL_STATE: AuthModel = {
  token: "",
  uid: "",
  isAuthenticated: false,
};

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [auth, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  const login = (data: PokeUser) => {
    dispatch({
      type: "LOGIN",
      payload: {
        token: data.token,
        uid: data.usuario.uid,
        isAuthenticated: true,
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
  };

  const valueContext = {
    auth,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
