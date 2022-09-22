import { BaseError } from "../error/BaseError";
import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{
  private static TABLE_NAME = "Financas_pessoais";

  public createUser = async (
    id: string, 
    name: string,
    password: string
  ): Promise<User | undefined> => {
    try {
      await this.getConnection()
      .insert({
        id,
        name,
        password,
      })
      .into(UserDatabase.TABLE_NAME);
      return
    } catch (error: any) {
      throw new BaseError(422, error.sqlMessage || error.message);

    }
  }
}