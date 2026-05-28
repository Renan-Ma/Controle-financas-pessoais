import { BaseError } from "../error/BaseError";
import Expense from "../model/Expense";
import { BaseDatabase } from "./BaseDatabase";

export default class FinanceDatabase extends BaseDatabase {
  private static TABLE_NAME = "financas_gastos";

  public createExpense = async (expense: Expense) => {
    try {
      const response = this.getConnection()
      .insert(
        expense
      )
      .into(FinanceDatabase.TABLE_NAME)
      return response
    } catch (error:any) {
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  }

  public getExpense = async (dateStart:string, dateEnd:string, author:string) => {
    try {
      const result = this.getConnection()
      .select()
      .from(FinanceDatabase.TABLE_NAME)
      .whereBetween("date", [dateStart, dateEnd])
      .andWhere("author_id", author)

      return result
    } catch (error:any) {
      console.log("error")
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  }
}