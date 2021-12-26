import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereUniqueInput } from './sample-where-unique.input';

@ArgsType()
export class DeleteOnesampleArgs {

    @Field(() => sampleWhereUniqueInput, {nullable:false})
    where!: sampleWhereUniqueInput;
}
