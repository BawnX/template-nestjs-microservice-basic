import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereInput } from './user-sample-where.input';
import { UserSampleOrderByWithRelationInput } from './user-sample-order-by-with-relation.input';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserSampleCountAggregateInput } from './user-sample-count-aggregate.input';
import { UserSampleAvgAggregateInput } from './user-sample-avg-aggregate.input';
import { UserSampleSumAggregateInput } from './user-sample-sum-aggregate.input';
import { UserSampleMinAggregateInput } from './user-sample-min-aggregate.input';
import { UserSampleMaxAggregateInput } from './user-sample-max-aggregate.input';

@ArgsType()
export class UserSampleAggregateArgs {

    @Field(() => UserSampleWhereInput, {nullable:true})
    where?: UserSampleWhereInput;

    @Field(() => [UserSampleOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UserSampleOrderByWithRelationInput>;

    @Field(() => UserSampleWhereUniqueInput, {nullable:true})
    cursor?: UserSampleWhereUniqueInput;

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
