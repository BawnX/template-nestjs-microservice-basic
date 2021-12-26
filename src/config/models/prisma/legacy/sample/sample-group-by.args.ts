import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { sampleWhereInput } from './sample-where.input';
import { sampleOrderByWithAggregationInput } from './sample-order-by-with-aggregation.input';
import { SampleScalarFieldEnum } from '../prisma/sample-scalar-field.enum';
import { sampleScalarWhereWithAggregatesInput } from './sample-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class sampleGroupByArgs {

    @Field(() => sampleWhereInput, {nullable:true})
    where?: sampleWhereInput;

    @Field(() => [sampleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<sampleOrderByWithAggregationInput>;

    @Field(() => [SampleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SampleScalarFieldEnum>;

    @Field(() => sampleScalarWhereWithAggregatesInput, {nullable:true})
    having?: sampleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;
}
