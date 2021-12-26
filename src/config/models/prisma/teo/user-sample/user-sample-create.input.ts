import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import * as Validator from 'class-validator';

@InputType()
export class UserSampleCreateInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    @Validator.MinLength(3)
    name?: string;
}
