import { BaseError } from "../error/BaseError";
import Expense from "../model/Expense";
import { BaseDatabase } from "./BaseDatabase";

export default class FinanceDatabase extends BaseDatabase {
  private static TABLE_NAME = "financas_gastos";

  public createExpense = async (expense: Expense) => {
    try {
      this.getConnection()
      .insert({
        expense
      })
      .into(FinanceDatabase.TABLE_NAME)
    } catch (error:any) {
      throw new BaseError(422, error.sqlMessage || error.message);
    }
  }
}