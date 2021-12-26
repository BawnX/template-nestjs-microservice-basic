import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { SampleCountAggregate } from './sample-count-aggregate.output';
import { SampleAvgAggregate } from './sample-avg-aggregate.output';
import { SampleSumAggregate } from './sample-sum-aggregate.output';
import { SampleMinAggregate } from './sample-min-aggregate.output';
import { SampleMaxAggregate } from './sample-max-aggregate.output';

@ObjectType()
export class SampleGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => SampleCountAggregate, {nullable:true})
    _count?: SampleCountAggregate;

    @Field(() => SampleAvgAggregate, {nullable:true})
    _avg?: SampleAvgAggregate;

    @Field(() => SampleSumAggregate, {nullable:true})
    _sum?: SampleSumAggregate;

    @Field(() => SampleMinAggregate, {nullable:true})
    _min?: SampleMinAggregate;

    @Field(() => SampleMaxAggregate, {nullable:true})
    _max?: SampleMaxAggregate;
}
