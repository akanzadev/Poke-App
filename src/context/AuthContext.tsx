import React, { createContext, useState, ReactNode } from "react";

interface UserData {
  id: string;
  name: string;
  email: string;
  token: string;
}

interface AuthContextData {
  user: UserData | undefined;
  login: (userData: UserData) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextData>({
  user: undefined,
  login: (userData: UserData) => {},
  logout: () => {},
});

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<UserData | undefined>();
  const login = (useData: UserData) => {
    setUser(useData);
  };
  const logout = () => {
    setUser(undefined);
  };
  const valueContext = {
    user,
    logout,
    login,
  };

  return (
    <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
  );
}
