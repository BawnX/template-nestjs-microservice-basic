import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import MainService from "@main/main.service";
import { validate } from "@main/config/environment.config";
import SampleModule from "@sample/sample.module";
import { TypeOrmModule } from "@nestjs/typeorm";

const ENV = process.env.NODE_ENV;
@Module({
  imports: [
    ConfigModule.forRoot({
      validate,
      envFilePath: !ENV
        ? './environments/.env.development'
        : `./environments/.env.${ENV}`,
      isGlobal: true,
    }),
    TypeOrmModule.forRoot(),
    SampleModule,
  ],
  providers: [
    MainService,
  ],
})
export class MainModule {}
