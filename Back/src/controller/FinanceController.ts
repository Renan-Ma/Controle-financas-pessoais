import { Request, Response } from "express";
import FinanceBusiness from "../business/FinanceBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { FinanceInputDTO } from "../types/financeInputDTO";

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

  updateExpense = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const { id } = req.params;
      const { date, category, description, value } = req.body;

      await this.financeBusiness.updateExpense(id, token, { date, category, description, value });

      res.status(200).send({ message: "Despesa atualizada com sucesso" });
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).send(error.message);
      }
      res.status(500).send("Internal server error");
    } finally {
      BaseDatabase.destroyConnection();
    }
  }

  deleteExpense = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;
      const { id } = req.params;

      await this.financeBusiness.deleteExpense(id, token);

      res.status(200).send({ message: "Despesa excluída com sucesso" });
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
      const token = req.headers.authorization!;

      const { date } = req.query;

      const result = await this.financeBusiness.getExpense(date, token);

      res.status(200).send(result);
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