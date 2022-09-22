import { Request, Response } from "express";
import { userBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { SingUpInputDTO } from "../types/singUpInputDTO";

export default class UserController {
  constructor(
    private userBusiness: userBusiness
  ) { }

  singUp = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const newUser: SingUpInputDTO = {
        name, email, password
      }

      const token = await this.userBusiness.singUp(newUser);

      res.status(200).send({ message: "User registered successfully", token });

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