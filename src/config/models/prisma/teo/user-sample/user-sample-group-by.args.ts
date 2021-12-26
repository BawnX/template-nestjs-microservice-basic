import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereInput } from './user-sample-where.input';
import { UserSampleOrderByWithAggregationInput } from './user-sample-order-by-with-aggregation.input';
import { UserSampleScalarFieldEnum } from './user-sample-scalar-field.enum';
import { UserSampleScalarWhereWithAggregatesInput } from './user-sample-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UserSampleCountAggregateInput } from './user-sample-count-aggregate.input';
import { UserSampleAvgAggregateInput } from './user-sample-avg-aggregate.input';
import { UserSampleSumAggregateInput } from './user-sample-sum-aggregate.input';
import { UserSampleMinAggregateInput } from './user-sample-min-aggregate.input';
import { UserSampleMaxAggregateInput } from './user-sample-max-aggregate.input';

@ArgsType()
export class UserSampleGroupByArgs {

    @Field(() => UserSampleWhereInput, {nullable:true})
    where?: UserSampleWhereInput;

    @Field(() => [UserSampleOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UserSampleOrderByWithAggregationInput>;

    @Field(() => [UserSampleScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UserSampleScalarFieldEnum>;

    @Field(() => UserSampleScalarWhereWithAggregatesInput, {nullable:true})
    having?: UserSampleScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UserSampleCountAggregateInput, {nullable:true})
    _count?: UserSampleCountAggregateInput;

    @Field(() => UserSampleAvgAggregateInput, {nullable:true})
    _avg?: UserSampleAvgAggregateInput;

    @Field(() => UserSampleSumAggregateInput, {nullable:true})
    _sum?: UserSampleSumAggregateInput;

    @Field(() => UserSampleMinAggregateInput, {nullable:true})
    _min?: UserSampleMinAggregateInput;

    @Field(() => UserSampleMaxAggregateInput, {nullable:true})
    _max?: UserSampleMaxAggregateInput;
}
