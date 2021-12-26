import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { sampleCountOrderByAggregateInput } from './sample-count-order-by-aggregate.input';
import { sampleAvgOrderByAggregateInput } from './sample-avg-order-by-aggregate.input';
import { sampleMaxOrderByAggregateInput } from './sample-max-order-by-aggregate.input';
import { sampleMinOrderByAggregateInput } from './sample-min-order-by-aggregate.input';
import { sampleSumOrderByAggregateInput } from './sample-sum-order-by-aggregate.input';

@InputType()
export class sampleOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => sampleCountOrderByAggregateInput, {nullable:true})
    _count?: sampleCountOrderByAggregateInput;

    @Field(() => sampleAvgOrderByAggregateInput, {nullable:true})
    _avg?: sampleAvgOrderByAggregateInput;

    @Field(() => sampleMaxOrderByAggregateInput, {nullable:true})
    _max?: sampleMaxOrderByAggregateInput;

    @Field(() => sampleMinOrderByAggregateInput, {nullable:true})
    _min?: sampleMinOrderByAggregateInput;

    @Field(() => sampleSumOrderByAggregateInput, {nullable:true})
    _sum?: sampleSumOrderByAggregateInput;
}
