import { Request, Response } from "express";
import FinanceBusiness from "../business/FinanceBusiness";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { FinanceInputDTO } from "../types/financeInputDTO";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SingUpInputDTO } from "../types/singUpInputDTO";

export default class FinanceController {
  constructor(
    private financeBusiness: FinanceBusiness
  ) { }

  expense = async (req: Request, res: Response) => {
    try {      
      const token = req.headers.authorization!;
      const { date, category, description, value } = req.body;

      const newExpense: FinanceInputDTO = {
        date, category, description, value
      }

      const result = await this.financeBusiness.createExpense(newExpense, token);

      res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    } finally {
      BaseDatabase.destroyConnection();
    }
  }

  getExpense = async (req: Request, res: Response) => {
    try {
      const {date} = req.body;

      // const result = await this.financeBusiness.getExpense(date);

      // res.status(201).send(result);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    } finally {
      BaseDatabase.destroyConnection();    
    }
  }
}