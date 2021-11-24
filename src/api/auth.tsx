import { API_AUTH } from "../utils/constants";
import { PokeUser } from "../utils/models/pokeUser";
import { User } from "../utils/models/user";

// First Promise
export async function loginWithUser(user: User): Promise<PokeUser | undefined> {
  return new Promise((resolve, reject) => {
    fetch(`${API_AUTH}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.status === 200) {
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
