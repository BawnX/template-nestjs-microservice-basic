import { Module } from "@nestjs/common";
import { SampleGraphqlResolver } from "@main/modules/sampleGrapql/sampleGraphql.resolver";

const resolvers = [SampleGraphqlResolver]

@Module({
  imports: [],
  providers: [...resolvers]
})
export class SampleGraphqlModule {
}
