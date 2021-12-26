import { Global, Module } from "@nestjs/common";
import PrismaTEOService from "@main/modules/prisma/prismaTEO.service";
import PrismaLegacyService from "@main/modules/prisma/prismaLegacy.service";

@Global()
@Module({
  providers: [PrismaTEOService, PrismaLegacyService],
  exports: [PrismaTEOService, PrismaLegacyService],
})
export class PrismaModule {}
