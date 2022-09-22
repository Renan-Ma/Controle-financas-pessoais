import { UserDatabase } from "../data/UserDatabase";
import { BaseError } from "../error/BaseError";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { SingUpInputDTO } from "../types/singUpInputDTO";

export class userBusiness {
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
      hashedPassword
    )

    const token = this.authenticator.generateToken({ id })

    return token;
  }

}