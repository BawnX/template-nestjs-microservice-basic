import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleUpdateManyMutationInput } from './user-sample-update-many-mutation.input';
import { UserSampleWhereInput } from './user-sample-where.input';

@ArgsType()
export class UpdateManyUserSampleArgs {

    @Field(() => UserSampleUpdateManyMutationInput, {nullable:false})
    data!: UserSampleUpdateManyMutationInput;

    @Field(() => UserSampleWhereInput, {nullable:true})
    where?: UserSampleWhereInput;
}
