import { IBase } from "./base";

export type IUser = IBase & {
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
};
