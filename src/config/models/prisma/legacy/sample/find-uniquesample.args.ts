import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereUniqueInput } from './sample-where-unique.input';

@ArgsType()
export class FindUniquesampleArgs {

    @Field(() => sampleWhereUniqueInput, {nullable:false})
    where!: sampleWhereUniqueInput;
}
