import { join } from "path";
import * as dotenv from "dotenv";
import * as glob from "glob";
import * as fs from 'fs'

const generateSchema = () => {
  dotenv.config({ path: join(__dirname, "../../../", `/environments/.env.${process.env.NODE_ENV}`) });

  const clientLegacy = `generator client {
    provider = "prisma-client-js"
    output   = "./generated/legacy"
  }
  
  generator nestgraphql {
    provider               = "node node_modules/prisma-nestjs-graphql"
    output                 = "../src/config/models/prisma/legacy"
    fields_Validator_from  = "class-validator"
    fields_Validator_input = true
  }`;

  const dataSourceLegacy = `datasource legacy {
    provider = "sqlserver"
    url      = "${process.env.DATABASE_LEGACY_URL}"
  }`;

  console.info('Obteniendo Schemas Legacy',  "\x1b[34m")
  const modulesFilesLegacy = glob.sync("src/modules/**/prisma/Legacy/*.prisma");

  console.info('Generando Schemas Legacy',  "\x1b[34m")
  const modulesLegacy = modulesFilesLegacy.reduce((a,f) => {
    const module = fs.readFileSync(f)
    return a + '\n' + module
  }, '')

  const prismaSchemaLegacy = `
  ${clientLegacy}
  
  ${dataSourceLegacy}
  
  ${modulesLegacy}
  `

  console.info('Escribiendo schema_legacy.prisma',"\x1b[34m")
  fs.writeFileSync('prisma/schema_legacy.prisma', prismaSchemaLegacy)
};

export default generateSchema();
