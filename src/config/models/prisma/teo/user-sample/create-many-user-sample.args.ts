import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleCreateManyInput } from './user-sample-create-many.input';

@ArgsType()
export class CreateManyUserSampleArgs {

    @Field(() => [UserSampleCreateManyInput], {nullable:false})
    data!: Array<UserSampleCreateManyInput>;
}
