import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class sampleWhereInput {

    @Field(() => [sampleWhereInput], {nullable:true})
    AND?: Array<sampleWhereInput>;

    @Field(() => [sampleWhereInput], {nullable:true})
    OR?: Array<sampleWhereInput>;

    @Field(() => [sampleWhereInput], {nullable:true})
    NOT?: Array<sampleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;
}
