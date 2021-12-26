import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';

@InputType()
export class UserSampleWhereInput {

    @Field(() => [UserSampleWhereInput], {nullable:true})
    AND?: Array<UserSampleWhereInput>;

    @Field(() => [UserSampleWhereInput], {nullable:true})
    OR?: Array<UserSampleWhereInput>;

    @Field(() => [UserSampleWhereInput], {nullable:true})
    NOT?: Array<UserSampleWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    description?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;
}
