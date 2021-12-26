import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class UserSampleScalarWhereWithAggregatesInput {

    @Field(() => [UserSampleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<UserSampleScalarWhereWithAggregatesInput>;

    @Field(() => [UserSampleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<UserSampleScalarWhereWithAggregatesInput>;

    @Field(() => [UserSampleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<UserSampleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;
}
