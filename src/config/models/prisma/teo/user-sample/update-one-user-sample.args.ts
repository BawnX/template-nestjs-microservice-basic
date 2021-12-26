import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleUpdateInput } from './user-sample-update.input';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';

@ArgsType()
export class UpdateOneUserSampleArgs {

    @Field(() => UserSampleUpdateInput, {nullable:false})
    data!: UserSampleUpdateInput;

    @Field(() => UserSampleWhereUniqueInput, {nullable:false})
    where!: UserSampleWhereUniqueInput;
}
