import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereUniqueInput } from './sample-where-unique.input';
import { sampleCreateInput } from './sample-create.input';
import { sampleUpdateInput } from './sample-update.input';

@ArgsType()
export class UpsertOnesampleArgs {

    @Field(() => sampleWhereUniqueInput, {nullable:false})
    where!: sampleWhereUniqueInput;

    @Field(() => sampleCreateInput, {nullable:false})
    create!: sampleCreateInput;

    @Field(() => sampleUpdateInput, {nullable:false})
    update!: sampleUpdateInput;
}
