import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereInput } from './user-sample-where.input';

@ArgsType()
export class DeleteManyUserSampleArgs {

    @Field(() => UserSampleWhereInput, {nullable:true})
    where?: UserSampleWhereInput;
}
