import { TOKEN_KEY } from "../../configs/constant";
import { IUser } from "../../models/user";

export const setAuth = (value: IUser) => {
  return (dispatch: any) => dispatch({ type: "SET_AUTH", payload: value });
};

export const purgeAuth = () => {
  return (dispatch: any) => {
    dispatch({ type: "PURGE_AUTH" });
    localStorage.removeItem(TOKEN_KEY);
  };
};
