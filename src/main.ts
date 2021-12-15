import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import { setUp } from './main.service';
import { throwError } from '@main/config/errors.config';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(MainModule, { cors: false });
  setUp(app).catch(throwError);
}

bootstrap();
