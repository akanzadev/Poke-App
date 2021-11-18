import { API_AUTH } from "../utils/constants";
import { PokeUser } from "../utils/models/pokeUser";

export async function findUserById(
  uid: string,
  token: string
): Promise<PokeUser | undefined> {
  return new Promise((resolve, reject) => {
    fetch(`${API_AUTH}/auth/${uid}`, {
      method: "GET",
      headers: {
        Authentication: token,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("La sesión ah expirado");
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
