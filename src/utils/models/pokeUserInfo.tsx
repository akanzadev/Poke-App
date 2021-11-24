export interface PokeUserInfo {
  statusCode: number;
  message: string;
  data: Data;
}

export interface Data {
  id: number;
  name: string;
  lastname: string;
  email: string;
  age: number;
  status: boolean;
  image: string;
}
