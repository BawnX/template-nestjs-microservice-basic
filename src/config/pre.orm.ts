import { join } from "path";
import fs = require("fs");
import IDataBase from "@main/config/models/interfaces/database";
import * as dotenv from "dotenv";

const preorm = () => {
  dotenv.config({path: join(__dirname, '../../', `/environments/.env.${process.env.NODE_ENV}`)})

  const ormConfig: IDataBase = {
    name: "default",
    type: "mssql",
    host: process.env.HOST_SQL,
    password: process.env.PASSWORD_SQL,
    username: process.env.USER_SQL,
    database: process.env.DATABASE_SQL,
    connectionTimeout: 30000,
    port: +(process.env.PORT_SQL || 1433),
    options: {
      trustServerCertificate: true,
      useUTC: true
    },
    cli: {
      migrationsDir: "src/migrations"
    },
    migrations: [
      "src/migrations/*.ts"
    ],
    useNewUrlParser: true,
    synchronize: false,
    logging: false,
    autoLoadEntities: true,
    entities: ["dist/src/**/entities/*.{ts,js}"],
    useUnifiedTopology: true,
    pool: {
      max: 50
    }
  }

  fs.writeFileSync(
    "ormconfig.json",
    JSON.stringify(
      ormConfig,
      null,
      2
    )
  )
}

export default preorm()
