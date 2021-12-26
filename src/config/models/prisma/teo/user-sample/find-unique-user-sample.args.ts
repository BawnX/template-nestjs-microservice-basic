import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';

@ArgsType()
export class FindUniqueUserSampleArgs {

    @Field(() => UserSampleWhereUniqueInput, {nullable:false})
    where!: UserSampleWhereUniqueInput;
}
