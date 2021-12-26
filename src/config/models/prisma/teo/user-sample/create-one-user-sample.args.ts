import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleCreateInput } from './user-sample-create.input';

@ArgsType()
export class CreateOneUserSampleArgs {

    @Field(() => UserSampleCreateInput, {nullable:false})
    data!: UserSampleCreateInput;
}
