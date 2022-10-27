import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import UserController from "../controller/UserController";
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

const userController = new UserController(userBusiness)

userRouter.post("/singup", userController.singUp)
userRouter.post("/login", userController.login)
