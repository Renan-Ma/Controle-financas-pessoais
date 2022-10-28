import Expense from "../model/Expense";
import { BaseDatabase } from "./BaseDatabase";

export default class FinanceDatabase extends BaseDatabase {
  protected TABLE_NAME = "financas_gastos";

  public createExpense = async (expense: Expense) => {
    try {
      await this.getConnection
    } catch (error) {
      
    }
  }
}