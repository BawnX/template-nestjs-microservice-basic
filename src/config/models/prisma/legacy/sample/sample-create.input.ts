import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class sampleCreateInput {

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    name?: string;
}
