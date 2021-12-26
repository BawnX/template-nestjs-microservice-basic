import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleCreateInput } from './sample-create.input';

@ArgsType()
export class CreateOnesampleArgs {

    @Field(() => sampleCreateInput, {nullable:false})
    data!: sampleCreateInput;
}
