import { INestApplication, Logger } from "@nestjs/common";
import { swaggerInit } from "./config/swagger.config";
import { ConfigService } from "@nestjs/config";

export const setUp = async (app: INestApplication): Promise<void> => {
  const configService = app.get(ConfigService);
  const logger = new Logger(MainService.name);
  const PORT = configService.get("PORT");

  swaggerInit(app);

  app.enableCors();
  app.enableVersioning();
  app.setGlobalPrefix(<string>configService.get("GLOBAL_API_PREFIX"));

  logger.log(`Servidor iniciado en el puerto: ${PORT}`);

  await app.listen(PORT || 5000);
};

export default class MainService {
}
