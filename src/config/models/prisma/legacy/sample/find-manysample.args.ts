import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereInput } from './sample-where.input';
import { sampleOrderByWithRelationInput } from './sample-order-by-with-relation.input';
import { sampleWhereUniqueInput } from './sample-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SampleScalarFieldEnum } from '../prisma/sample-scalar-field.enum';

@ArgsType()
export class FindManysampleArgs {

    @Field(() => sampleWhereInput, {nullable:true})
    where?: sampleWhereInput;

    @Field(() => [sampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<sampleOrderByWithRelationInput>;

    @Field(() => sampleWhereUniqueInput, {nullable:true})
    cursor?: sampleWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SampleScalarFieldEnum>;
}
