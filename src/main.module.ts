import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import MainService from "@main/main.service";
import { validate } from "@main/config/environment.config";
import SampleModule from "@sample/sample.module";
import { PrismaModule } from "@main/modules/prisma/prisma.module";
import { SampleGraphqlModule } from "@main/modules/sampleGrapql/sampleGraphql.module";
import { GraphQLModule } from "@nestjs/graphql";

const ENV = process.env.NODE_ENV;

@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      envFilePath: !ENV
        ? "./environments/.env.development"
        : `./environments/.env.${ENV}`,
      isGlobal: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql'
    }),
    SampleModule,
    PrismaModule,
    SampleGraphqlModule
  ],
  providers: [
    MainService
  ]
})

export class MainModule {}
