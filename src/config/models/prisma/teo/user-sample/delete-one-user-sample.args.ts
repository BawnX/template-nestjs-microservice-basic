import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';

@ArgsType()
export class DeleteOneUserSampleArgs {

    @Field(() => UserSampleWhereUniqueInput, {nullable:false})
    where!: UserSampleWhereUniqueInput;
}
