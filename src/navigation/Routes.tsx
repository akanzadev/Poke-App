import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export enum Routes {
  POKEMON = "Pokemon",
  POKEDEX = "Pokedex",
  LOGIN = "Account",
  SIGNUP = "Account",
  FORGOT_PASSWORD = "ForgotPassword",
}

export type PokemonNavigatorParamsList = {
  [Routes.POKEDEX]: undefined; // HomeScreen doesn't expect any navigation params
  [Routes.POKEMON]: { id: number }; // ProfileScreen expects a username param
};

export type AuthNavigatorParamsList = {
  [Routes.LOGIN]: undefined; // LoginScreen doesn't expect any navigation params
  [Routes.SIGNUP]: undefined; // SignupScreen doesn't expect any navigation params
  [Routes.FORGOT_PASSWORD]: { email?: string }; // ForgotPasswordScreen expects an email optional param
};

// Configuración de tipos para el navigation entrada
export type PokemonNavigationProp<
  RouteName extends keyof PokemonNavigatorParamsList
> = NativeStackNavigationProp<PokemonNavigatorParamsList, RouteName>;

// Configuración de tipos para el navigation entrada
export type LoginNavigationProp<
  RouteName extends keyof AuthNavigatorParamsList
> = NativeStackNavigationProp<AuthNavigatorParamsList, RouteName>;

// Configuración de tipos para el route salida
export type PokemonRouteProp<
  RouteName extends keyof PokemonNavigatorParamsList
> = RouteProp<PokemonNavigatorParamsList, RouteName>;

// Configuración de tipos para el route salida
export type LoginRouteProp<
  RouteName extends keyof AuthNavigatorParamsList
> = RouteProp<AuthNavigatorParamsList, RouteName>;

// Exportar interface para props
export interface PokemonScreenProps {
  navigation: PokemonNavigationProp<Routes.POKEMON>;
  route: PokemonRouteProp<Routes.POKEMON>;
}


// Exportar interface para props
export interface LoginScreenProps {
  navigation: LoginNavigationProp<Routes.LOGIN>;
  route: LoginRouteProp<Routes.LOGIN>;
}