import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserSampleWhereInput } from './user-sample-where.input';
import { UserSampleOrderByWithRelationInput } from './user-sample-order-by-with-relation.input';
import { UserSampleWhereUniqueInput } from './user-sample-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserSampleScalarFieldEnum } from './user-sample-scalar-field.enum';

@ArgsType()
export class FindFirstUserSampleArgs {

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

    @Field(() => [UserSampleScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof UserSampleScalarFieldEnum>;
}
