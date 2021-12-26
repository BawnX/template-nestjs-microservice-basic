import { Body, Controller, Get, Post, Query } from "@nestjs/common";
import { ApiTags } from '@nestjs/swagger';
import PrismaTEOService from "@main/modules/prisma/prismaTEO.service";
import PrismaLegacyService from "@main/modules/prisma/prismaLegacy.service";
import {
  Prisma,
  UserSample,
} from "@prisma/teo";

@ApiTags('sample')
@Controller('sample')
export default class SampleController {
  constructor(
    private prismaTEO: PrismaTEOService,
    private prismaLegacy: PrismaLegacyService,
  ) {
  }

  @Get()
  public getAll() {
    return this.prismaTEO.userSample.findMany()
  }

  @Post()
  public create(@Body() data: Prisma.UserSampleCreateInput): Promise<UserSample>{
    return this.prismaTEO.userSample.create({
      data
    })
  }

  @Get('store-procedure')
  public getStoreProcedure(
    @Query('period') period: string
  ) {
    return this.prismaLegacy.$queryRaw`EXEC PROC_SEL_POLICY_AUTOMATIC_PROCESS_RENEWAL @period=${period}`
  }
}
