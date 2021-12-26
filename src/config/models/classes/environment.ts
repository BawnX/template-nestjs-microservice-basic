import { IsNumber, IsString } from 'class-validator';
import { Environment } from "@main/config/models/interfaces/environment";

export class EnvironmentVariables {
  NODE_ENV: Environment;

  @IsNumber()
  PORT: number;

  @IsString()
  GLOBAL_API_PREFIX: string;

  @IsString()
  GLOBAL_TIME_ZONE: string;

  @IsString()
  DATABASE_TEO_URL: string;

  @IsString()
  DATABASE_LEGACY_URL: string;

  @IsString()
  SCHEMA_SAMPLE: string;
}
