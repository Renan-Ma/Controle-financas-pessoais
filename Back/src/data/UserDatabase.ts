import { BaseError } from "../error/BaseError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
  private static TABLE_NAME = "financas_users";

  public createUser = async (
    id: string, 
    name: string,
    email: string,
    password: string
  ): Promise<User | undefined> => {
    try {
      await this.getConnection()
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
      return
    } catch (error: any) {
      throw new BaseError(422, error.sqlMessage || error.message);

    }
  }

  public selectUser = async (email: string) => {
    try {
      const result = await this.getConnection()
        .select()
        .where({ email })
        .into(UserDatabase.TABLE_NAME);

      return result[0];
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("Erro do banco !");
      }
    }
  };
}