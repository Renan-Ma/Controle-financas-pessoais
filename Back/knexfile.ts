import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(__dirname, ".env") });

const config = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
    database: process.env.DB_SCHEMA || "controle_financas",
    port: 3306,
  },
  migrations: {
    directory: "./src/migrations",
    extension: "ts",
  },
};

export default config;
