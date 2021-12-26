import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserSampleCountAggregate } from './user-sample-count-aggregate.output';
import { UserSampleAvgAggregate } from './user-sample-avg-aggregate.output';
import { UserSampleSumAggregate } from './user-sample-sum-aggregate.output';
import { UserSampleMinAggregate } from './user-sample-min-aggregate.output';
import { UserSampleMaxAggregate } from './user-sample-max-aggregate.output';

@ObjectType()
export class AggregateUserSample {

    @Field(() => UserSampleCountAggregate, {nullable:true})
    _count?: UserSampleCountAggregate;

    @Field(() => UserSampleAvgAggregate, {nullable:true})
    _avg?: UserSampleAvgAggregate;

    @Field(() => UserSampleSumAggregate, {nullable:true})
    _sum?: UserSampleSumAggregate;

    @Field(() => UserSampleMinAggregate, {nullable:true})
    _min?: UserSampleMinAggregate;

    @Field(() => UserSampleMaxAggregate, {nullable:true})
    _max?: UserSampleMaxAggregate;
}
