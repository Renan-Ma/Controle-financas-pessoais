import express, { Express } from 'express';
import dotenv from 'dotenv'
import { AddressInfo } from 'net'

import cors from 'cors'

dotenv.config();

export const app: Express = express();
app.use(express.json())
app.use(cors())



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando na porta ${address.port}`)
  } else {
    console.log("server is not available")
  }
})