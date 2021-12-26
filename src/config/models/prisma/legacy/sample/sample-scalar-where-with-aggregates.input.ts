import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class sampleScalarWhereWithAggregatesInput {

    @Field(() => [sampleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<sampleScalarWhereWithAggregatesInput>;

    @Field(() => [sampleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<sampleScalarWhereWithAggregatesInput>;

    @Field(() => [sampleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<sampleScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;
}
