import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSampleCountOrderByAggregateInput } from './user-sample-count-order-by-aggregate.input';
import { UserSampleAvgOrderByAggregateInput } from './user-sample-avg-order-by-aggregate.input';
import { UserSampleMaxOrderByAggregateInput } from './user-sample-max-order-by-aggregate.input';
import { UserSampleMinOrderByAggregateInput } from './user-sample-min-order-by-aggregate.input';
import { UserSampleSumOrderByAggregateInput } from './user-sample-sum-order-by-aggregate.input';

@InputType()
export class UserSampleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => UserSampleCountOrderByAggregateInput, {nullable:true})
    _count?: UserSampleCountOrderByAggregateInput;

    @Field(() => UserSampleAvgOrderByAggregateInput, {nullable:true})
    _avg?: UserSampleAvgOrderByAggregateInput;

    @Field(() => UserSampleMaxOrderByAggregateInput, {nullable:true})
    _max?: UserSampleMaxOrderByAggregateInput;

    @Field(() => UserSampleMinOrderByAggregateInput, {nullable:true})
    _min?: UserSampleMinOrderByAggregateInput;

    @Field(() => UserSampleSumOrderByAggregateInput, {nullable:true})
    _sum?: UserSampleSumOrderByAggregateInput;
}
