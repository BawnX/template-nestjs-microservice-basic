import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleCreateManyInput } from './sample-create-many.input';

@ArgsType()
export class CreateManysampleArgs {

    @Field(() => [sampleCreateManyInput], {nullable:false})
    data!: Array<sampleCreateManyInput>;
}
