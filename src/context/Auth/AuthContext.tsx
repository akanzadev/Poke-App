import React, { createContext } from "react";
import { AuthModel } from "./AuthModel";
import { PokeUser } from "../../utils/models/pokeUser";

interface AuthContextData {
  auth: AuthModel;
  logout: () => void;
  login: (user: PokeUser) => void;
}

export const AuthContext = createContext<AuthContextData>({
  auth: {
    token: "",
    uid: "",
    isAuthenticated: false,
  },
  logout: () => {},
  login: (user: PokeUser) => {},
});
