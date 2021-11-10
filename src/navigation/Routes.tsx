import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
export enum Routes {
  Pokemon = "Pokemon",
  Pokedex = "Pokedex",
  Login = "Login",
  Signup = "Signup",
  ForgotPassword = "ForgotPassword",
}

export type PokemonNavigatorParamsList = {
  [Routes.Pokedex]: undefined; // HomeScreen doesn't expect any navigation params
  [Routes.Pokemon]: { id: number }; // ProfileScreen expects a username param
};

export interface AuthNavigatorParamsList {
  [Routes.Login]: undefined; // LoginScreen doesn't expect any navigation params
  [Routes.Signup]: undefined; // SignupScreen doesn't expect any navigation params
  [Routes.ForgotPassword]: { email?: string }; // ForgotPasswordScreen expects an email optional param
}

// Configuración de tipos para el navigation entrada
export type PokemonNavigationProp<
  RouteName extends keyof PokemonNavigatorParamsList
> = NativeStackNavigationProp<PokemonNavigatorParamsList, RouteName>;


// Configuración de tipos para el route salida
export type PokemonRouteProp<
  RouteName extends keyof PokemonNavigatorParamsList
> = RouteProp<PokemonNavigatorParamsList, RouteName>;

// Exportar interface para props
export interface PokemonScreenProps {
  navigation: PokemonNavigationProp<Routes.Pokemon>;
  route: PokemonRouteProp<Routes.Pokemon>;
}
