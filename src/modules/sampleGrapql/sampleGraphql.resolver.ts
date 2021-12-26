import { UserSample } from "@models/teo/user-sample/user-sample.model";
import { Query, Resolver } from "@nestjs/graphql";
import PrismaTEOService from "@main/modules/prisma/prismaTEO.service";
import PrismaLegacyService from "@main/modules/prisma/prismaLegacy.service";

@Resolver((of) => UserSample)
export class SampleGraphqlResolver {
  constructor(
    private prismaTEO: PrismaTEOService,
    private prismaLegacy: PrismaLegacyService
  ) {
  }

  @Query(returns => [UserSample])
  async allUsers(): Promise<UserSample[]> {
    return this.prismaTEO.userSample.findMany()
  }
}
