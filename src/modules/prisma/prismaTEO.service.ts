import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Prisma, PrismaClient } from "@prisma/teo";

/**
 * Extension of the PrismaClient for use with NestJs.
 */
@Injectable()
export default class PrismaTEOService extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor(private configService: ConfigService) {
    super({
      datasources: {
        teo_sample: {
          url: `${configService.get('DATABASE_TEO_URL')}${configService.get('SCHEMA_SAMPLE')}`
        },
      },
    });
  }

  async onModuleInit(): Promise<void> {
    await this.$connect();
  }

  async onModuleDestroy(): Promise<void> {
    await this.$disconnect();
  }

  clearDatabase() {
    const modelNames = Prisma.dmmf.datamodel.models.map(model => model.name);

    return Promise.all(
      modelNames.map(modelName =>
        this[modelName[0].toLowerCase() + modelName.slice(1)].deleteMany(),
      ),
    );
  }
}
