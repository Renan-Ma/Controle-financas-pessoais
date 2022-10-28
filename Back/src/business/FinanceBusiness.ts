import FinanceDatabase from "../data/FinanceDatabase";
import Expense from "../model/Expense";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { FinanceInputDTO } from "../types/financeInputDTO";

export default class FinanceBusiness {
  constructor(private financeData: FinanceDatabase,
    private idGenerator: IdGenerator
    ) {}

  public createExpense =async (newExpense:FinanceInputDTO, token: string) => {
    const {date, category, description, value} = newExpense;
    if(!date || !category || !description || !value) {
      throw new Error ("Campos inválidos")
    }

    if(!token){
      throw new Error("Para acessar essa funcionalidoda é necessario estar logado")
    }

    const authenticator = Authenticator.getTokenData(token)
    if(!authenticator){
      throw new Error("Token inválido")
    }

    const id = this.idGenerator.generate();

    const expense = new Expense(
      id,
      date,
      category,
      description,
      value,
      authenticator.id 
    )

    await this.financeData.createExpense(expense)

    return "Dispesa criada com sucesso!"
  }
}