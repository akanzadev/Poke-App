export interface PokeUser {
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  user: User;
  token: string;
}

export interface User {
  id: number;
  name: string;
  lastname: string;
  email: string;
}
