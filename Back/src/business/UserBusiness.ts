import { UserDatabase } from "../data/UserDatabase";
import { BaseError } from "../error/BaseError";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/loginInputDTO";
import { SingUpInputDTO } from "../types/singUpInputDTO";

export class UserBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private userDatabase: UserDatabase,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) { }

  singUp = async (newUser: SingUpInputDTO) => {
    const { name, email, password } = newUser;

    if (!name || !email || !password) {
      throw new BaseError(422, "Invalid fields");
    }
    const id = this.idGenerator.generate();

    const hashedPassword = await this.hashManager.hash(password)

    const user = await this.userDatabase.createUser(
      id,
      name,
      email,
      hashedPassword
    )

    const token = this.authenticator.generateToken({ id })

    return token;
  }

  login = async (user: LoginInputDTO) => {
    const { email, password} = user;
    if(!email || !password) {
      throw new Error("Campos inválidos");
    }

      const userData = await this.userDatabase.selectUser(email);
      if(!userData){
        throw new Error("Email incorreta");
      }

      const passwordIsCorrect: boolean = await this.hashManager.compare(password, userData.password);
    if (passwordIsCorrect) {
      console.log(passwordIsCorrect, userData.password, password)
      throw new Error("senha incorreta");
    }else{
      console.log("else", passwordIsCorrect, userData.password, password)
    }
      
    const token = this.authenticator.generateToken({ id: userData.id });

    return token;
  }

}