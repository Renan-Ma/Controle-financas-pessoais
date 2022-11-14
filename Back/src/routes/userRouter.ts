import express from "express";
import FinanceBusiness from "../business/FinanceBusiness";
import { UserBusiness } from "../business/UserBusiness";
import FinanceController from "../controller/FinanceController";
import UserController from "../controller/UserController";
import FinanceDatabase from "../data/FinanceDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const userRouter = express.Router();

const userBusiness = new UserBusiness(
  new IdGenerator(),
  new UserDatabase(),
  new HashManager(),
  new Authenticator(),
)
const financeBusiness = new FinanceBusiness(
  new FinanceDatabase(),
  new IdGenerator(),
  new Authenticator(),
)

const userController = new UserController(userBusiness)
const financeController = new FinanceController(financeBusiness)

userRouter.post("/singup", userController.singUp)
userRouter.post("/login", userController.login)
userRouter.post("/registerexpense", financeController.expense)
