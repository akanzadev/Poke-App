import { AuthModel } from "./AuthModel";

type actionType =
  | {
      type: "LOGIN";
      payload: AuthModel;
    }
  | {
      type: "LOGOUT";
    };

export default function (state: AuthModel, action: actionType): AuthModel {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        uid: "",
      };
    default:
      return state;
  }
}
