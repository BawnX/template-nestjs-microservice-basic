import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleUpdateManyMutationInput } from './sample-update-many-mutation.input';
import { sampleWhereInput } from './sample-where.input';

@ArgsType()
export class UpdateManysampleArgs {

    @Field(() => sampleUpdateManyMutationInput, {nullable:false})
    data!: sampleUpdateManyMutationInput;

    @Field(() => sampleWhereInput, {nullable:true})
    where?: sampleWhereInput;
}
