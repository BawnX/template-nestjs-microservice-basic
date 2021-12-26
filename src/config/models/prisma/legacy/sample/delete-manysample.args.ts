import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereInput } from './sample-where.input';

@ArgsType()
export class DeleteManysampleArgs {

    @Field(() => sampleWhereInput, {nullable:true})
    where?: sampleWhereInput;
}
