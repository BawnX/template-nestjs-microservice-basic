import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';
import { UserSampleCreateInput } from './user-sample-create.input';
import { UserSampleUpdateInput } from './user-sample-update.input';

@ArgsType()
export class UpsertOneUserSampleArgs {

    @Field(() => UserSampleWhereUniqueInput, {nullable:false})
    where!: UserSampleWhereUniqueInput;

    @Field(() => UserSampleCreateInput, {nullable:false})
    create!: UserSampleCreateInput;

    @Field(() => UserSampleUpdateInput, {nullable:false})
    update!: UserSampleUpdateInput;
}
