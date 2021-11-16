import { API_AUTH } from "../utils/constants";
import { PokeUser } from "../utils/models/pokeUser";
import { User } from "../utils/models/user";

export async function loginWithUser(user: User): Promise<PokeUser | undefined> {
  try {
    const url = `${API_AUTH}`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const result: PokeUser = await response.json();
    if (result) {
      return result;
    }
  } catch (error) {
    console.log(error);
  }
}
