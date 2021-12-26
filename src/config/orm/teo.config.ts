import { join } from "path";
import * as dotenv from "dotenv";
import * as glob from "glob";
import * as fs from 'fs'

const generateSchema = () => {
  dotenv.config({ path: join(__dirname, "../../../", `/environments/.env.${process.env.NODE_ENV}`) });

  const clientTEO = `generator client {
    provider = "prisma-client-js"
    output   = "./generated/teo"
  }
  
  generator nestgraphql {
    provider               = "node node_modules/prisma-nestjs-graphql"
    output                 = "../src/config/models/prisma/teo"
    fields_Validator_from  = "class-validator"
    fields_Validator_input = true
  }`;

  const dataSourceTEO = `
  datasource teo_sample {
    provider = "sqlserver"
    url      = "${process.env.DATABASE_TEO_URL}${process.env.SCHEMA_SAMPLE}"
  }`;

  console.info('Obteniendo Schemas TEO',  "\x1b[34m")
  const modulesFilesTEO = glob.sync("src/modules/**/prisma/TEO/*.prisma");

  console.info('Generando Schemas TEO',  "\x1b[34m")
  const modulesTEO = modulesFilesTEO.reduce((a,f) => {
    const module = fs.readFileSync(f)
    return a + '\n' + module
  }, '')

  const prismaSchemaTEO = `
  ${clientTEO}
  
  ${dataSourceTEO}
  
  ${modulesTEO}
  `

  console.info('Escribiendo schema_teo.prisma',"\x1b[34m")
  fs.writeFileSync('prisma/schema_teo.prisma', prismaSchemaTEO)
};

export default generateSchema();
