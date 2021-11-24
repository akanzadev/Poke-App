import { API } from "../utils/constants";
import { PokeUser } from "../utils/models/pokeUser";
import { User } from "../utils/models/user";

// First Promise
export async function loginWithUser(user: User): Promise<PokeUser | undefined> {
  return new Promise((resolve, reject) => {
    console.log(user);
    fetch(`${API}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          return response.json();
        } else {
          throw new Error("Error al iniciar sesión");
        }
      })
      .then((response) => {
        resolve(response);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
