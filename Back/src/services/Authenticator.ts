import * as jwt from "jsonwebtoken";
import { authenticationData } from "../types/authenticationData";

export class Authenticator {
  generateToken = (payload: authenticationData): string => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: "1day",
    });
  };

   public getTokenData = (token: string): authenticationData => {
    return jwt.verify(
      token,
      process.env.JWT_KEY as string
    ) as authenticationData;
  };
  static getTokenData: any;
}
