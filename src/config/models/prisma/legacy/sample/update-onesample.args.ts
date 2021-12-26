import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleUpdateInput } from './sample-update.input';
import { sampleWhereUniqueInput } from './sample-where-unique.input';

@ArgsType()
export class UpdateOnesampleArgs {

    @Field(() => sampleUpdateInput, {nullable:false})
    data!: sampleUpdateInput;

    @Field(() => sampleWhereUniqueInput, {nullable:false})
    where!: sampleWhereUniqueInput;
}
