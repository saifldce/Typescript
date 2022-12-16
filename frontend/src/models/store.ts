import { IUser } from "./user";

export enum ActionType {
  SET_AUTH = "SET_AUTH",
  PURGE_AUTH = "PURGE_AUTH",
}
export type InitState = {
  isAuthenticated: boolean;
  currentUser: IUser | null;
};

export type Action = {
  type: string;
  payload?: IUser;
};
