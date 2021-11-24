import { API } from "../utils/constants";
import { PokeUserInfo } from "../utils/models/pokeUserInfo";

export async function findUserById(
  uid: string | number,
  token: string
): Promise<PokeUserInfo | undefined> {
  return new Promise((resolve, reject) => {
    fetch(`${API}/users/${uid}`, {
      method: "GET",
      headers: {
        Authentication: token,
        Accept: "application/json",
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
